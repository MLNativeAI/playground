import axios, { AxiosError } from 'axios';
import { type NextApiRequest, type NextApiResponse } from 'next';
import { type Readable } from 'stream';

const SUPPORTED_MODELS = ['resnet-50', 'flan-t5-large'];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { model } = req.query || {};

  if (typeof model !== `string`) {
    return res.status(400).json({ error: 'Invalid model param' });
  }

  if (!SUPPORTED_MODELS.includes(model)) {
    return res.status(400).json({ error: 'Model not supported' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const API_URL = process.env.NEXT_PUBLIC_MLNATIVE_API_URL;
  const API_KEY = process.env.MLNATIVE_USER_API_KEY;
  if (!API_URL) {
    return res.status(500).json({ error: 'Backend not configured' });
  }

  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await axios.post<Readable>(`${API_URL}/predict/${model}`, req.body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    });

    return res.status(response.status).json(response.data);
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log(err.response.data);
      res.status(err.response.status).json(err.response.data.message);
    } else {
      console.log(err);
      return res.status(500).json({ error: 'An error occurred while making the request' });
    }
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb'
    }
  }
};

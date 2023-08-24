import axios, { AxiosError } from 'axios';
import { type NextApiRequest, type NextApiResponse } from 'next';
import { Readable } from 'stream';

const SUPPORTED_MODELS = ['tortoise', 'stdiff'];

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
    const url = `${API_URL}/predict/${model}`;
    const response = await axios.post<Readable>(`${API_URL}/predict/${model}`, req.body, {
      responseType: 'stream',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const contentType = response.headers['content-type'];

    if (contentType === 'application/json') {
      return res.status(response.status).json(response.data);
    } else {
      const { headers, status } = response;

      if (model == 'tortoise') {
        res.setHeader('content-disposition', `attachment; filename="audio.wav"}"`);
      }

      if (model == 'stdiff') {
        res.setHeader('content-disposition', `attachment; filename="image.png"}"`);
      }
      response.data.pipe(res);
    }
  } catch (err) {
    console.log(err);
    if (err instanceof AxiosError && err.response) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      res.status(err.response.status).json(err.response.data.message);
    } else {
      return res.status(500).json({ error: 'An error occurred while making the request' });
    }
  }
}

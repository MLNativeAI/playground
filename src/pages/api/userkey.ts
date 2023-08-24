import { type NextApiRequest, type NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';
import { ApiKeyData } from '~/lib/data';
import { getAuth } from '@clerk/nextjs/server';

const getApiKey = async (userId) => {
  const API_URL = process.env.NEXT_PUBLIC_MLNATIVE_API_URL;
  const ADMIN_API_KEY = process.env.MLNATIVE_ADMIN_API_KEY;

  try {
    const url = `${API_URL}/admin/apikey/${userId}`;
    const response = await axios.get<ApiKeyData>(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ADMIN_API_KEY}`
      }
    });
    return response.data;
  } catch (err) {
    console.error(err);
    if (err.response.status != 404) {
      console.error(err);
    }
    return undefined;
  }
};

const createNewApiKey = async (userId) => {
  const API_URL = process.env.NEXT_PUBLIC_MLNATIVE_API_URL;
  const ADMIN_API_KEY = process.env.MLNATIVE_ADMIN_API_KEY;

  try {
    const url = `${API_URL}/admin/apikey`;
    const body = {
      name: userId,
      authScope: 'User'
    };
    const response = await axios.post<ApiKeyData>(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ADMIN_API_KEY}`
      }
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  let userApiKey = await getApiKey(userId);
  if (!userApiKey) {
    userApiKey = await createNewApiKey(userId);
  }

  return res.status(200).json(userApiKey);
}

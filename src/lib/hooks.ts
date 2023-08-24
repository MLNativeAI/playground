import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiKeyData } from '~/lib/data';

export const useUserApiKey = () => {
  const { isSignedIn } = useAuth();
  const [apiKey, setApiKey] = useState(undefined);
  const [isApiKeyLoaded, setApiKeyLoaded] = useState(false);

  const loadApiKey = async () => {
    if (!isSignedIn) {
      // hack to not play with callback from clerk
      localStorage.removeItem('userApiKey');
      return;
    }
    const userApiKey = localStorage.getItem('userApiKey');
    if (!userApiKey) {
      const resp = await axios.get<ApiKeyData>('/api/userkey');
      localStorage.setItem('userApiKey', resp.data.jwt);
      setApiKey(resp.data.jwt);
      setApiKeyLoaded(true);
    } else {
      setApiKey(userApiKey);
      setApiKeyLoaded(true);
    }
  };

  useEffect(() => {
    loadApiKey();
  }, [isSignedIn]);

  return { isApiKeyLoaded, apiKey };
};

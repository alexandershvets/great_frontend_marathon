import { useState, useCallback } from 'react';

function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    
    try {
      const response = await fetch(url, { method, body, headers });
      console.log('request');
      if (!response.ok) {
        throw new Error(`Coud not fetch ${url}, status ${response.status}`);
      }

      const data = await response.json();
      
      setLoading(false)
      
      return data;
      
    } catch (err) {

      setLoading(false);
      setError(err);

      throw err;

    }
    
  }, []);

  const clearRequest = useCallback(() => setError(null), []);

  return {
    loading,
    error,
    request,
    clearRequest
  };
}

export default useHttp;
import { useCallback } from 'react';

function useHttp() {
  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

    try {
      const response = await fetch(url, {
        method,
        body,
        headers
      });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status ${response.status}`);
      }
      
      return await response.json();

    } catch (err) {
      throw err;
    }
    
  }, []);

  return {
    request
  };
}

export default useHttp;
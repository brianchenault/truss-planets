import { useEffect, useState } from 'react';
import { defaultApiUrl, fixHttp } from '../util';

const useFetchPlanetsData = () => {
  const [apiUrl, setApiUrl] = useState(defaultApiUrl);
  const [data, setData] = useState({
    results: [],
    previous: null,
    next: null,
  });
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [hasFetchError, setHasFetchError] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      setIsFetchingData(true);
      setHasFetchError(false);

      try {
        const response = await fetch(fixHttp(apiUrl));
        setData(await response.json());
      } catch (e) {
        setHasFetchError(true);
      } finally {
        setIsFetchingData(false);
      }
    };

    fetchPlanets();
  }, [apiUrl]);

  return {
    apiUrl,
    setApiUrl,
    isFetchingData,
    hasFetchError,
    data,
  };
};

export default useFetchPlanetsData;

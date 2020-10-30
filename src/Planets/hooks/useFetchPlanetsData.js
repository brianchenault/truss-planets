import { useEffect, useState } from 'react';
import { defaultApiUrl } from '../util';

const useFetchPlanetsData = () => {
  const [apiUrl, setApiUrl] = useState(defaultApiUrl);
  const [data, setData] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [hasFetchError, setHasFetchError] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      setIsFetchingData(true);
      setHasFetchError(false);

      try {
        const response = await fetch(apiUrl);
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

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
        const responseJson = await response.json();
        responseJson.results = [...data.results, ...responseJson.results]; // merge fetched results in
        setData(responseJson);
      } catch (e) {
        setHasFetchError(true);
      } finally {
        setIsFetchingData(false);
      }
    };

    fetchPlanets();
  }, [apiUrl]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  return {
    apiUrl,
    setApiUrl,
    isFetchingData,
    hasFetchError,
    data,
  };
};

export default useFetchPlanetsData;

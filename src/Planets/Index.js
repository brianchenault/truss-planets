import React from 'react';
import Navigation from './components/Navigation';
import Table from './components/Table';
import useFetchPlanetsData from './hooks/useFetchPlanetsData';
import {
  Link,
  PlanetsContainer,
  PlanetsTableWrapper,
  ErrorMessage,
  DataSourceLabel,
} from './styles';

const Planets = () => {
  const {
    apiUrl,
    setApiUrl,
    isFetchingData,
    hasFetchError,
    data,
  } = useFetchPlanetsData();

  return (
    <PlanetsContainer>
      <h1>Planets</h1>

      {isFetchingData ? (
        <label>Please wait while planet data is fetched...</label>
      ) : !hasFetchError ? (
        <PlanetsTableWrapper>
          <Table data={data} />
          <DataSourceLabel>
            Data source:{' '}
            <Link href={apiUrl} target="_blank" rel="noreferrer">
              {apiUrl}
            </Link>
          </DataSourceLabel>
          <Navigation
            data={data}
            onPreviousClick={() => {
              setApiUrl(data.previous);
            }}
            onNextClick={() => {
              setApiUrl(data.next);
            }}
          />
        </PlanetsTableWrapper>
      ) : (
        <ErrorMessage>
          &#128078; &nbsp; Oh no! There was an error fetching data. Please try
          again.
        </ErrorMessage>
      )}
    </PlanetsContainer>
  );
};

export default Planets;

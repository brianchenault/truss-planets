import React from 'react';
import Navigation from './components/Navigation';
import Table from './components/Table';
import useFetchPlanetsData from './hooks/useFetchPlanetsData';
import { PlanetsContainer, PlanetsTableWrapper, ErrorMessage } from './styles';

const Planets = () => {
  const {
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
          <Table planets={data.results} />
          <Navigation
            next={data.next}
            onLoadMoreClick={() => {
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

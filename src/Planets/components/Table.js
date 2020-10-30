import React from 'react';
import orderBy from 'lodash/orderBy';
import { planetFields } from '../util';
import { PlanetsTable, PlanetsTableCell, PlanetsTableHeader } from '../styles';

const Table = ({ data }) => (
  <PlanetsTable>
    <thead>
      <tr>
        {planetFields.map((field, index) => (
          <PlanetsTableHeader key={`planet-th-${index}`}>
            {field.name}
          </PlanetsTableHeader>
        ))}
      </tr>
    </thead>
    <tbody>
      {orderBy(data.results, ['name']).map((planet, planetIndex) => (
        <tr key={`planet-tr-${planetIndex}`}>
          {planetFields.map((field, index) => (
            <PlanetsTableCell key={`planet-td-${index}`}>
              {field.renderFn(planet)}
            </PlanetsTableCell>
          ))}
        </tr>
      ))}
    </tbody>
  </PlanetsTable>
);

export default Table;

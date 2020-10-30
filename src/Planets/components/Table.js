import React, { memo } from 'react';
import orderBy from 'lodash/orderBy';
import { planetDisplayFields } from '../util';
import { PlanetsTable, PlanetsTableCell, PlanetsTableHeader } from '../styles';

const Table = ({ data }) => (
  <PlanetsTable>
    <thead>
      <tr>
        {planetDisplayFields.map((field, index) => (
          <PlanetsTableHeader key={`planet-th-${index}`}>
            {field.name}
          </PlanetsTableHeader>
        ))}
      </tr>
    </thead>
    <tbody>
      {orderBy(data.results, ['name']).map((planet, planetIndex) => (
        <tr key={`planet-tr-${planetIndex}`}>
          {planetDisplayFields.map((field, index) => (
            <PlanetsTableCell key={`planet-td-${index}`}>
              {field.renderFn(planet)}
            </PlanetsTableCell>
          ))}
        </tr>
      ))}
    </tbody>
  </PlanetsTable>
);

export default memo(Table); // avoid unnecessary render on navigation state change

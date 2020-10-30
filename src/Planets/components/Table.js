import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';
import { planetDisplayFields } from '../util';
import { PlanetsTable, PlanetsTableCell, PlanetsTableHeader } from '../styles';

const Table = ({ planets }) => (
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
      {orderBy(planets, ['name']).map((planet, planetIndex) => (
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

Table.propTypes = {
  planets: PropTypes.array.isRequired,
};

export default memo(Table); // avoid unnecessary render on navigation state change

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';
import { Table as PlanetsTable } from '@trussworks/react-uswds';
import { planetDisplayFields } from '../util';

const Table = ({ planets }) => (
  <PlanetsTable bordered>
    <thead>
      <tr>
        {planetDisplayFields.map((field, index) => (
          <th key={`planet-${index}-th`}>{field.name}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {orderBy(planets, ['name']).map((planet, planetIndex) => (
        <tr key={`planet-${planetIndex}-tr`}>
          {planetDisplayFields.map((field, index) => (
            <td key={`planet-${planetIndex}-td-${index}`}>
              {field.renderFn(planet)}
            </td>
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

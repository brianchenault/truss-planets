import React from 'react';
import { Link } from './styles';

export const defaultApiUrl = 'https://swapi.dev/api/planets/';

const handleUnknownValue = val => (val !== 'unknown' ? val : '?');

const getPlanetSurfaceArea = planet => {
  const radius = parseInt(planet.diameter) / 2;
  return Math.round(
    4 * (radius * radius) * Math.PI * (parseInt(planet.surface_water) / 100)
  );
};

export const planetFields = [
  {
    name: 'Name',
    renderFn: obj => (
      <Link href={obj.url} target="_blank" rel="noreferrer">
        {handleUnknownValue(obj.name)}
      </Link>
    ),
  },
  {
    name: 'Climate',
    renderFn: obj => handleUnknownValue(obj.climate),
  },
  {
    name: '# of Residents',
    renderFn: obj => obj.residents.length,
  },
  {
    name: 'Terrains',
    renderFn: obj => handleUnknownValue(obj.terrain),
  },
  {
    name: 'Population',
    renderFn: obj => handleUnknownValue(obj.population),
  },
  {
    name: 'Surface Area Covered By Water',
    renderFn: obj =>
      handleUnknownValue(obj.surface_water) !== '?' &&
      handleUnknownValue(obj.diameter) !== '?'
        ? getPlanetSurfaceArea(obj)
        : '?',
  },
];

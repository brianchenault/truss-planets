import React from 'react';
import { Link } from './styles';

const UNKNOWN_CHAR = '?';
export const defaultApiUrl = 'https://swapi.dev/api/planets/';
export const fixHttp = url => url.replace('http://', 'https://'); // avoid 307s from API

const formatNumber = num => {
  const arr = [];
  let copy =
    typeof num === 'string'
      ? num.slice().trim()
      : num.toString().slice().trim();
  let workingLength = copy.length;

  // sanity check - return num of not typecast-able
  if (parseInt(num) === NaN) {
    return num;
  }

  // sanity check - no need for formatting in this case
  if (copy.length < 4) {
    return copy;
  }

  while (workingLength >= 3) {
    arr.push(copy.slice(workingLength - 3, workingLength));
    workingLength = workingLength - 3;
  }

  if (workingLength > 0) {
    arr.push(copy.substr(0, workingLength));
  }

  return arr.reverse().join(' ');
};

const getPlanetSurfaceArea = planet => {
  // The radius of a sphere is half its diameter.
  const radius = parseInt(planet.diameter) / 2;
  // surface area = 4πr(radius)2(squared)
  const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
  return Math.round(surfaceArea * (parseInt(planet.surface_water) / 100));
};

const handleUnknownValue = val => (val !== 'unknown' ? val : UNKNOWN_CHAR);

export const planetDisplayFields = [
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
    renderFn: obj => formatNumber(obj.residents.length),
  },
  {
    name: 'Terrains',
    renderFn: obj => handleUnknownValue(obj.terrain),
  },
  {
    name: 'Population',
    renderFn: obj => formatNumber(handleUnknownValue(obj.population)),
  },
  {
    name: 'Surface Area Covered By Water',
    renderFn: obj =>
      handleUnknownValue(obj.surface_water) !== UNKNOWN_CHAR &&
      handleUnknownValue(obj.diameter) !== UNKNOWN_CHAR
        ? formatNumber(getPlanetSurfaceArea(obj))
        : '?',
  },
];

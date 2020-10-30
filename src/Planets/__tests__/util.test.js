import {
  fixHttp,
  formatNumber,
  getPlanetSurfaceArea,
  handleUnknownValue,
  surfaceAreaRenderFn,
} from '../util';

describe('util->fixHttp', () => {
  it('should replace http:// with https://', () => {
    expect(fixHttp('http://truss.works/')).toEqual('https://truss.works/');
  });
});

describe('util->formatNumber', () => {
  it('should handle un-castable input', () => {
    expect(formatNumber('?')).toEqual('?');
  });

  it('should return input when length is < 4', () => {
    expect(formatNumber(999)).toEqual('999');
  });

  it('should return expected format when length is > 4, single digit in front', () => {
    expect(formatNumber(1002509990)).toEqual('1 002 509 990');
  });

  it('should return expected format when length is > 4, two digits in front', () => {
    expect(formatNumber(12500333)).toEqual('12 500 333');
  });

  it('should return expected format when length is > 4, three digits in front', () => {
    expect(formatNumber(100500250)).toEqual('100 500 250');
  });
});

describe('util->getPlanetSurfaceArea', () => {
  it('should throw error when input is undefined', () => {
    expect(() => {
      getPlanetSurfaceArea(undefined);
    }).toThrow('getPlanetSurfaceArea encountered unexpected input');
  });

  it('should throw error when input is a string', () => {
    expect(() => {
      getPlanetSurfaceArea('planet');
    }).toThrow('getPlanetSurfaceArea encountered unexpected input');
  });

  it('should throw error when input object is missing expected diameter property', () => {
    expect(() => {
      getPlanetSurfaceArea({ surface_water: 15 });
    }).toThrow('getPlanetSurfaceArea encountered unexpected input');
  });

  it('should throw error when input object is missing expected surface_water property', () => {
    expect(() => {
      getPlanetSurfaceArea({ diameter: 15 });
    }).toThrow('getPlanetSurfaceArea encountered unexpected input');
  });

  it('should return expected value', () => {
    expect(
      getPlanetSurfaceArea({ diameter: '12500', surface_water: '40' })
    ).toBe(196349541);
  });
});

describe('util->handleUnknownValue', () => {
  it('should return ? when input is unknown', () => {
    expect(handleUnknownValue('unknown')).toEqual('?');
  });

  it('should return input when input is not unknown', () => {
    expect(handleUnknownValue(17)).toEqual(17);
  });
});

describe('util->surfaceAreaRenderFn', () => {
  it('should return ? when surface_water is unknown', () => {
    expect(
      surfaceAreaRenderFn({ surface_water: 'unknown', diameter: '12500' })
    ).toEqual('?');
  });

  it('should return ? when diameter is unknown', () => {
    expect(
      surfaceAreaRenderFn({ surface_water: '40', diameter: 'unknown' })
    ).toEqual('?');
  });

  it('should return expected value when inputs are known', () => {
    expect(
      surfaceAreaRenderFn({ diameter: '12500', surface_water: '40' })
    ).toEqual('196 349 541');
  });
});

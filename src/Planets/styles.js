import styled from 'styled-components';

export const colors = Object.freeze({
  denim: '#1565c0',
  cobalt: '#0d47a1',
  white: '#fff',
  error: '#ff0033',
});

const Link = styled.a`
  color: ${colors.denim};
  transition: color 0.5s;

  &:hover {
    color: ${colors.cobalt};
  }
`;

const PlanetsContainer = styled.div`
  margin: 20px;
`;

const PlanetsTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlanetsTable = styled.table`
  width: 100%;
  background: white;
  border-collapse: collapse;
`;

const PlanetsTableHeader = styled.th`
  padding: 6px 10px;
  border: 1px solid gray;
  text-align: left;
`;

const PlanetsTableCell = styled.td`
  padding: 6px 10px;
  border: 1px solid gray;
  text-align: left;
`;

const ErrorMessage = styled.label`
  color: ${colors.error};
`;

const DataSourceLabel = styled.label`
  margin: 10px 0 20px;
  font-size: 10px;
  font-style: italic;
`;

const NavigationButton = styled.button`
  padding: 8px 12px;
  color: ${colors.white};
  border: 1px solid ${colors.white};
  border-radius: 6px;
  background: ${colors.denim};
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.5s;

  &:hover,
  &:visited {
    background-color: ${colors.cobalt};
  }
`;

export {
  DataSourceLabel,
  ErrorMessage,
  Link,
  NavigationButton,
  PlanetsContainer,
  PlanetsTableWrapper,
  PlanetsTable,
  PlanetsTableCell,
  PlanetsTableHeader,
};

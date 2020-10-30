import React from 'react';
import { NavigationButton } from '../styles';

const Navigation = ({ data, onNextClick, onPreviousClick }) => (
  <div>
    {data.previous && (
      <NavigationButton style={{ float: 'left' }} onClick={onPreviousClick}>
        Previous
      </NavigationButton>
    )}
    {data.next && (
      <NavigationButton style={{ float: 'right' }} onClick={onNextClick}>
        Next
      </NavigationButton>
    )}
  </div>
);

export default Navigation;

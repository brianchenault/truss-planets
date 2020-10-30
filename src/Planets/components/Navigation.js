import React from 'react';
import PropTypes from 'prop-types';
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

Navigation.propTypes = {
  data: PropTypes.object.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default Navigation;

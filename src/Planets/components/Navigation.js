import React from 'react';
import PropTypes from 'prop-types';
import { NavigationButton, NavigationButtonWrapper } from '../styles';

const Navigation = ({ next, onLoadMoreClick }) =>
  next ? (
    <NavigationButtonWrapper>
      <NavigationButton onClick={onLoadMoreClick}>Load More</NavigationButton>
    </NavigationButtonWrapper>
  ) : null;

Navigation.propTypes = {
  next: PropTypes.string,
  onLoadMoreClick: PropTypes.func.isRequired,
};

export default Navigation;

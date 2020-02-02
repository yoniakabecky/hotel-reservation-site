import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero"
};

Hero.propTypes = {
  children: PropTypes.object.isRequired,
  hero: PropTypes.string.isRequired
}

export default Hero;

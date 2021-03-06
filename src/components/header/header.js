import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import MainMenu from './menu';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 100;
  @media (min-width: 1400px) {
    padding: 10px 40px;
  }
  @media (min-width: 2000px) {
    padding: 10px 80px;
  }
  .site-title {
    z-index: 10;
    text-decoration: none;
    h1 {
      font-size: 22px;
      margin: 0;
      @media (min-width: 768px) {
        font-size: 30px;
      }
      @media (min-width: 1400px) {
        font-size: 40px;
      }
    }
  }
`;

const Header = ({ siteTitle, colorTheme }) => {
  return (
    <>
      <HeaderWrapper style={colorTheme.background}>
        <Link className="site-title" style={colorTheme.title} to="/">
          <h1 style={colorTheme.title}>{`{ ${siteTitle} }`}</h1>
        </Link>

        <MainMenu themeColor={colorTheme} />
      </HeaderWrapper>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

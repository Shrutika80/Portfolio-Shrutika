import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const shadowAnimation = keyframes`
  0% {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0.75rem 0;
  border: none;
  outline: none;
  color: white;
  background: ${(props) => (props.scrolled ? 'black' : 'transparent')};
  box-shadow: ${(props) => (props.scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.3s ease, color 0.3s ease;

  animation: ${(props) => (props.scrolled ? shadowAnimation : 'none')} 0.3s ease;

  .container {
    display: flex;
    justify-content: center;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .burger {
    position: relative;
    display: none;
    cursor: pointer;
    width: 1.65rem;
    height: 1rem;
    border: none;
    outline: none;
    opacity: 0;
    visibility: hidden;
    background: none;
    transform: rotate(0deg);
    transition: 0.35s ease-in-out;

    &-line {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      border: none;
      outline: none;
      opacity: 1;
      border-radius: 1rem;
      background: ${(props) => (props.scrolled ? 'var(--color-white)' : 'var(--color-black)')};
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 0.5rem;
      }

      &:nth-child(4) {
        top: 1rem;
      }
    }

    &.is-active {
      .burger-line {
        &:nth-child(1),
        &:nth-child(4) {
          top: 1.25rem;
          width: 0%;
          left: 50%;
        }

        &:nth-child(2) {
          transform: rotate(45deg);
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .menu {
    &-inner {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    &-link {
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      line-height: inherit;
      border: none;
      color: white;
      text-transform: uppercase;
      text-rendering: optimizeLegibility;
      transition: all 0.35s ease-in-out;
    }
  }

  @media only screen and (max-width: 768px) {
    .burger {
      display: block;
      opacity: 1;
      visibility: visible;
    }

    .menu {
      width: 100%;
      max-height: 0rem;
      padding: 0;
      opacity: 0;
      visibility: hidden;
      overflow: hidden;
      transition: all 0.35s ease;

      &.is-active {
        opacity: 1;
        visibility: visible;
        max-height: 20rem;
      }

      &-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        padding: 3rem 0;
      }
    }
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0 50px;
  }

  li a {
    color: inherit;
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s ease;
  }

  li a:hover {
    color: #FFD700;
  }
`;

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleScroll = () => {
    const heroHeight = document.querySelector('#hero')?.clientHeight || 0;
    if (window.scrollY > heroHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <div className="container">
        <section className="wrapper">
          <button
            type="button"
            className={`burger ${menuActive ? 'is-active' : ''}`}
            id="burger"
            onClick={toggleMenu}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
          <Nav className={`menu ${menuActive ? 'is-active' : ''}`} id="menu">
            <ul className="menu-inner">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </Nav>
        </section>
      </div>
    </NavbarContainer>
  );
};

export default Header;

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #2c3038;
    height: 45px;
    display: flex;
    justify-content: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: bold;
    padding: 0 1rem;
    height: 100%;
    &.active {
        text-decoration: underline;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: white;
    height: 22px;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    flex-direction: column;
    width: 100%;
    background: #2c3038;
    position: absolute;
    top: 45px;
    & > * {
      margin: 10px 0;
      justify-content: center;
    }
  }
`;
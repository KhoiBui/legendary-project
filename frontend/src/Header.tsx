import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.section`
  padding: 0;
  text-align: center;
  height: 150px;
  background: #add8e6;
  display: flex;
  flex-direction: column;
  position: relative;

  nav {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex;
    gap: 2em;
    position: relative;
  }

  nav a {
    color: black;
    font-size: 16px;
  }

  .submenu {
    display: none;
    position: absolute;
    top: 1.3em;
    right: 100;
    background: white;
    list-style: none;
    padding: 0.1em;
  }

  li:hover .submenu {
    display: block;
  }

  .submenu li a {
    display: block;
    padding: 0.1em;
    text-decoration: none;
    color: black;
  }

  .submenu li a:hover {
    color: #add8e6;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
            <ul className='submenu'>
              <li>
                <Link to='/our-story'>OUR STORY</Link>
              </li>
              <li>
                <Link to='/our-mission'>OUR MISSION</Link>
              </li>
              <li>
                <Link to='/our-board-members'>OUR BOARD MEMBERS</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to='/projects'>PROJECTS</Link>
            <ul className='submenu'>
              <li>
                <Link to='/past-medical-missions'>PAST MEDICAL MISSIONS</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to='/get-involved'>GET INVOLVED</Link>
            <ul className='submenu'>
              <li>
                <Link to='/copy-of-apply'>APPLY NOW</Link>
              </li>
              <li>
                <Link to='/registration-process'>REGISTRATION PROCESS</Link>
              </li>
              <li>
                <Link to='/logistics'>LOGISTICS</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to='/donate'>DONATE</Link>
          </li>
          <li>
            <Link to='/blog'>BLOG</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li>
            <Link to='/contact'>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;

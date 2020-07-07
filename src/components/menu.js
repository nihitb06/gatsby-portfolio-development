import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { elastic as BurgerMenu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../utils/colors.js'

const ListLink = props => (
    <li css={css`margin: 1rem 0;`}>
            <Link className="menu" activeClassName="active" to={props.to}>
                <FontAwesomeIcon icon={props.icon} />
                &nbsp;&nbsp;
                {props.children}
            </Link>
    </li>
);

export default function Menu() {
    var styles = {
      bmBurgerButton: {
        position: 'absolute',
        width: '1.5rem',
        height: '1.2rem',
        left: '1.5rem',
        top: '1.7rem'
      },

      bmBurgerBars: {
        background: colors.colorPrimary,
      },

      bmBurgerBarsHover: {
        background: '#a90000'
      },

      bmCrossButton: {
        height: '24px',
        width: '24px'
      },

      bmCross: {
        background: colors.colorAccent,
      },

      bmMenuWrap: {
        position: 'fixed',
        height: '100%'
      },

      bmMenu: {
        background: colors.colorPrimary,
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },

      bmMorphShape: {
        fill: colors.colorPrimary,
      },

      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },

      bmItem: {
        display: 'inline-block'
      },

      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }

    return (
      <BurgerMenu disableAutoFocus styles={styles}>
          <ul css={css`list-style: none`}>
              <ListLink id="home" className="menu-item" to="/" icon={faHome}>Portfolio</ListLink>
              <ListLink id="about" className="menu-item" to="/about" icon={faInfoCircle}>About</ListLink>
              <ListLink id="contact" className="menu-item" to="/contact" icon={faAddressCard}>Contact</ListLink>
          </ul>
      </BurgerMenu>
    );
}

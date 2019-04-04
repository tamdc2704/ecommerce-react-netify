import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../duck.png'
import style from 'styled-components'
import { CartButton } from '../styles/Button'

export default class Narbar extends Component {
  render() {
    return (
      <NavbarWraper className='navbar navbar-expand-sm navbar-dark px-sm-5' >
        <Link to='/'>
          <img alt='duck' src={logo} className='navbar-brand logo'/>        
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              producks
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <CartButton>
            <i className="fas fa-cart-plus mr-2" />
            my cart
          </CartButton>
        </Link>

      </NavbarWraper>
    )
  }
}


const NavbarWraper = style.nav`
  background: var(--mainBlue);
  .nav-link {
    color:var(--mainWhite) !important;
    text-transform: capitalize;
    font-size: 1.3rem;
  }
`
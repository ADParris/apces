import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/ap-logo.svg'

const Header = () => (
	<StyledHeader>
		<div className="inner-wrap">
			<Link className="logo" to="/">
				<Logo className="logo-image" />
				<h2 className="logo-text">Clothing</h2>
			</Link>
			<nav className="nav">
				<Link className="nav-item" to="/shop">
					SHOP
				</Link>
				<Link className="nav-item" to="/contact">
					CONTACT
				</Link>
				<Link className="nav-item" to="/signin">
					SIGNIN
				</Link>
			</nav>
		</div>
	</StyledHeader>
)

const StyledHeader = styled.header`
	width: 100%;

	.inner-wrap {
		justify-content: space-between;
		align-items: center;
		margin: 0 2rem;
		display: flex;

		.logo {
			padding: 0.5rem;
			&-image {
				height: 4.5rem;
				width: 4.5rem;
			}
			&-text {
				display: inline-block;
			}
		}

		.nav {
			justify-content: flex-end;
			align-items: center;
			display: flex;
			height: 100%;
			width: 50%;
			&-item {
				margin-right: 1rem;
				font-size: 2.3rem;
				cursor: pointer;
				display: block;
				padding: 1rem;
			}
		}
	}
`

export default Header

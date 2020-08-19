import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../assets/ap-logo.svg'

import CartDropdown from './Cart/CartDropdown'
import CartIcon from './Cart/CartIcon'

import { selectCartHidden } from '../redux/cart/cartSelectors'
import { selectCurrentUser } from '../redux/user/userSelectors'

import { auth } from '../api/firebase.utils'

const Header = ({ currentUser, hidden }) => {
	const signOut = () => auth.signOut()

	const renderSignInSignOut = () =>
		currentUser ? (
			<div className="nav-item" onClick={signOut}>
				SIGN OUT
			</div>
		) : (
			<Link className="nav-item" to="/signin">
				SIGN IN
			</Link>
		)

	return (
		<StyledHeader>
			<div className="inner-wrap">
				<Link className="logo" to="/">
					<Logo className="logo-image" />
					<h2 className="logo-text">Clothing</h2>
				</Link>
				<div className="nav-wrap">
					<nav className="nav">
						<Link className="nav-item" to="/shop">
							SHOP
						</Link>
						<Link className="nav-item" to="/contact">
							CONTACT
						</Link>
						{renderSignInSignOut()}
					</nav>
					<CartIcon />
				</div>
				{hidden ? null : <CartDropdown />}
			</div>
		</StyledHeader>
	)
}

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
			&-wrap {
				justify-content: flex-end;
				align-items: center;
				display: flex;
				flex: auto;
			}

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

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)

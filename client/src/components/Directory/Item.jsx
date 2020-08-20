import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const Item = ({ history, imageUrl, linkUrl, match, size, title }) => {
	const handleClick = () => history.push(`${match.url}${linkUrl}`)

	return (
		<StyledItem img={imageUrl} size={size} onClick={handleClick}>
			<div className="background-image" />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</StyledItem>
	)
}

const StyledItem = styled.div`
	height: ${props => (props.size === 'large' ? 38 : 24)}rem;
	border: 0.1rem solid black;
	margin: 0 0.75rem 1.5rem;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	min-width: 30%;
	flex: 1 1 auto;
	display: flex;

	&:first-child {
		margin-right: 0.75rem;
	}

	&:last-child {
		margin-left: 0.75rem;
	}

	&:hover {
		cursor: pointer;

		& .background-image {
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
			transform: scale(1.1);
		}

		& .content {
			opacity: 0.9;
		}
	}

	.background-image {
		background-image: url(${props => props.img});
		background-position: center;
		background-size: cover;
		height: 100%;
		width: 100%;
	}

	.content {
		border: 0.1rem solid black;
		background-color: #ffffff;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		position: absolute;
		padding: 0 2.5rem;
		display: flex;
		height: 9rem;
		opacity: 0.7;

		.title {
			margin-bottom: 0.6rem;
			font-size: 2.2rem;
			font-weight: bold;
			color: #4a4a4a;
		}

		.subtitle {
			font-weight: lighter;
			font-size: 1.6rem;
		}
	}
`

export default withRouter(Item)

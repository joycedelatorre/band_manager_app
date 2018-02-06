import React from 'react';
// import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

// We need to create an import from a file that hold the database get request

let i = 0;

	//then we create a tag inside the wrapper that post everysingle one
const HelpWantedPost = props => (
	<Wrapper>
		<h1>Help Wanted Postings</h1>
		<h3>Looking for a new band or band member look below</h3>
		{
  		props.children.map(args => (
  			<div key={i++}>
		  		<hr />
  				<div style={{ fontSize: '16px', color: 'blue' }}><strong>{args.artist}</strong><br /></div>
		  		<div style={{ fontSize: '11px', color: 'gray' }}>{args.description}</div>
				<div style={{ fontSize: '11px', color: 'gray' }}>{args.contact}</div>
				<div style={{ fontSize: '11px', color: 'gray' }}>{args.location}</div>
  			</div>
  		))
  	}
	</Wrapper>
)

export default HelpWantedPost;
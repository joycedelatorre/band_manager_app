import React from 'react';
import Wrapper from './Wrapper';

let i = 0;

const Test = props => (
  <Wrapper>
    <h1>Test</h1>
    <h3>You should get access to this page only after authentication.</h3>
  	{
  		props.children.map(args => (
  			<div key={i++}>
		  		<hr />
  				<div style={{ fontSize: '16px', color: 'blue' }}><strong>{args.arg1}</strong><br /></div>
		  		<div style={{ fontSize: '11px', color: 'gray' }}>{args.arg2}</div>
  			</div>
  		))
  	}
  </Wrapper>
);

export default Test;

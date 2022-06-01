import React from 'react';
import styled from 'styled-components';

const StyledCompDemo = () => {

  const Wrapper = styled.section`
    border: solid 5px red;
    padding: 20px;
    margin-top: 15px;
    text-align: center;
  `;

  const Heading1 = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    background: yellow;
  `;

  const Button = styled.button`
    background-color: ${props => props.primary ? "aqua" : "palevioletred"};
    padding: 10px 20px;
    font-size: 16px;
  `;

  return (
    <Wrapper>
      <Heading1>Contact us</Heading1>
      <Button primary>Raise Support Ticket</Button>
    </Wrapper>
  )
}

export default StyledCompDemo
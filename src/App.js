import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import logo from './logo.svg';
import GlobalStyle from './Global';


// media query object
const size = {
  small: 400,
  med: 960,
  large: 1140
}

// media query function
const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc;
}, {});

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
)

const DoubleFake = styled(Fake)`
  h2 {
    color: red;
  }
`;

// CSS Helper, needed for props in mixins
const fixedTop = css`
  position: fixed;
  top: ${({top}) => top + 'px'};
  left: 0;
`;

// ex. of media query
const Heading = styled.h1`
  font-size: 2rem;
  ${media.med`
    color: blue;
  `}
`;

const color = "white";

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${color};
  font-size: 2rem;
  border: none;
  background: indigo;
  /* ${props => props.type === 'cancel' && 'background: red;'}; */
  /* background: ${props => (props.type === 'cancel' ? 'tomato;' : 'indigo;')}; */
`;

const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`;

const AppWrapper = styled.div`
  header {
    background: teal;
  }
  ${Button} {
    margin-bottom: 2rem;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>
          <DoubleFake />
          <Button>Save</Button>
          <CancelButton top="100">Cancel</CancelButton>
          <Heading>Heading 2</Heading>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
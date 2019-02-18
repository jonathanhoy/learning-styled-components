import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Button, Card } from './elements';

const theme = {
  colors: {
    primary: `#e54b4b`,
    secondary: `#dbde61`
  }
}

const themeTwo = {
  colors: {
    primary: `#524763`,
    secondary: `#82d8d8`
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <GlobalStyle />
          <main
            css={`
              background: red;
              h2 {
                font-size: 100px;
              }
            `}
          >
            <Button>Say Hello</Button>
            <ThemeProvider theme={themeTwo}>
              <Card>
                <h2>Card Heading</h2>
                <Card.Button modifiers="cancel">Say Hello</Card.Button>
                <Card.Button>Say Hello</Card.Button>
              </Card>
            </ThemeProvider>
            {/* <Button modifiers="cancel">Cancel</Button>
            <Button modifiers="small">Small Hello</Button>
            <Button modifiers={["small", "cancel"]}>Small Cancel</Button> */}
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
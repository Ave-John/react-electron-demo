import React from 'react';
import NavigationPanel from './navigationPanel';
import Container from 'react-bootstrap/Container';
import './header.css'
import ThemeContextProvider from '../Theme/ThemeContext';

class AppStart extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="headerDiv">
                <ThemeContextProvider>
                    <NavigationPanel userName={this.props.match.params.name}></NavigationPanel>
                </ThemeContextProvider>
                </Container>
            </React.Fragment>
        )
    }
}

export default AppStart;
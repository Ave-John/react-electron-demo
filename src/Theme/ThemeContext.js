import React, { Component } from 'react';
import ThemeContext from './Theme'

class ThemeContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            isLightTheme: true,
            light: {color:'#555',ui:'#ddd',bg:'#eee',navColor:'#000'},
            dark: {color:'#ddd',ui:'#333',bg:'#555',navColor:'#fff'}
        }
    }
    toggleTheme = () => {
        this.setState({isLightTheme:!this.state.isLightTheme})
    }
    render() {
        return(
            <ThemeContext.Provider value={{...this.state, toggleTheme:this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}
export default ThemeContextProvider
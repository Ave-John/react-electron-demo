import React from 'react';
import ThemeToggle from '../Theme/ToggleTheme'
import ThemeContext from '../Theme/Theme'

class User extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context
                const theme = isLightTheme ? light : dark;
                return (
                    <div className="p-grid p-dir-col" style={{ background: theme.ui, color: theme.color }}>
                        <div className="p-col">
                            <div className="box"><ThemeToggle /></div>
                        </div>
                        <div className="p-col">
                            <div className="box"><h3>Welcome {this.props.user}</h3></div>
                        </div>
                        <div className="p-col">
                            <div className="box">3</div>
                        </div>
                    </div>)
            }}</ThemeContext.Consumer>
        )
    }
}

export default User;
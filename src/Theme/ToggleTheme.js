import React, { Component } from 'react';
import ThemeContext from './Theme';
import { InputSwitch } from 'primereact/inputswitch';

class ThemeToggle extends Component {
    static contextType = ThemeContext
    constructor() {
        super();
        this.state = { value: false };
    }

    handleClick = (e) => {
        this.setState({ value: e.value });
        this.context.toggleTheme();
    }
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark;
        return (
                <div className="p-grid" style={{ background: theme.ui, color: theme.color }}>
                    <div className="p-col">
                        <div className="box">
                            <h5 style={{display: "inline-block"}}>Dark Mode : </h5>
                            <InputSwitch checked={this.state.value}  onChange={(e) => { this.handleClick(e)}} />
                        </div>
                    </div>
                </div>
        )
    }
}
export default ThemeToggle;

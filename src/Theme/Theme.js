import React from 'react';
const value = {
    isLightTheme: true,
    light: {color:'#555 !important',ui:'#ddd !important',bg:'#eee !important', navColor:'#000 !important'},
    dark: {color:'#ddd !important',ui:'#333 !important',bg:'#555 !important', navColor:'#fff !important'}
}
const ThemeContext = React.createContext(value);
export default ThemeContext
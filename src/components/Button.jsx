import React from "react";
import {useTheme} from '../themes/ThemeContext';

const Button = ()=>{
    const {toggleTheme} = useTheme();
    return <button onClick={toggleTheme}>toggle Theme</button>
};

export default Button
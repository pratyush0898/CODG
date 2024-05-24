import React, { useState } from 'react'
import MyContext from './MyContext';

function MyState(props) {

    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.background = '#1f2636';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = '#ffffff';
        }
    }
    return (
        <MyContext.Provider value={{ mode, toggleMode }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NumberLine } from './components';
import CSS from 'csstype';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div style={digiContainerStyle}>
                    <NumberLine maxNumber={3} />
                    <NumberLine maxNumber={10} />

                    <NumberLine maxNumber={6} />
                    <NumberLine maxNumber={10} />

                    <NumberLine maxNumber={6} />
                    <NumberLine maxNumber={10} />
                </div>
            </header>
        </div>
    );
}

export default App;

const digiContainerStyle: CSS.Properties = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    width: '90%',
}
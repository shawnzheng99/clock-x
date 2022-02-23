import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { NumberLine } from './components';
import CSS from 'csstype';
import moment from 'moment';


function App() {
    const [ currNum, setCurrNum ] = useState<number>(0)

    const [hour, setHour] = useState<string>('0')
    const [min, setMin] = useState<string>('0')
    const [sec, setSec] = useState<string>('0')

    let intv: any ;
    useEffect(() => {
        
        intv = setInterval(() => {
            setHour(moment('DD MM YYYY hh:mm:ss').hour() + '')
            setMin(moment().minute() + '')
            setSec(moment().second() + '')
            if(currNum === 9) {
                setCurrNum(0)
            }else {
                setCurrNum(currNum + 1)
            }
        }, 1000)
        return () => clearInterval(intv)
    })

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div style={digiContainerStyle}>
                    <NumberLine maxNumber={3}  selectedNumber={hour.split('')[0]} />
                    <NumberLine maxNumber={10}  selectedNumber={hour.split('')[1]} />

                    <NumberLine maxNumber={6}  selectedNumber={min.split('')[0]} />
                    <NumberLine maxNumber={10} selectedNumber={min.split('')[1]} />

                    <NumberLine maxNumber={6} selectedNumber={sec.split('')[0]} />
                    <NumberLine maxNumber={10} selectedNumber={sec.split('')[1]} />
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
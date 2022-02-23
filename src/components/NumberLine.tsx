import CSS from 'csstype';

interface NumberLineProps {
    maxNumber: number,
    selectedNumber?: number | string,
}

export const NumberLine = ({ maxNumber, selectedNumber }: NumberLineProps) => {
    //@ts-ignore
    const numbersLine: number [] = [...Array(maxNumber).keys()];

    return (
        <div style={containerStyle}>
            {
                numbersLine.map(n => (
                    <span style={n == selectedNumber? selectedNumberBox: numberBoxStyle} key={'_num' + n}>{n}</span>
                ))
            }
        </div>
    )
}

const containerStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#5c5d5e',
    borderRadius: '5px',
    boxShadow: '.125em .25em .5em .125em #fff'
}

const numberBoxStyle: CSS.Properties = {
    borderRadius: '10px',
    padding: '16px',
    color: '#adadad',
    textShadow: '2px 1px #000',
    fontSize: '0.5rem',
};

const selectedNumberBox: CSS.Properties = {
    ...numberBoxStyle,
    fontSize: '1rem',
    padding: '8px',
    color: '#fff',
};
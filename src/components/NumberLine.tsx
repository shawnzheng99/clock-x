import CSS from 'csstype';

interface NumberLineProps {
    maxNumber: number,

}

export const NumberLine = ({maxNumber}: NumberLineProps) => {
    //@ts-ignore
    const numbersLine: number [] = [...Array(maxNumber).keys()]
    return (
        <div style={containerStyle}>
            {
                numbersLine.map(n => (
                    <span style={numberBoxStyle} key={'_num' + n}>{n}</span>
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
    
}

const numberBoxStyle: CSS.Properties = {
    borderRadius: '10px',
    padding: '20px',
    color: '#d9dcde', // selected color #fff
    textShadow: '2px 1px #000',
    fontSize: '1rem',
};

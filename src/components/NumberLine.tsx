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
}

const numberBoxStyle: CSS.Properties = {
    border: '1px solid red',
    borderRadius: '10px',
    padding: '20px',
};

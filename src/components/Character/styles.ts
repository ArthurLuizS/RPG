import styled from 'styled-components'


export const Container = styled.div<{size: number, left: number, top: number, sidePos : number}>`
    width: ${props => props.size}px;
    height: ${props =>  props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.sidePos}px;
    
    label{
        font-size: 10px;
        color: black;
        margin: 30px;
        background-image: radial-gradient( #808080, #A9A9A9);
        border-radius: 30px
    }

`
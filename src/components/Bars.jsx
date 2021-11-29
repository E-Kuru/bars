import React from 'react'
import allBars from '../bars.json'

import styled from 'styled-components';

const BarsList = styled.div `

    display : flex;
    flex-direction : column;
    overflow : scroll;
    height : 100vh;
    width : 30%;
    margin-left : 1%;
    margin-right : 0.5%;
    ::-webkit-scrollbar {
        direction:ltr;
        height: 4;
        width: 20px;
    }
    ::-webkit-scrollbar-thumb:vertical{
        height : 15%;
        background: black;
        border-radius: 10px;
    }
    a{
        text-decoration : none;
    }
`

const Bar = styled.div `

    height : 100%;
    width : 95%;
    border : solid 1px #008080 ;
    border-radius : 5px ;
    margin-bottom: 2%;

    p,h1{
        margin-left : 8%
    }

    h1{
        font-size : 24px;
    }

    p{
        font-size : 17px;
    }
    span{
        font-weight : bold;
    }
`

function Bars() {


    return (
        <>
            <BarsList>
                <h1>La liste des Bars</h1>
                {allBars.map(e => (
                    <Bar key={e.id + e.name}>
                        <h1>{e.name}</h1>
                        <p>{e.address}</p>
                        <p>La pinte est à : <span>{e.price}</span>€</p>
                    </Bar>
                ))}
            </BarsList>
        </>
    )
}

export default Bars;
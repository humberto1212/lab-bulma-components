import React from 'react'
import 'bulma/css/bulma.css';

function CoolButtom(props){
    return (
        <button  className={`button ${props.class}`}>{ props.children }</button>
    )

}

export default CoolButtom
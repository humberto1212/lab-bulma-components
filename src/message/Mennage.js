import React from 'react'
import 'bulma/css/bulma.css';

function Message(props) {

    const { title } = props

    return (
        <div>

            <article class="message">
                <div class="message-header">
                    <p>{title}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    {props.children}
                </div>
            </article>

        </div>

    )

}

export default Message
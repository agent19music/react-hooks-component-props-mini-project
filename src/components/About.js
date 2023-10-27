import React from 'react'

export default function About(props) {
    const defaultsrc = 'https://via.placeholder.com/215'
  return (
    <div>
        <aside>
            <img src={props.image || defaultsrc} alt='blog logo'/>
            <p>{props.about}</p>
        </aside>
    </div>
  )
}

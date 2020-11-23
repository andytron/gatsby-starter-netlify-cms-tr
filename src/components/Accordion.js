import React, { useState, useRef } from 'react'
import InstagramIcon from '../img/instagram.svg'

function Accordion(props) {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'is-active' : '')
    setHeightState(
      setActive === 'is-active' ? '0px' : `${content.current.scrollHeight}px`
    )
  }

  return (
    <div className="accordion">
      <div
        className="accordion__content"
        style={{ maxHeight: `${setHeight}` }}
        ref={content}
      >
        <div className="accordion__list">
          {props.children}
          <div className="roster__item" />
        </div>
      </div>
      <ul className="accordion__lower">
        <li>
          <button
            className={`accordion__trigger ${setActive}`}
            onClick={toggleAccordion}
          >
            <p>Talent</p>
          </button>
        </li>
        <li className="accordion__contact">
          <a href={`mailto:${props.contact}`}>Contact</a>
        </li>
        <li className="accordion__shop">
          <a href={props.shop}>Shop</a>
        </li>
        <li className="accordion__instagram">
          <a href={props.instagram}>
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Accordion
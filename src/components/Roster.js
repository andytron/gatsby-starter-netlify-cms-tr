import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Roster = ({ roster }) => (
  <div>
    {roster.map(item => (
      <article key={v4()} className="message">
        <div className="message-body">
          {item.name}
          <br />
          <cite> – {item.link}</cite>
        </div>
      </article>
    ))}
  </div>
)

Roster.propTypes = {
  roster: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default Roster

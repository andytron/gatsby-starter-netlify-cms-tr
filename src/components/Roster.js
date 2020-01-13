import React from 'react'
import PropTypes from 'prop-types'
// import { v4 } from 'uuid'

const Roster = ({ roster }) => (
  <>
    {roster.map((item, index) => (
      <div key={index} className="is-parent column is-6">
        <article className="blog-list-item tile box notification">

            <p className="post-meta">
              <a href={item.link} className="title has-text-primary is-size-4" target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </p>

        </article>
      </div>
    ))}
  </>
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

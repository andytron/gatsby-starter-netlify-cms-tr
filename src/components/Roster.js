import React from 'react'
import PropTypes from 'prop-types'

const Roster = ({ roster }) => (
  <>
    {roster.map((item, index) => (
      <div key={index} className="roster is-parent column is-offset-1">
        <article className="blog-list-item tile box notification is-10">
          <p className="post-meta">
            <a href={item.link} className="title is-size-5" target="_blank" rel="noopener noreferrer">
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

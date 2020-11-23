import React from 'react'
import PropTypes from 'prop-types'

const Roster = ({ roster }) => (
  <>
    {roster.map((item, index) => (
      <div key={index} className="roster__item">
        <article className="blog-list-item">
            <a href={item.link} className="" target="_blank" rel="noopener noreferrer">
              <p className="post-meta">
                {item.name}
              </p>
            </a>
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

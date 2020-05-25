import React from 'react'
import PropTypes from 'prop-types'
import { ArtistPageTemplate } from '../../templates/artist-page'

const ArtistPagePreview = ({ entry }) => {

  const entryRoster = entry.getIn(['data', 'roster'])
  const roster = entryRoster ? entryRoster.toJS() : []

  return (
    <ArtistPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      roster={roster}
    />
  )
}

ArtistPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ArtistPagePreview

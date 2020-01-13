import React from 'react'
import PropTypes from 'prop-types'
import { ArtistPageTemplate } from '../../templates/artist-page'

const ArtistPagePreview = ({ entry, getAsset }) => {
  // const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  // const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryRoster = entry.getIn(['data', 'roster'])
  const roster = entryRoster ? entryRoster.toJS() : []

  // const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  // const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <ArtistPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      // fullImage={entry.getIn(['data', 'full_image'])}
      roster={roster}
      // pricing={{
      //   heading: entry.getIn(['data', 'pricing', 'heading']),
      //   description: entry.getIn(['data', 'pricing', 'description']),
      //   plans: pricingPlans,
      // }}
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

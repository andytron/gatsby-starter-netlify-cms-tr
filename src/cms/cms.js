import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProductionPostPreview from './preview-templates/ProductionPostPreview'
import ArtistPagePreview from './preview-templates/ArtistPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('artists', ArtistPagePreview)
CMS.registerPreviewTemplate('productions', ProductionPostPreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)

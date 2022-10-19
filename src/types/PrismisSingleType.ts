// ST for Single Type

import { IPrismicCTVisitorsLog } from './PrismicCollectionTypes'
import { IPrismicCLink, IPrismicMedia } from './PrismicComponents'

export interface IPrismicSTNavigation {
  data: {
    instagram: IPrismicCLink
    list: Array<IPrismicCTVisitorsLog>
  }
}

export interface IPrismicSTThePlacePage {
  id: string
  data: {
    slices: Array<{
      id: string
      primary: {
        title: string
        description: string
      }
      items: Array<{
        gallery: IPrismicMedia
      }>
    }>
  }
}

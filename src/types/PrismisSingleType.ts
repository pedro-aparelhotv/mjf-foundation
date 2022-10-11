// ST for Single Type

import { IPrismicCTVisitorsLog } from './PrismicCollectionTypes'
import { IPrismicCLink } from './PrismicComponents'

export interface IPrismicSTNavigation {
  data: {
    instagram: IPrismicCLink
    list: Array<IPrismicCTVisitorsLog>
  }
}

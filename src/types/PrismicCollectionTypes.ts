// CT for Collection Type

import { RTNode } from '@prismicio/types'

export interface IPrismicCTFellow {
  data: {
    name: string
  }
}

export interface IPrismicCTVisitorsLog {
  id: string
  uid: string
  data: {
    content: [] | [RTNode, ...RTNode[]]
    created_at: string
    fellow: IPrismicCTFellow
    id: string
  }
}

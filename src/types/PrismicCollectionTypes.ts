// CT for Collection Type

import { RTNode } from '@prismicio/types'

export interface IPrismicCTFellow {
  id: string
  data: {
    name: string
    content: [] | [RTNode, ...RTNode[]]
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

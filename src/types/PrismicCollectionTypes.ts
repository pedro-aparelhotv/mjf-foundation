// CT for Collection Type

import { RTNode } from '@prismicio/types'

import { IPrismicMedia } from './PrismicComponents'

export interface IPrismicCTFellow {
  id: string
  data: {
    name: string
    profile_image: IPrismicMedia
    country: string
    content: [] | [RTNode, ...RTNode[]]
    start_date: string
    end_date: string
  }
}

export interface IPrismicCTVisitorsLog {
  id: string
  uid: string
  data: {
    content: [] | [RTNode, ...RTNode[]]
    created_at: string
    author: IPrismicCTFellow
    id: string
  }
}
export interface IPrismicCTNews {
  id: string
  uid: string
  data: {
    thumbnail: IPrismicMedia
    summary: [] | [RTNode, ...RTNode[]]
    content: [] | [RTNode, ...RTNode[]]
    created_at: string
  }
}
export interface IPrismicCTEvent {
  id: string
  uid: string
  data: {
    thumbnail: IPrismicMedia
    summary: [] | [RTNode, ...RTNode[]]
    content: [] | [RTNode, ...RTNode[]]
    created_at: string
  }
}

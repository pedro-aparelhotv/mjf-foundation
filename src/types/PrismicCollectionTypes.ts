// CT for Collection Type

export interface IPrismicCTFellow {
  data: {
    name: string
  }
}

export interface IPrismicCTVisitorsLog {
  data: {
    content: any[]
    created_at: string
    fellow: IPrismicCTFellow
  }
}

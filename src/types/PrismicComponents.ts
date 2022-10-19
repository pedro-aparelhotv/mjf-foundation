// C for Component

export interface IPrismicCLink {
  link_type: string
  url: string
}

export interface IPrismicMedia {
  url: string
  alt: string
  dimensions: {
    width: number
    height: number
  }
}

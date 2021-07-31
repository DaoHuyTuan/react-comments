import * as React from 'react'
import Element, { ElProps } from '../Elements'

export type PaginationProps = {
  page?: number
  onPageNext?: () => void
  onPageBack?: () => void
  onGotoPage?: (page: number) => void
  el_props?: ElProps
}

const Pagination: React.VoidFunctionComponent<PaginationProps> = () => {
  return <Element></Element>
}

export default Pagination

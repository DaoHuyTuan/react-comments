import * as React from 'react'
import Element, { elProps } from '../../Elements'

export interface PaginationProps {
  page?: number
  onPageNext?: () => void
  onPageBack?: () => void
  onGotoPage?: (page: number) => void
  elProps?: elProps
}

export const Pagination: React.VoidFunctionComponent<PaginationProps> = () => {
  return <Element></Element>
}

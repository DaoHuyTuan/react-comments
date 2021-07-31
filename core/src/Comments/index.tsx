import * as React from 'react'
import CommentItem, { CommentItemProps } from '../CommentItem'
import Element, { ElProps } from '../Elements'
import { PaginationProps } from '../Pagination'

type CommentsSettings = {
  thread?: boolean
  maxDisplay?: number
  typeDisplay?: 'infinity' | 'pagination'
}

type ComponentsType = {
  Pagimation?: PaginationProps
}

type CommentsProps = {
  data?: Array<CommentItemProps>
  settings?: CommentsSettings
  components?: ComponentsType
  el_props?: ElProps
}

const Comments = ({ el_props }: CommentsProps) => {
  return <Element el_props={el_props}></Element>
}

Comments.Item = CommentItem
export default Comments

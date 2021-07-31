import * as React from 'react'
import Element from '../Elements'

export type CommentItemProps = {
  avatar?: string
  author?: string
  date?: string
  contents?: string | React.ReactNode
  [key: string]: any
}

const CommentItem: React.VoidFunctionComponent<CommentItemProps> = () => {
  return (
    <Element>
      <span>hello this is item</span>
    </Element>
  )
}

export default CommentItem

import * as React from 'react'
import { CommentItem, CommentItemProps } from './CommentItem'
import { EditorProps } from '../Editor'
import Element, { elProps } from '../Elements'
import { PaginationProps } from './Pagination'

interface CommentsConfigs {
  thread?: boolean
  maxDisplay?: number
  typeDisplay?: 'infinity' | 'pagination'
}

interface ComponentsType {
  Item?: React.ReactNode
  Pagination?: React.ReactNode
}

interface CommentsProps {
  data?: Array<CommentItemProps>
  configs?: CommentsConfigs
  components?: ComponentsType
  elProps?: elProps
}

export const Comments: React.VoidFunctionComponent<CommentsProps> = React.memo(
  ({ data, elProps, configs, components }) => {
    return (
      <Element elProps={elProps}>
        <>
          {data?.map(item => {
            return <CommentItem {...item} />
          })}
        </>
      </Element>
    )
  }
)

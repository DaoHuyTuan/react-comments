import * as React from 'react'

export interface elProps {
  hidden?: boolean
  loading?: boolean
}

type ElementProps = {
  children?: React.ReactElement
  elProps?: elProps
}

const Element: React.VoidFunctionComponent<ElementProps> = React.memo(
  ({ children, elProps }) => {
    const { hidden = false, loading = false } = elProps || {}
    if (hidden) return null
    if (!children) return <span>Error in create this component</span>
    return React.cloneElement(children, {})
  }
)
export default Element

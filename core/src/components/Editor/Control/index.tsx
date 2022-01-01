import React from 'react'

export interface ControlProps {
  children?: JSX.Element | ''
}
export const Control: React.VoidFunctionComponent<ControlProps> = React.memo(
  ({ children }) => {
    return <div className='editor-controll'>{children}</div>
  }
)

Control.displayName = 'Control'

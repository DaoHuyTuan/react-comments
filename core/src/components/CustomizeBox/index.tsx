import * as React from 'react'
import Element, { elProps } from '../Elements'

interface CustomizeBoxProps {
  children: any
  elProps: elProps
}

const CustomizeBox: React.VoidFunctionComponent<CustomizeBoxProps> = ({
  elProps
}) => {
  return <Element elProps={elProps}></Element>
}

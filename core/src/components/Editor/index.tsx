import * as React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { elProps } from '../Elements'
import { components as DefaultComponents } from './components'
import { EditorProvider, useEditorManager } from '../../contexts/EditorContext'
import { Control } from './Control'
import { Input } from './Input'

interface EditorComponents {
  Control?: any
  Input?: React.ReactNode
  ToolBox?: React.ReactNode
  ValueContainer?: React.ReactNode
  InputContainer?: React.ReactNode
  Placeholder?: React.ReactNode
  IndicatorSeparator?: React.ReactNode
  IndicatorsContainer?: React.ReactNode
  MultiValueContainer?: React.ReactNode
  MultiValueLabel?: React.ReactNode
  MultiValueRemove?: React.ReactNode
  MultiValueSelectControl?: React.ReactNode
}

export interface EditorProps {
  isMulti?: boolean
  components?: EditorComponents
  elProps?: elProps
}

const DefaultEditor: React.VoidFunctionComponent<EditorProps> = ({
  components,
  ...props
}) => {
  const dataStore = useEditorManager(props)
  console.log('dataStore', dataStore)
  const renderChilds = useMemo(() => {
    return (
      <Control>
        <Input />
      </Control>
    )
  }, [dataStore, components])

  return (
    <div className='editor-container'>
      <>{renderChilds}</>
    </div>
  )
}

export const Editor: React.VoidFunctionComponent<EditorProps> = () => {
  return (
    <EditorProvider>
      <DefaultEditor />
    </EditorProvider>
  )
}

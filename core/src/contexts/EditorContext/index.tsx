import React, { useContext, useState } from 'react'

const editorContext = React.createContext({})

const useStateProvider = () => {
  const [state, setState] = useState({ hello: 'fsd', age: 12 })
  return { state }
}

const EditorProvider: React.FC = ({ children }: any) => {
  const state = useStateProvider()
  return (
    <editorContext.Provider value={state}>{children}</editorContext.Provider>
  )
}

const useEditorManager = (props: any) => {
  return useContext(editorContext)
}

EditorProvider.displayName = 'EditorProvider'

export { useEditorManager, EditorProvider }

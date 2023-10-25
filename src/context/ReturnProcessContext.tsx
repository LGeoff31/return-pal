import {
  useMemo,
  type PropsWithChildren,
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'

export type ReturnProcessStep = {
  id: string
  name: string
  component: JSX.Element
}

export type LabelUploadType = {
  attachment: string
  labelType: 'physical' | 'digital' | 'amazon'
  description: string
}

export type ReturnProcessFullObjectType = {
  pickupDate: string
  address: string
  pickupType: 'direct' | 'doorstep'
  plan: 'bronze' | 'silver' | 'gold' | 'platinum'
  labelFileUploads: LabelUploadType[]
}

export type ReturnProcessContextType = {
  steps: ReturnProcessStep[]
  currentStepIndex: number
  setCurrentStepIndex: Dispatch<SetStateAction<number>>
  currentData: ReturnProcessFullObjectType
  setCurrentData: Dispatch<SetStateAction<ReturnProcessFullObjectType>>
}

export const ReturnProcessContext = createContext<ReturnProcessContextType>(
  {} as ReturnProcessContextType
)

type ReturnProcessContextProviderType = {
  steps: ReturnProcessContextType['steps']
}

export default function ReturnProcessContextProvider({
  children,
  steps,
}: PropsWithChildren<ReturnProcessContextProviderType>) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [currentData, setCurrentData] = useState<ReturnProcessFullObjectType>(
    {} as ReturnProcessFullObjectType
  )
  const returnProcessContextValue = useMemo(
    () => ({
      currentStepIndex,
      setCurrentStepIndex,
      steps,
      currentData,
      setCurrentData,
    }),
    [currentData, currentStepIndex, steps]
  )
  return (
    <ReturnProcessContext.Provider value={returnProcessContextValue}>
      {children}
    </ReturnProcessContext.Provider>
  )
}

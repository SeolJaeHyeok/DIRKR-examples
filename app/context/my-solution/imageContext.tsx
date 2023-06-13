import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

export const ImageContext = createContext<{
  isLarge: boolean
  setIsLarge: Dispatch<SetStateAction<boolean>>
  imageSize: number
}>({
  isLarge: false,
  setIsLarge: () => {},
  imageSize: 100,
})

const ImageContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLarge, setIsLarge] = useState(false)
  const imageSize = isLarge ? 150 : 100

  const value = { isLarge, setIsLarge, imageSize }

  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
}

export default ImageContextProvider

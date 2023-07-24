import React from 'react'
import { Text, View } from 'react-native'
import type { IconsProps } from './src/types/icons.types'

import IconCam from './assets/camera.svg'

export const Icons: React.FC<IconsProps> = ({
  title = 'Template básico icone'
}) => {
  return (
    <>
      <Text>{title}</Text>
      <IconCam fill="red" width={100} height={100} />
    </>
  )
}

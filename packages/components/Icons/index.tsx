import React from 'react'
import { Text, View } from 'react-native'
import type { IconsProps } from './src/types/icons.types'

export const Icons: React.FC<IconsProps> = ({ title = 'Template básico' }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

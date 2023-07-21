import React from 'react'
import { Text, View } from 'react-native'
import type { $CP_CAMEL_PROPS } from './src/types/$CP_KEBAB.types'

export const $CP_CAMEL: React.FC<$CP_CAMEL_PROPS> = ({ title = 'Template básico' }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

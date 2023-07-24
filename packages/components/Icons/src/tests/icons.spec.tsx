import React from 'react'
import { render } from '@testing-library/react-native'
import { Icons } from '../../index'

describe('ZdsIcons Component Test Unit', () => {
  test('should render ZdsIcons', () => {
    const container = render(<Icons testID="zds-example-test" />)
    // console.log('' + container.debug())
    console.log('JSON: ' + container.toJSON())
  })
})

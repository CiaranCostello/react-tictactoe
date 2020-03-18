import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Paragraph from './paragraph'

Enzyme.configure({ adapter: new Adapter() })

describe('Paragraph', () => {
  it('should render children inside a p tag', () => {
    const wrapper = shallow(<Paragraph>This is my first test</Paragraph>)
    const paragraph = wrapper.find('p')
    expect(paragraph).toHaveLength(1)
    expect(paragraph.text()).toEqual('This is my first test')
  })
})

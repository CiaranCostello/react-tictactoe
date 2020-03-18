import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Game, { Square, Board } from './game'

Enzyme.configure({ adapter: new Adapter() })

describe('Unit Board', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Game />);
		jest.clearAllMocks();
	})
	describe('jumpTo', () => {
		it('jump to a point in history', () => {
			wrapper.setState({ history: [{
				squares: [null, null, null, null, null, null, null, null, null],
				xIsNext:true,
			}, {
				squares: ['X', null, null, null, null, null, null, null, null],
				xIsNext:false,
			}, {
				squares: ['X', 'O', null, null, null, null, null, null, null],
				xIsNext:true,
			}]});
			wrapper.instance().jumpTo(1);
			expect(wrapper.state('history')).toEqual([
				{
					squares: [null, null, null, null, null, null, null, null, null],
					xIsNext:true,
				},
				{
					squares: ['X', null, null, null, null, null, null, null, null],
					xIsNext:false,
				},

			])
		})
	})
})


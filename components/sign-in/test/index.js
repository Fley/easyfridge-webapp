import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import SignInForm from '../'

describe('<SignInForm />', function() {

  it('should display Hello world', function() {
    const component = <SignInForm />

    const wrapper = shallow(component)
    expect(wrapper.find('div').first().text()).to.equal('Hello world !')

    this.setRenderComponent((container) => ReactDOM.render(component, container))
  })

})

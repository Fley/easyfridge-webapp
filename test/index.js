import _ from 'lodash'
import 'mocha/mocha.css'

beforeEach(function() {
  this.renderComponent = undefined
  this.setRenderComponent = (r) => this.renderComponent = r
})

afterEach(function() {
  const id = _.uniqueId('test-')
  const container = document.createElement('div')
  container.className = 'test-dom-container ' + id

  const testsReportsElements = document.getElementsByClassName('test')
  const testReport = testsReportsElements[testsReportsElements.length - 1]

  if (!testReport) {return}
  testReport.appendChild(container)
  this.renderComponent && this.renderComponent(container)
})

import '../components/sign-in/test'

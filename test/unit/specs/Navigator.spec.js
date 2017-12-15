import Vue from 'vue'
import Navigator from '@/components/Navigator'
// var {expect = require('expect')
import {expect} from 'chai'

describe('Navigator.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Navigator)
    const vm = new Constructor().$mount()
    expect(function () {
      console.log(vm.$el.querySelector('li'))
      return vm.$el.querySelector('li')
    })
    .to.equal('Welcome to Your Vue.js App')
  })
})

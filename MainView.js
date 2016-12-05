import React,{ Component } from 'react'
import { bindStores } from './provider'

@bindStores()
export default class MainView extends Component{
  render(){
    return (
      <div>test</div>
    )
  }
}

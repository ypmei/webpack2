import { Dispatcher } from 'flux'

export function createProvider(){
  const dispatcher = new Dispatcher()
  function bindStores(){
    return (ControllerComponent)=>{
      class Controller extends ControllerComponent{
      }
    }
  }
  return {
    bindStores
  }
}

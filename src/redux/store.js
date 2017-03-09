import {createStore} from 'redux'
import reducer from './reducer'

window.store = createStore(reducer)
store.subscribe(() =>
  console.log(store.getState())
)
export default store;
store.dispatch({ type: 'MESSAGE', value: "hello" })

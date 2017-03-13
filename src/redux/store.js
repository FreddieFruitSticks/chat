import {createStore} from 'redux'
import reducer from './reducer'

window.store = createStore(reducer)
store.subscribe(() =>
  console.log('subscribe ', store.getState())
)
export default store;

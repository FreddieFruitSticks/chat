import {createStore} from 'redux'
import reducer from './reducer'

window.store = createStore(reducer)
console.log("store: ", store)
export default store;

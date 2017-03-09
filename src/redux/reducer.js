export default function reducer (state={}, action) {
  switch (action.type){
    case 'MESSAGE':
      return Object.assign({}, state, {msg:action.value})
  }
}

export function reducer (state={}, action) {
  switch (action.type){
    case 'MESSAGE':
      return state.merge({message: "hello"})
  }
}

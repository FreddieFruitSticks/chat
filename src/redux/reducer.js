export default function reducer (state={}, action) {
  switch (action.type){
    case 'MESSAGE':
      console.log("msg", state.msg)
      if(state.msg !== undefined && state.msg !== null){
        var msgList = state.msg.slice()
      }else{
        var msgList=[]
      }
      msgList.push(action.value)
      console.log("msg", state.msg)
      // var msgList = action.value
      return Object.assign({}, state, {msg:msgList})
  }
}

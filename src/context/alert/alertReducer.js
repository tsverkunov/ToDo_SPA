export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'


// export const alertReducer = (state, action) => {
//   switch (action.type) {
//     case SHOW_ALERT:
//       return {
//         ...state,
//         ...action.payload, visible: true
//       }
//     case HIDE_ALERT:
//       return  {
//         ...state,
//         visible: false
//       }
//     default:
//       return state
//   }
// }


const handlers = {
  [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
  [HIDE_ALERT]: state => ({...state, visible: false}),
  DEFAULT: state => state
}

export const alertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
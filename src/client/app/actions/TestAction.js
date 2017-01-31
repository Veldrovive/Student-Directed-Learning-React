export function changeValue(value){
  return (dispatch) => {
    dispatch({
      type: "CHANGE_VALUE",
      payload: value
    })
  }
}



export const reducer = (state={images:[]}, action) => {
    switch (action.type) {
      case "SET_IMAGES":
        return {...state, images: action.payload};
      default:
          return state;
    }
}

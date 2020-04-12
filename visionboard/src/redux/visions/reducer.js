import {
  GET_VISIONS_REQUEST,
  GET_VISIONS_SUCCESS,
  GET_VISIONS_ERROR,
  ADD_VISION_REQUEST,
  ADD_VISION_SUCCESS,
  ADD_VISION_ERROR,
  UPDATE_VISION_REQUEST,
  UPDATE_VISION_SUCCESS,
  UPDATE_VISION_ERROR,
  DELETE_VISION_REQUEST,
  DELETE_VISION_SUCCESS,
  DELETE_VISION_ERROR
} from "./types";


const init = () => ({
  visions: [],
  fetchingVisions: false,
  addingVision: false,
  error: null
});


export default (state = init(), action) => {
  switch (action.type) {
    case GET_VISIONS_REQUEST:
      return {
        ...state,
        fetchingVisions: true,
      };
    case GET_VISIONS_SUCCESS:
      return {
        ...state,
        visions: action.payload,
        fetchingVisions: false
      };
    case GET_VISIONS_ERROR:
      return {
        ...state,
        fetchingVisions: false,
        error: action.payload
      }
    case ADD_VISION_REQUEST:
      return {
        ...state,
        addingVision: true,
      };
    case ADD_VISION_SUCCESS:  
      return {
        ...state,
        addingVision: false,
        visions: [...state.visions, action.payload]
      };
    case ADD_VISION_ERROR:
      return {
        ...state,
        addingVision: false,
        error: action.payload,
      }
    default:
      return state;
  }
}
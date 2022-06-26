/* eslint-disable import/no-anonymous-default-export */
import { programConstants } from "../actions/constants"

const initState = {
  loading: true,
  data: [],
}

export default (state = initState, action) => {
  switch (action.type) {
    case programConstants.FETCH_PROGRAM_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case programConstants.FETCH_PROGRAM_SUCCESS:
      state = {
        ...state,
        loading: false,
        data: action.payload.program,
      }
      break;
    case programConstants.FETCH_PROGRAM_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error
      }
      break;

    case programConstants.PROGRAM_DETAIL_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case programConstants.PROGRAM_DETAIL_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message
      }
      break;
    case programConstants.PROGRAM_DETAIL_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error
      }
      break;
  }

  return state;
}
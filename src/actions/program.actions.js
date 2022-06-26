import { programConstants } from "./constants";
import axios from "../helpers/axios";

export const getProgram = () => {
    return async (dispatch) => {
        dispatch({ type: programConstants.FETCH_PROGRAM_REQUEST })
        try {
            await axios.get(`https://wdt-kindergarten.herokuapp.com/api/program`)
                .then(response => {
                    return response.data
                })
                .then(data => {
                    if (data.status == "success") {
                        const program = data.data ?? []
                        dispatch({
                            type: programConstants.FETCH_PROGRAM_SUCCESS,
                            payload: { program }
                        })
                    }
                })
                .catch(error => {
                    console.log('error', error);
                    dispatch({
                        type: programConstants.FETCH_PROGRAM_FAILURE,
                        payload: { error: error }
                    })
                })
        } catch (err) {
            console.log(err);
            dispatch({
                type: programConstants.FETCH_PROGRAM_FAILURE,
                payload: { error: "Terjadi kesalahan mohon ulangi beberapa saat lagi" }
            })
        }
    }
}

export const getDetailProgram = (id) => async (dispatch) => {
    return new Promise(async (resolve, rejected) => {
        dispatch({ type: programConstants.PROGRAM_DETAIL_REQUEST })
        try {
                await axios.get(`https://wdt-kindergarten.herokuapp.com/api/program/${id}`)
                    .then(response => {
                        return response.data
                    })
                    .then(data => {
                        if (data.status == "success") {
                            resolve(data.data)
                        }
                    })
                    .catch(error => {
                        rejected(error.response.data.error)
                    })
        } catch (err) {
            dispatch({
                type: programConstants.PROGRAM_DETAIL_FAILURE,
                payload: { error: "Terjadi kesalahan mohon ulangi beberapa saat lagi" }
            })
            rejected("Terjadi kesalahan mohon ulangi beberapa saat lagi")
        }
    })
}
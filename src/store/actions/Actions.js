// types
import {DELETE_INVOICE, MAKE_AS_PAID, SAVE_AND_SEND, EDIT_INVOICE, TOGGLE_ADD_INVOICE, TOGGLE_LANG, TOGGLE_THEME, FILTER_BY_STATUS } from "./Types";

// actions

// make as paid
export const makeAsPaid = (id) => {

    return (dispatch) => {

        dispatch({

            type: MAKE_AS_PAID,
            payload: id
            
        })
    }

}

// delete invoice
export const deleteInvoice = (id) => {

    return (dispatch) => {
        dispatch({

            type: DELETE_INVOICE,
            payload: id

        })
    }

}

// save and send invoice
export const saveAndSend = (item) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_AND_SEND,
            payload: item
        })
    }
}

// edit invoice
export const editInvoice = (item) => {
    return (dispatch) => {
        dispatch({
            type: EDIT_INVOICE,
            payload: item
        })
    }
}

// toggle add invoice
export const toggleAddInvoice = () => {

    return (dispatch) => {
        dispatch({
            type: TOGGLE_ADD_INVOICE
        })
    }

}

// toggle lang
export const toggleLang = () => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_LANG
        })
    }
}

// toggle theme
export const toggleTheme = () => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_THEME
        })
    }
}

// filter by status
export const filterByStatus = (statusName, statusChecked) => {
    return (dispatch) => {
        dispatch({
            type: FILTER_BY_STATUS,
            payload: {name: statusName, checked: statusChecked}
        })
    }
}
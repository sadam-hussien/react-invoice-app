import {DELETE_INVOICE, MAKE_AS_PAID, SAVE_AND_SEND, EDIT_INVOICE, TOGGLE_ADD_INVOICE, TOGGLE_LANG, TOGGLE_THEME, FILTER_BY_STATUS } from "../actions/Types";

const Reducer = (state, action) => {

    switch (action.type) {

        // start make as paid
        case MAKE_AS_PAID:
            const make_as_paid_id = action.payload;
            const make_as_paid_copyState = {...state};
            const make_as_paid_copyState_filter = make_as_paid_copyState.invoices.map(item => {
                if (item.id === make_as_paid_id) {
                    item.status = "paid";
                    return {...item}
                } else {
                    return {...item}
                }
            });

            return {
                ...state,
                invoices: make_as_paid_copyState_filter
            }

        // *********** end

        // start delete invoice
        case DELETE_INVOICE:
            const delete_invoice_id = action.payload;
            const delete_invoice_copyState = {...state};
            const delete_invoice_copyState_filtered = delete_invoice_copyState.invoices.filter(item => item.id !== delete_invoice_id);
            return {
                ...state,
                invoices: delete_invoice_copyState_filtered
            };
        // ********* end

        // start save and send invoice
        case SAVE_AND_SEND:
            return {
                ...state,
                invoices: [...state.invoices, action.payload]
            }
        // ********** end

        // start edit invoice
        case EDIT_INVOICE:
            const edit_invoice_id = action.payload.id;
            const edit_invoice_invoices = {...state};
            const edit_invoice_invoices_new = edit_invoice_invoices.invoices.map( item => {

                if (item.id === edit_invoice_id) {
                    return action.payload;
                } else {
                    return item;
                }

            });

            return {
                ...state,
                invoices: edit_invoice_invoices_new
            }
        // ********* end

        // start toggle add invoice 
        case TOGGLE_ADD_INVOICE:
            return {
                ...state,
                showAddInvoice: !state.showAddInvoice
            }
        // ******* end

        // start toggle lang 
        case TOGGLE_LANG:
            return {
                ...state,
                lang: state.lang === "en" ? "ar" : "en"
            }
        // ******* end

        // start toggle thene
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark"
            }
        // ****** end

        // filter by status
        case FILTER_BY_STATUS:
            return {
                ...state,
                filterByStatus: {
                    ...state.filterByStatus,
                    [action.payload.name]: action.payload.checked
                }
            }
        // *******

        default:
            return state
    }

}

export default Reducer;
import {createStore, compose, applyMiddleware} from "redux";

import thunk from "redux-thunk";

import invoicesData from "../data/invoices.json";

import Reducer from "./reducers";

// const invoices = invoicesData;

const initState = {
    invoices: invoicesData,
    showAddInvoice: false,
    lang: "en",
    theme: "dark"
}

const loadState = () => {

    const initInvoices = localStorage.getItem("initState");

    if (initInvoices !== null) {

        return {
            ...JSON.parse(initInvoices),
            filterByStatus: {
                draft: false,
                pending: false,
                paid: false
            }
        }

    }

    return {
        ...initState,
        filterByStatus: {
            draft: false,
            pending: false,
            paid: false
        }
    };

}

// save state to localstorage
const saveState = (state) => {

    localStorage.setItem("initState", JSON.stringify(state));

}

const Store = createStore(Reducer, loadState(), compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

Store.subscribe( () => {
    saveState(Store.getState())
})

export default Store;
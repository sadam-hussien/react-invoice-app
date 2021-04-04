import React, { useEffect, useState } from "react";

import {connect} from "react-redux";

// item
import InvoiceItem from "./InvoiceItem/InvoiceItem";

import "./Invoices.scss";

const Invoices = ({invoices, filterByStatus}) => {  
    
    const [filteredInvoices, setFilteredInvoices] = useState(invoices);

    useEffect( () => {

        let statusArr = [];

        for (let status in filterByStatus) {
            if (filterByStatus[status]) {
                statusArr.push(status);
            }
        }

        let filteredInvoices = invoices.filter(item => statusArr.includes(item.status));

        filteredInvoices.length > 0 ? setFilteredInvoices(filteredInvoices) : setFilteredInvoices(invoices);

    }, [filterByStatus, invoices]);


    return (
        <section className="invoices">

            {
                filteredInvoices.length > 0 ? (

                    filteredInvoices.map(item => {
                        return <InvoiceItem key={item.id} item={item} />
                    })

                ) : (<div>no items</div>)
            }

            {/* {
                invoices.length > 0 ? (

                    invoices.map(item => {
                        return <InvoiceItem key={item.id} item={item} />
                    })

                ) : (

                    <div>no items .....</div>

                )
            } */}
        </section>
    )

}

const mapStateToProps = (state) => {

    return {
        invoices: state.invoices,
        filterByStatus: state.filterByStatus
    }

}

export default connect(mapStateToProps)(Invoices);
import React from "react";

import {connect} from "react-redux";

// info
import Info from "../../components/partials/home/info/Info";

// Invoices
import Invoices from "../../components/partials/home/invoices/Invoices";

// add invoice
import InvoiceHandlers from "../../components/global/InvoiceHandlers/InvoiceHandlers";

const Home = ({showAddInvoice}) => {

    return (
        <section className="home-page global-page">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">

                        <Info />

                        <Invoices />

                    </div>
                </div>
            </div>

            {
                showAddInvoice && (
                    <InvoiceHandlers />
                )
            }
            
        </section>
    )

}

const mapStateToProps = (state) => {

    return {
        showAddInvoice: state.showAddInvoice
    }

}

export default connect(mapStateToProps)(Home);
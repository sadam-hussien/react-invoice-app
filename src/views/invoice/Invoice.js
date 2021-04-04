import React from "react";

import {connect} from "react-redux";

import {useParams, Link} from "react-router-dom";

import {IconArrowLeft} from "../../components/svg/SvgIcon";

import InvoiceActions from "../../components/partials/invoice/invoiceActions/InvoiceActions";

import InvoiceInfo from "../../components/partials/invoice/invoiceInfo/InvoiceInfo";

import InvoiceHandlers from "../../components/global/InvoiceHandlers/InvoiceHandlers";

import "./Invoice.scss";

const Invoice = ({items, showAddInvoice, lang}) => {

    const {id} = useParams();

    const theItem = items.find(item => item.id === id);
    
    return (
        <section className="invoice-page global-page">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="invoice-content">

                            <Link to="/" className="go-back-btn"><IconArrowLeft /><span>{lang === "en" ? "Go back" : "اذهب للخلف"}</span></Link>

                            <InvoiceActions id={theItem.id} status={theItem.status} />

                            <InvoiceInfo item={theItem}/>

                        </div>
                    </div>
                </div>
            </div>
        
            {
                showAddInvoice && (
                    <InvoiceHandlers item={theItem} el="edit" />
                )
            }

        </section>
    )

}

const mapStateToProps = (state) => {

    return {
        items: state.invoices,
        showAddInvoice: state.showAddInvoice,
        lang: state.lang
    }

}

export default connect(mapStateToProps)(Invoice);
import React from "react";

import { connect } from "react-redux";

import {toggleAddInvoice} from "../../../../../store/actions/Actions";

import { IconPlus } from "../../../../svg/SvgIcon";

const AddInvoiceBtn = ({toggleAddInvoice, lang}) => {
    return (
        <div className="add-invoice-btn">
            <button type="button" className="text-capitalize" onClick={toggleAddInvoice}>

                <span>
                    <IconPlus style={{fill: "#7c5dfa"}} />
                </span>

                {lang === "en" ? "new invoice" : "فاتورة جديده"}
                
            </button>
            
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        lang: state.lang
    }

}

export default connect(mapStateToProps, {toggleAddInvoice})(AddInvoiceBtn);
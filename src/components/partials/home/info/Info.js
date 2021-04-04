import React from "react";

import {connect} from "react-redux";

import Filter from "./filter/Filter";

import AddInvoiceBtn from "./addInvoiceBtn/AddInvoiceBtn";

import "./Info.scss";

const Info = ({invoicesLength, lang}) => {

    return (
        <section className="info">
            <div className="row align-items-center">

                {/* sub-info  */}
                <div className="col-md-6">
                    <div className="sub-info">
                        <h2 className="title text-capitalize font-weight-bold">{lang === "en" ? "invoices" : "الفواتير"}</h2>
                        <span className="total text-capitalize">
                            {lang === "en" ? `there are ${invoicesLength} total invoices` : `عدد الفواتير ${invoicesLength}`}
                        </span>
                    </div>
                </div>

                {/* info-options  */}
                <div className="col-md-6 d-flex justify-content-end">
                    <div className="info-options w-100 d-flex justify-content-between justify-content-md-end align-items-center">

                        {/* start filter-option  */}
                        <Filter />

                        {/* start add */}
                        <AddInvoiceBtn />

                    </div>
                </div>

            </div>
        </section>
    )

}

const mapStateToProps = (state) => {
    return {
        invoicesLength: state.invoices.length,
        lang: state.lang
    }
}

export default connect(mapStateToProps)(Info);
import React from "react";

import {connect} from "react-redux";

import { useHistory } from "react-router";

import {makeAsPaid, deleteInvoice, toggleAddInvoice} from "../../../../store/actions/Actions";

import Swal from 'sweetalert2';

import "./InvoiceActions.scss";

const InvoiceActions = ({id, status, makeAsPaid, deleteInvoice, toggleAddInvoice, lang}) => {

    let history = useHistory();

    const handleDelete = () => {

        Swal.fire({
            icon: 'error',
            title: 'Confirm Deletion',
            text: `Are you sure you want to delete invoice ${id} This action cannot be undone.`,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: `Delete`,
            confirmButtonColor: "#e85757",
            cancelButtonColor: "#141625",
            background: "#252945",

        }).then( (result) => {
            if (result.isConfirmed) {
                // redirect
                history.push("/");
                // delete
                deleteInvoice(id);
            }
        })

        

    }

    return (
        <div className="invoice-actions d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">

            <div className="status-wrapper d-flex align-items-center">
                <span>{lang === "en" ? "status" : "الحاله"}</span>
                <p className={`status ${status === "paid" ? "paid-status" : status === "pending" ? "pending-status" : "draft-status"}`}>
                    {lang === "en" ? "status" : (
                        status === "paid" 
                            ? "مدفوع"
                        : status === "pending"
                            ? "قيد الانتظار"
                        : "مسودة")}
                </p>
            </div>

            <div className="actions d-flex justify-content-center justify-content-md-stretch flex-wrap">

                {status === "pending" || status === "draft" ? (

                    <button className="action-edit-btn" onClick={toggleAddInvoice}>{lang === "en" ? "edit" : "تعديل"}</button>

                ) : (null)}

                <button className="action-delete-btn" onClick={handleDelete}>{lang === "en" ? "delete" : "حذف"}</button>

                {status === "pending" ? (
                    
                    <button className="action-paid-btn" onClick={() => makeAsPaid(id)}>{lang === "en" ? "make as paid" : "تمييز كمدفوع"}</button>

                ) : (null)}

            </div>

        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        lang: state.lang
    }
}

export default connect(mapStateToProps, {makeAsPaid, deleteInvoice, toggleAddInvoice})(InvoiceActions);
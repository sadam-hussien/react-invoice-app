import React from "react";

import {Link} from "react-router-dom";

import {IconArrowRight} from "../../../../svg/SvgIcon";

const InvoiceItem = ({item}) => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dueDate = new Date(item.paymentDue);

    const dueYear = dueDate.getFullYear();

    const dueMonthName = months[dueDate.getMonth()];

    const dueDay = dueDate.getDate();

    return (
        <Link to={`/invoice/${item.id}`} 
            className="invoice-item d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">

            {/* start invoice-main-info  */}
            <div className="invoice-main-info d-flex justify-content-between justify-content-md-stretch flex-wrap flex-md-nowrap align-items-center">
                <b className="invoice-id"><span>#</span>{item.id}</b>
                <span className="invoice-due">{"Due " +  dueDay + " " + dueMonthName + " " + dueYear}</span>
                <p className="invoice-name">{item.clientName}</p>
            </div>

            {/* start invoice-status-info  */}
            <div className="invoice-status-info d-flex flex-wrap flex-md-nowrap justify-content-between justify-content-md-stretch align-items-center">
                <span className="invoice-price">{"$" + item.total}</span>
                <div className="d-flex align-items-center">
                    <p className={`status ${item.status === "paid" ? "paid-status" : item.status === "pending" ? "pending-status" : "draft-status"}`}>{item.status}</p>
                    <IconArrowRight  />
                </div>
            </div>

        </Link>
    )
}

export default InvoiceItem;
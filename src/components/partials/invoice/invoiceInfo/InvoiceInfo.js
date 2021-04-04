import React from "react";

import "./InvoiceInfo.scss";

const InvoiceInfo = ({item}) => {

    return (
        <div className="invoice-info">
            
            {/* start head  */}
            <div className="head d-flex align-items-center">
                <div className="id">
                    <h5 className="text font-weight-bold">
                        <span>#</span>{item.id}
                    </h5>
                    <p className="text-desc">{item.description}</p>
                </div>
            </div>

            {/* start sender-info  */}
            <div className="sender-info box">
                <h6 className="font-weight-bold text-capitalize box-title">sender info</h6>
                <div className="row">
                    <div className="col-md-6">
                        <div className="box-inner">
                            <span>street:</span>
                            <span>{item.senderAddress.street}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box-inner">
                            <span>city:</span>
                            <span>{item.senderAddress.city}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box-inner">
                            <span>postCode:</span>
                            <span>{item.senderAddress.postCode}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box-inner">
                            <span>country:</span>
                            <span>{item.senderAddress.country}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* start client-info  */}
            <div className="client-info box">
                <h6 className="font-weight-bold text-capitalize box-title">client info</h6>
                <div className="row">
                    <div className="col-12">
                        <div className="box-inner name">
                            <span>client name:</span>
                            <span>{item.clientName}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box-inner">
                            <span>street:</span>
                            <span>{item.clientAddress.street}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box-inner">
                            <span>city:</span>
                            <span>{item.clientAddress.city}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box-inner">
                            <span>postCode:</span>
                            <span>{item.clientAddress.postCode}</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box-inner">
                            <span>country:</span>
                            <span>{item.clientAddress.country}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* start other-info  */}
            <div className="other-info box">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="box-inner">
                            <h6 className="font-weight-bold text-capitalize box-title">invoice date</h6>
                            <span>{item.createdOn}</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="box-inner">
                            <h6 className="font-weight-bold text-capitalize box-title">sent to</h6>
                            <span>{item.clientEmail}</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="box-inner">
                            <h6 className="font-weight-bold text-capitalize box-title">payment due</h6>
                            <span>{item.paymentDue}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* start items  */}
            <div className="table-responsive items">

                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Item Name</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                            <th scope="col">total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.items.map((item, index) => {
                                return (<tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>$ {item.total}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Grand total</td>
                            <td>$ {item.total}</td>
                        </tr>
                    </tfoot>
                </table>
            
            </div>
        </div>
    )

}

export default InvoiceInfo;
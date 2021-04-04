import React from "react";

import {Formik, Form, FieldArray, Field} from "formik";

import InputText from "./elements/InputText";

import InputDate from "./elements/InputDate";

import InputSelect from "./elements/InputSelect";

import {IconDelete} from "../../../svg/SvgIcon";

import {connect} from "react-redux";

import {saveAndSend} from "../../../../store/actions/Actions";

import "./AddInvoice.scss";

const AddInvoice = ({saveAndSend}) => {

    const handleSubmit = (value) => {

        const currentDate = new Date();

        const currentYear = currentDate.getFullYear();

        const currentMonth = currentDate.getMonth() + 1;

        const currentDay = currentDate.getDate();

        const finalDate = currentYear + "-" + (currentMonth > 10 ? "0" + currentMonth : currentMonth) + "-" + currentDay; 

        const item = {
            "id": "RT3095",
            "createdOn": finalDate,
            "paymentDue": value.billToDate,
            "description": value.billToDescription,
            "paymentTerms": value.billToPayment,
            "clientName": value.billToClientName,
            "clientEmail": value.billToClientEmail,
            "status": "pending",
            "senderAddress": {
                "street": value.billFromStreet,
                "city": value.billFromCity,
                "postCode": value.billFromPostCode,
                "country": value.billFromCountry
            },
            "clientAddress": {
                "street": value.billToClientStreet,
                "city": value.billToClientCity,
                "postCode": value.billToClientPostCode,
                "country": value.billToClientCountry
            },
            "items": value.items,
            "total": 1800.9
        }

        saveAndSend(item);

    }

    return (
        <section className="add-invoice global-page">
            <div className="container">
                <div className="content">
                    <div className="row justify-content-center">

                        {/* start title  */}
                        <div className="col-9">
                            <div className="add-invoice-title">
                                <h2 className="title text-capitalize font-weight-bold">new invoice</h2>
                            </div>
                        </div>

                        {/* start form  */}
                        <div className="col-9">
                            <div className="form-content">
                                <Formik
                                    initialValues={{
                                        billFromStreet: "",
                                        billFromCity: "",
                                        billFromPostCode: "",
                                        billFromCountry: "",
                                        billToClientName: "",
                                        billToClientEmail: "",
                                        billToClientStreet: "",
                                        billToClientCity: "",
                                        billToClientPostCode: "",
                                        billToClientCountry: "",
                                        billToDate: "",
                                        billToPayment: "",
                                        billToDescription: "",
                                        items: [
                                            {
                                                itemName: "",
                                                itemQty: "",
                                                itemPrice: "",
                                                itemTotal: "0.00"
                                            }
                                        ]
                                    }}
                                    onSubmit={handleSubmit}
                                >
                                    {
                                        formik => (
                                            <div className="form-content-inner">
                                                <Form>
                                                    <div className="bill-from-area">
                                                        <div className="form-content-title">
                                                            <h6 className="text font-weight-bold text-capitalize">bill from</h6>
                                                        </div>
                                                        <div className="bill-from-area-body">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <InputText label="street address" name="billFromStreet" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <InputText label="city" name="billFromCity" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <InputText label="post code" name="billFromPostCode" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <InputText label="country" name="billFromCountry" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="bill-to-area">
                                                        <div className="form-content-title">
                                                            <h6 className="text font-weight-bold text-capitalize">bill to</h6>
                                                        </div>
                                                        <div className="bill-to-area-body">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <InputText label="client's name" name="billToClientName" />
                                                                </div>
                                                                <div className="col-6">
                                                                    <InputText label="client's email" name="billToClientEmail" />
                                                                </div>
                                                                <div className="col-6">
                                                                    <InputText label="street address" name="billToClientStreet" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <InputText label="city" name="billToClientCity" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <InputText label="post code" name="billToClientPostCode" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <InputText label="country" name="billToClientCountry" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <InputDate  label="invoice date" name="billToDate" />
                                                                </div>
                                                                <div className="col-4">
                                                                    <InputSelect label="payment terms" name="billToPayment" />
                                                                </div>
                                                                <div className="col-12">
                                                                    <InputText label="project description" name="billToDescription" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="item-list">
                                                        <div className="form-content-title">
                                                            <h6 className="text font-weight-bold text-capitalize">item list</h6>
                                                        </div>
                                                        <div className="item-list-inner">
                                                            <FieldArray 
                                                                name="items"
                                                                render={ (arrayHelper) => (

                                                                    <div>
                                                                        {
                                                                            formik.values.items.map( (item, index) => (

                                                                                <div key={index}>
                                                                                    <div className="row">

                                                                                        <div className="col-4">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor={`items.${index}.itemName`} className="text-capitalize">item name</label>
                                                                                                <Field className="form-control" name={`items.${index}.itemName`} id={`items.${index}.itemName`}/>
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-2">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor={`items.${index}.itemQty`} className="text-capitalize">qty</label>
                                                                                                <Field className="form-control" name={`items.${index}.itemQty`} id={`items.${index}.itemQty`} />
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-3">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor={`items.${index}.itemPrice`} className="text-capitalize">price</label>
                                                                                                <Field className="form-control" name={`items.${index}.itemPrice`} id={`items.${index}.itemPrice`} />
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-2">
                                                                                            <div className="form-group">
                                                                                                <label>total</label>
                                                                                                <span>0.00</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-1 align-items-center justify-content-center d-flex">
                                                                                            <div className="form-group remove-item-btn align-items-center d-flex justify-content-center">
                                                                                                <button type="button" onClick={() => arrayHelper.remove(index)}>
                                                                                                    <IconDelete style={{width: "1.8rem", fill: "#e85757"}} />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>

                                                                            ))
                                                                        }
                                                                        <div className="d-flex justify-content-center add-new-item-btn">
                                                                            <button 
                                                                                type="button" 
                                                                                onClick={() => arrayHelper.push({
                                                                                    itemName: "",
                                                                                    itemQty: "",
                                                                                    itemPrice: "",
                                                                                    itemTotal: "0.00"
                                                                                })}>
                                                                                    + add new iten
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                ) } />
                                                        </div>
                                                    </div>
                                                    <div className="form-btns-handlers d-flex justify-content-between">
                                                        <div>
                                                            <button type="button" className="discard text-capitalize">discard</button>
                                                        </div>
                                                        <div>
                                                            <button data-submit="saveAsDraft" type="submit" className="saveasdraft text-capitalize">save as draft</button>
                                                            <button data-submit="saveAndSend" type="submit" className="saveandsend text-capitalize">save & send</button>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </div>
                                        )
                                    }

                                </Formik>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )

}

export default connect(null, {saveAndSend})(AddInvoice);
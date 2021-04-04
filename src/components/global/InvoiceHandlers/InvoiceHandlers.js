import React from "react";

import {Formik, Form, FieldArray, Field} from "formik";

import InputText from "../formElements/elements/InputText";

import InputDate from "../formElements/elements/InputDate";

import InputSelect from "../formElements/elements/InputSelect";

import {IconDelete, IconPlus} from "../../svg/SvgIcon";

import {connect} from "react-redux";

import {saveAndSend, editInvoice, toggleAddInvoice} from "../../../store/actions/Actions";

import GenerateId from "../functions/GenerateId";

import * as Yup from "yup";

const InvoiceHandlers = ({item, el, saveAndSend, editInvoice, toggleAddInvoice}) => {

    // init values
    /**
     * check if the component is edit => add my values 
     * while if component is home  => add default values
     */
    const initialValues = el === "edit" ? {...item} : {
        paymentDue: "",
        description: "",
        paymentTerms: "",
        clientName: "",
        clientEmail: "",
        senderAddress: {
            street: "",
            city: "",
            postCode: "",
            country: "",
        },
        clientAddress: {
            street: "",
            city: "",
            postCode: "",
            country: "",
        },
        items: [
            {
                name: "",
                quantity: "",
                price: "",
                total: 0.00
            }
        ]
    }

    const handleSubmit = (values, formik, status = "pending") => {

        const id = GenerateId();

        const currentDate = new Date();

        const currentYear = currentDate.getFullYear();

        const currentMonth = currentDate.getMonth() + 1;

        const currentDay = currentDate.getDate();

        const finalDate = currentYear + "-" + (currentMonth > 10 ? "0" + currentMonth : currentMonth) + "-" + currentDay;

        const paymentDateMain = new Date(values.paymentDue).toLocaleDateString();
            
        const uploadItem = {
            createdOn: finalDate,
            ...values,
            paymentDue: paymentDateMain,
            status: status,
            total: 10203
        }

        el === "edit" ? editInvoice({id: item.id, ...uploadItem}) : saveAndSend({id, ...uploadItem});

        toggleAddInvoice();

    }

    const schema = () => {

        const schema = Yup.object().shape({

            paymentDue: Yup.string().required(),
            description: Yup.string().required(),
            paymentTerms: Yup.number().required(),
            clientName: Yup.string().required(),
            clientEmail: Yup.string().email().required(),
            senderAddress: Yup.object().shape({
                street: Yup.string().required(),
                city: Yup.string().required(),
                postCode: Yup.string().required(),
                country: Yup.string().required(),
            }),
            clientAddress: Yup.object().shape({
                street: Yup.string().required(),
                city: Yup.string().required(),
                postCode: Yup.string().required(),
                country: Yup.string().required(),
            }),
            // items: Yup.object().shape({
            //     name: Yup.string().required(),
            //     quantity: Yup.number().required(),
            //     price: Yup.number().required(),
            // }),

        })

        return schema;

    }

    return (
        <section className="add-invoice global-page">
            <div className="container">
                <div className="content">
                    <div className="row justify-content-center">

                        {/* start title  */}
                        <div className="col-9">
                            <div className="add-invoice-title">
                                <h2 className="title text-capitalize font-weight-bold">{el === "edit" ? "edit #" + item.id : "new invoice"}</h2>
                            </div>
                        </div>

                        {/* start form  */}
                        <div className="col-9">
                            <div className="form-content">
                                <button type="button" className="cancel-btn" onClick={toggleAddInvoice}>
                                    <IconPlus style={{fill: "#ffffff"}} />
                                </button>
                                <Formik initialValues={initialValues} validationSchema={schema()} onSubmit={handleSubmit}>
                                    {
                                        formik => (
                                            <div className="form-content-inner">
                                                <Form>

                                                    {/* start bill from  */}
                                                    <div className="bill-from-area">
                                                        <div className="form-content-title">
                                                            <h6 className="text font-weight-bold text-capitalize">bill from</h6>
                                                        </div>
                                                        <div className="bill-from-area-body">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <InputText label="street address" name="senderAddress.street" />
                                                                </div>
                                                                <div className="col-6 col-sm-4">
                                                                    <InputText label="city" name="senderAddress.city" />
                                                                </div>
                                                                <div className="col-6 col-sm-4">
                                                                    <InputText label="post code" name="senderAddress.postCode" />
                                                                </div>
                                                                <div className="col-6 col-sm-4">
                                                                    <InputText label="country" name="senderAddress.country" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* ******** end  */}

                                                    {/* start bill to  */}
                                                    <div className="bill-to-area">
                                                        <div className="form-content-title">
                                                            <h6 className="text font-weight-bold text-capitalize">bill to</h6>
                                                        </div>
                                                        <div className="bill-to-area-body">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <InputText label="client's name" name="clientName" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <InputText label="client's email" name="clientEmail" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <InputText label="street address" name="clientAddress.street" />
                                                                </div>
                                                                <div className="col-6 col-sm-4">
                                                                    <InputText label="city" name="clientAddress.city" />
                                                                </div>
                                                                <div className="col-6 col-sm-4">
                                                                    <InputText label="post code" name="clientAddress.postCode" />
                                                                </div>
                                                                <div className="col-6 col-sm-4">
                                                                    <InputText label="country" name="clientAddress.country" />
                                                                </div>
                                                                <div className="col-sm-6 col-md-4">
                                                                    <InputDate current={el === "edit" ? "edit" : "home"}  label="invoice date" name="paymentDue" />
                                                                </div>
                                                                <div className="col-sm-6 col-md-4">
                                                                    <InputSelect label="payment terms" name="paymentTerms" />
                                                                </div>
                                                                <div className="col-12">
                                                                    <InputText label="project description" name="description" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* ****** end  */}

                                                    {/* start item list  */}
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

                                                                                        <div className="col-8 col-md-4">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor={`items.${index}.name`} className="text-capitalize">item name</label>
                                                                                                <Field className="form-control" name={`items.${index}.name`} id={`items.${index}.name`}/>
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-4 col-md-2">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor={`items.${index}.quantity`} className="text-capitalize">qty</label>
                                                                                                <Field className="form-control" name={`items.${index}.quantity`} id={`items.${index}.quantity`} />
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-5 col-md-3">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor={`items.${index}.price`} className="text-capitalize">price</label>
                                                                                                <Field className="form-control" name={`items.${index}.price`} id={`items.${index}.price`} />
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-4 col-md-2">
                                                                                            <div className="form-group">
                                                                                                <label>total</label>
                                                                                                <span>0.00</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-3 col-md-1 align-items-center justify-content-center d-flex">
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
                                                                                    name: "",
                                                                                    quantity: "",
                                                                                    price: "",
                                                                                    total: 0.00
                                                                                })}>
                                                                                    + add new iten
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                ) } />
                                                        </div>
                                                    </div>
                                                    {/* ***** end  */}

                                                    {/* start btns  */}
                                                    <div className="form-btns-handlers d-flex justify-content-center align-items-center flex-column-reverse flex-md-row justify-content-md-between">
                                                        <div>
                                                            <button 
                                                                type="button" 
                                                                className="discard text-capitalize"
                                                                onClick={toggleAddInvoice}>{el === "edit" ? "cancel" : "discard"}</button>
                                                        </div>
                                                        <div className="responsive-btns">
                                                            {
                                                                el !== "edit" ? (
                                                                    <button 
                                                                        type="button" 
                                                                        className="saveasdraft text-capitalize"
                                                                        onClick={() => handleSubmit(formik.values, formik, "draft")} >save as draft</button>
                                                                ) : null
                                                            }
                                                            
                                                            <button
                                                                type="submit"
                                                                className="saveandsend text-capitalize">
                                                                    {el === "edit" ? "save changes" : "save & send"}
                                                                </button>
                                                        </div>
                                                    </div>
                                                    {/* ****** end  */}
                                                    
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

export default connect(null, {saveAndSend, editInvoice, toggleAddInvoice})(InvoiceHandlers);
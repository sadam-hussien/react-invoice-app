import React from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { Field, ErrorMessage } from "formik";

import {IconDate} from "../../../svg/SvgIcon";

const InputDate = ({label, name, current, ...props}) => {

    return (
        <div className="form-group">
            <label htmlFor={name} className="text-capitalize">{label}</label>
            <div className="position-relative">
                <Field name={name} className="form-control">
                    {
                        ({field, form}) => {
                            const {setFieldValue} = form;
                            
                            const {value} = field;
                            
                            return <DatePicker dateFormat="yyyy/MM/dd" 
                                        id={name} {...props} 
                                        selected={current === "edit" ? new Date(value) : value} 
                                        onChange={(val) => setFieldValue(name, val)} />
                        }
                    }
                </Field>
                <ErrorMessage name={name} />
                <span className="insert-icon">
                    <IconDate style={{fill: "#7c5dfa", width: "1.8rem"}} />
                </span>
            </div>
        </div>
    )

}

export default InputDate;
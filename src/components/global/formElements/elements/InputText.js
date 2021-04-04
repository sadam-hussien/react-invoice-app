import React from "react";

import { Field, useField, ErrorMessage } from "formik";

const InputText = ({label, ...props}) => {

    const [field, meta] = useField(props);

    return (
        <div className="form-group">
            <label htmlFor={field.name} className="text-capitalize">{label}</label>
            <Field  type="text" name={field.name} id={field.name} className={`form-control ${meta.touched && meta.error && "is-invalid" }`} />
            <ErrorMessage component="div" className="error invalid-feedback" name={field.name} />
        </div>
    )

}

export default InputText;
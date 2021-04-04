import React from "react";

import { Field, useField, ErrorMessage } from "formik";

const InputSelect = ({label, ...props}) => {

    const [field] = useField(props);

    return (
        <div className="form-group">
            <label htmlFor={field.name} className="text-capitalize">{label}</label>
            <Field  component="select" name={field.name} id={field.name} className="form-control">
                <option value="1">Net 1 Day</option>
                <option value="7">Net 7 Day</option>
                <option value="14">Net 14 Day</option>
                <option value="30">Net 30 Day</option>
            </Field>
            <ErrorMessage name={field.name} />
        </div>
    )

}

export default InputSelect;
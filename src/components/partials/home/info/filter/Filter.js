import React, { useState } from "react";

import {connect} from "react-redux";

import {filterByStatus} from "../../../../../store/actions/Actions";

import {IconArrowDown} from "../../../../svg/SvgIcon";

const Filter = ({lang, filterByStatus}) => {

    const [active, setActive] = useState(false);

    const toggleFilter = () => {

        setActive(!active);

    }

    // filter by status
    const handleChange = (e) => {
        let name = e.target.name;
        let checked = e.target.checked;
        console.log()
        filterByStatus(name, checked);
    }

    return (
        <div className="filter-option position-relative">
            <button type="button" className="text-capitalize" onClick={toggleFilter}>
                {lang === "en" ? "filter by status" : "تصفيه حسب الحاله"} 
                <IconArrowDown style={{transform: active ? "rotate(180deg)" : "rotate(0)"}} />
            </button>
            <ul className={`list-unstyled m-0 position-absolute ${active ? 'active' : ''}`}>
                <li className="position-relative">
                    <input type="checkbox" name="draft" value="Draft" id="draft-invoice" onChange={handleChange} />
                    <label htmlFor="draft-invoice" className="d-flex align-items-center text-capitalize">{lang === "en" ? "draft" : "مسودة"}</label>
                </li>
                <li className="position-relative">
                    <input type="checkbox" name="pending" value="Pending" id="pending-invoice" onChange={handleChange} />
                    <label htmlFor="pending-invoice" className="d-flex align-items-center text-capitalize">{lang === "en" ? "pending" : "قيد الانتظار"}</label>
                </li>
                <li className="position-relative">
                    <input type="checkbox" name="paid" value="Paid" id="paid-invoice" onChange={handleChange} />
                    <label htmlFor="paid-invoice" className="d-flex align-items-center text-capitalize">{lang === "en" ? "paid": "مدفوع"}</label>
                </li>
            </ul>
        </div>
    )

}


const mapStateToProps = (state) => {

    return {
        lang: state.lang
    }

}

export default connect(mapStateToProps, {filterByStatus})(Filter);
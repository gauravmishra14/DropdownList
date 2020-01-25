import React from 'react';
import Select from 'react-select'


const SelectCategory = (props) => {

    const values = [
        { label: 'Colors', value: 'colors' },
        { label: 'Components', value: 'components' }
    ]

    const defaultValue = {
        label: values[0].label,
        value: values[0].value,
    }
    return (
        <div className="select_cat_wrapper">
            <Select
                options={values}
                defaultValue={defaultValue}
                onChange={(e) => props.handleChange(e)}
            />
        </div>
    )
}


export default SelectCategory;
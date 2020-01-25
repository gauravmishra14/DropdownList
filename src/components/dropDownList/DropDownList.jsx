import React from 'react';
import { CheckBoxSelection, Inject, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';

const DropDownList = (props) => {
    const fields = { text: 'label', value: 'value' };
    return (
        // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="checkbox" dataSource={props.showList} showSelectAll={true}
            fields={fields} placeholder="Select Values" mode="CheckBox">
            <Inject services={[CheckBoxSelection]} />
        </MultiSelectComponent>
    );
}


export default DropDownList;
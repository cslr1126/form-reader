import React from 'react';


const TextField = (props) => {
    const label = props.value.name;

    return <FormLabel value={label} />;
}

const FormLabel = ({ value }) => {
    return <label>{value}</label>
}
export default TextField;
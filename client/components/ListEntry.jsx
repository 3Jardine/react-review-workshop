import React from 'react';

const ListEntry = (props) => (
    <span>
        <div onClick={props.clickItem}>Item: {props.item}</div>
    </span>
);
export default ListEntry;
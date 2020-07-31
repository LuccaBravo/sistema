import React from 'react';
import { Link } from 'react-router-dom';

const ProductRefField = ({ record, basePath }) =>
    <Link to={`products/${record.id}`}>{record.reference}</Link>;

ProductRefField.defaultProps = {
    source: 'id',
    label: 'Referencia',
};

export default ProductRefField;

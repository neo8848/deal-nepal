import React from 'react';
import './custom-button.sytles.scss';

const CustomButton=({children, ...otherProps}) =>
(
    <button className='custom-button'{...otherProps}>
    {children}
    </button>

);

export default CustomButton;
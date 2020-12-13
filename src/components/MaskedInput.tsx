import React from 'react';
import Masked from "react-text-mask";
import PropTypes from "prop-types";

const regEx: Array<any> = [/\d/,/\d/,':',/[0-5]/,/\d/];

function MaskedInput({inputRef, ...other}: any) {
    return (
        <Masked
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={regEx}
        />
    );
}

MaskedInput.propTypes = {
    inputRef: PropTypes.func.isRequired
};

export default MaskedInput;

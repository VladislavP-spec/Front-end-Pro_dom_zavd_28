import React from "react";
import PropTypes from "prop-types";

class Square extends React.Component {
    render() {
        const { value, onClick } = this.props;
        return (
            <button onClick={onClick} className="square">
                {value}
            </button>
        );
    }
}

Square.propTypes = {
    value: PropTypes.oneOf(['x', 0]),
    onClick: PropTypes.func,
};

export default Square;

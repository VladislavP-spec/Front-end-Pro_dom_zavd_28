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
    value: PropTypes.oneOf(["X", "O", null]),
    onClick: PropTypes.func.isRequired,
};

export default Square;

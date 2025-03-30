import PropTypes from "prop-types";

function Player (props) {
    return (
        <>
            <p>Name : {props.name}</p>
        </>
    );
}
Player.propTypes = {
    name : PropTypes.string,
}

Player.defaultProps = {
    name : "Football Player X"
}
export default Player
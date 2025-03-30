import PropTypes from 'prop-types'

function Student (props) {
    let styles = {
        border : "1px solid black",
        display : "flex",
        flexDirection : "row", 
        gap : "50px",
        textAlign : "center", 
        paddingLeft : "5rem",
        backgroundColor : "hsl(150, 60%, 80%)", 
        width : "50rem",
        marginLeft : "10rem", 
    }

    return (
        <div style={styles}>
            <p>Name: {props.name}</p>
            <p>Roll No. : {props.rollNum}</p>
            <p>Department : {props.depart}</p>
            <p>SportsGuy : {props.isSportsGuy ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name : PropTypes.string,
    rollNum : PropTypes.number, 
    depart : PropTypes.string, 
    isSportsGuy : PropTypes.boolean,
}
Student.defaultProps = {
    name : "Guest", 
    rollNum : "24060XX", 
    depart : "Microbiology",
    isSportsGuy : false
}

export default Student
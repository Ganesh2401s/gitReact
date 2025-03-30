// Conditional Rendering

import PropTypes from 'prop-types';

function UserGreeting (props) {

    const styles1 = {
        backgroundColor : "green", 
    }

    const styles2 = {
        backgroundColor : "red", 

    }

    const welcomeMessage = <h3 style={styles1} className='welcome-message'> Welcome {props.userName}</h3>;
    
    const loginPrompt = <h3 style={styles2} className='login-prompt'> Please Login to continue </h3>;

    return ((props.isLoggedIn) ? welcomeMessage : loginPrompt );
}
UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool, 
    userName : PropTypes.string, 
}

UserGreeting.defaultProps= {
    isLoggedIn : false, 
    userName : "Guest", 
}

export default UserGreeting
// import React from 'react' 
// import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ title = "task default", toggleShow, showAddTask }) => {     // destructuring props 


    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAddTask ? "red" : "purple"}
                text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
                toggleShow={toggleShow} />               {/* don't need  props...*/}
        </header>
    )
};




// ===========================
// DEFAULT PROPS
// Header.defaultProps = {
// title: "Default props"
// }

// =============================
// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }
export default Header

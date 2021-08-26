import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const onClick = () => {
  console.log("Click");
};

function Header({ title, onAdd, showAddTask }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
}

//If title is not given, then it will set default title
Header.defaultProps = { title: "Task Tracker" };

Header.propTypes = { title: PropTypes.string.isRequired };

// Internal Styling
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header;

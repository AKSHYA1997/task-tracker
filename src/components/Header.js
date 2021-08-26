import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const onClick = () => {
  console.log("Click");
};

function Header({ title, onAdd, showAddTask }) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
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

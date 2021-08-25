import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const onClick = () => {
  console.log("Click");
};

function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
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

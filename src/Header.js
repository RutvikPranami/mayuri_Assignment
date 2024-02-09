import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div style={{ borderBottom: "3px dotted purple" }}>
        <header className="header">
          <p>VeriTech</p>
        </header>
        <p className="header_p">
          Welcome to VeriTech, where innovation meets excellence! We're thrilled
          <br />
          to have you join our community of forward-thinkers and problem-solvers
          <br />
          dedicated to making a positive impact.
        </p>
      </div>
      <h2>Meet Our Team</h2>
      <p className="header_team">leadership/management Team</p>
    </div>
  );
};

export default Header;

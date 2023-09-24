import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        style={{ backgroundColor: "#005271", padding: "20px", color: "white" }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li style={{ marginRight: "10px" }}>
            <a href="/">Home</a>
          </li>
          <li style={{ marginRight: "10px" }}>
            <a href="/about">About</a>
          </li>
          <li style={{ marginRight: "10px" }}>
            <a href="/contact">Contact</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>

      <div
        style={{
          backgroundColor: "#005271",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          color: "white",
        }}
      >
        <div>Logo Left</div>
        <div>Text in Between</div>
        <div>Logo Right</div>
      </div>
      <div
        style={{ backgroundColor: "#005271", padding: "10px", color: "white" }}
      >
        <p>Visitors: 1000</p> {/* Replace with your visitor count */}
      </div>
    </footer>
  );
};

export default Footer;

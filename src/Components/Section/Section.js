import React from "react";

const Section = (props) => (
  <section style={props.style} className="section">
    <h3>{props.title}</h3>
    <div className="section-body">{props.children}</div>
  </section>
)


export default Section
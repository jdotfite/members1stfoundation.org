import React from "react";

export default function Hero({ section_id, headline, paragraph }) {
  return (
    <section id={section_id}>
    <h2>{headline}</h2>
    <p>{paragraph}</p>
 
  </section>
  );
}


import React from "react";

export function Heading(heading_prop) {
  return (
    <>
      <h1>Heading {heading_prop.headingTitle} {heading_prop.code}</h1>
      <h1>Heading {heading_prop.code}</h1>
    </>
  );
}

export function Paragraph(paragraph_prop) {
  return <h1>Paragraph {paragraph_prop.aim}</h1>;
}

// export default Heading;

// only one defaults 
// export default Paragraph;

// Named export
// export { Heading };

// export { Heading,  Paragraph};

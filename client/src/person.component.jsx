import React from "react";

const Person = ({ person }) => {
  console.log("rendering");
  return (
    <div>
      <p>{Person.name}</p>
      <p>{Person.age}</p>
    </div>
  );
};

export default Person;
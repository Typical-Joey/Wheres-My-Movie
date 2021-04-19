import React from "react";
import Movie from "./Movie";

export default function Category(props) {
  return (
    <div>
      <hr />
      <h1>{props.title}</h1>
      <Movie />
      <hr />
    </div>
  );
}

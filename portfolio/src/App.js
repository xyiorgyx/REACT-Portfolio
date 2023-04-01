import React from "react";
// import Nav from "./components/Nav";
import Projectcards from "./components/projectpage"
import projects from "./projects";

export default function App() {
  console.log(projects)
    return (
      <div>
        <Projectcards projects = {projects} />
      </div>
    );
  }
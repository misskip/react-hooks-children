import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Turtle Race!" direction="vertical">
        <div>Tommy</div>
        <div>Timmy</div>
        <div>Tony</div>
        <div>Toby</div>
       
      </Container>
      <Container header="..and they're off!" textPosition="right">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
}

export default App;

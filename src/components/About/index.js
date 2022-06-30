import React from "react";
import coverImage from "../../assets/main/polygonmap.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who are we?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "80%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          We are thrill seekers that are focused on getting the most of our
          adrenaline rush! In 2022, a group of friends decided to create an easy and simple way of viewing wait times for theme parks. We are a small group that updates this site. If you have any questions feel free to reach out. 
        </p>
      </div>
    </section>
  );
}

export default About;

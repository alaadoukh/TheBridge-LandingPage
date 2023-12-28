// Home.js
import React from "react";
import CourseList from "../components/CourseList";
import logoImage from "../assets/LogoTheBridge.png";
import backgroundImage from "../assets/img/office-coworking.jpg";

const Home = () => {
  return (
    <div>
      <img src={logoImage} alt="The Bridge Logo" />
      {/* Description */}
      <section
        style={{
          position: "relative",
          textAlign: "center",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        {/* Pseudo-element for the background image with blur effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImage})`,
            filter: "blur(3px)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        />

        {/* Content on top of the blurred image */}
        <div
          style={{
            backgroundColor: "rgba(216, 216, 216, 0.6)",
            width: "40vw",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "35px",
          }}
        >
          <h3 style={{ fontSize: "40px" }}>Improve your skills on your own</h3>
          <h3 style={{ fontSize: "40px", marginTop: "-20px" }}>
            {" "}
            To prepare for a better future
          </h3>
          <button
            style={{
              padding: "15px 25px",
              fontSize: "20px",
              marginTop: "5px",
              borderRadius: "20px",
              color: "#fff",
              backgroundColor: "#af2f64",
              border: "none",
              marginBottom: "35px",
            }}
          >
            REGISTER NOW
          </button>
        </div>
      </section>

      {/* Courses Preview */}
      <section style={{ padding: "50px" }}>
        <CourseList />
      </section>

      {/* Contact Us */}
      <section
        style={{
          position: "relative",
          textAlign: "center",
          // height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <form
          style={{
            backgroundColor: "#f9b454",
            width: "25vw",
            padding: "0px 5px 30px 20px",
            borderRadius: "10px",
            marginBottom: "35px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Contact Us</h2>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label>NAME</label> <br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              style={{
                borderRadius: "5px",
                border: "none",
                padding: "5px 100px 5px 10px",
                marginTop: "6px",
                backgroundColor: "#fde8ca",
                height: "4vh",
                width: "15vw",
                fontSize: "18px",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label>EMAIL</label> <br />
            <input
              type="email"
              name="email"
              placeholder="example@domain.com"
              style={{
                borderRadius: "5px",
                border: "none",
                padding: "5px 100px 5px 10px",
                marginTop: "6px",
                backgroundColor: "#fde8ca",
                height: "4vh",
                width: "15vw",
                fontSize: "18px",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label>MESSAGE</label> <br />
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message here"
              style={{
                borderRadius: "5px",
                border: "none",
                width: "180px",
                padding: "5px 80px 5px 10px",
                fontSize: "18px",
                marginTop: "6px",
                backgroundColor: "#fde8ca",
                height: "10vh",
                width: "15vw",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: "8px 12px",
              borderRadius: "5px",
              color: "#fff",
              backgroundColor: "#af2f64",
              border: "none",
              fontSize: "18px",
            }}
          >
            Send the message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;

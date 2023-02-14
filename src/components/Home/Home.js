import React from "react";
import backgroundImg from "../../Phase/Media asset/Home page/Background  Elements/Background.png";
import logo from "../../Phase//Media asset/Logo.png";
import icon1 from "../../Phase/Media asset/Home page/Hero Elements/bubble.png";
import icon2 from "../../Phase/Media asset/Home page/Hero Elements/Gun.png";
import icon3 from "../../Phase/Media asset/Home page/Hero Elements/pill.png";
import icon4 from "../../Phase/Media asset/Home page/Hero Elements/portal.png";
import "./Home.css";
import MakeSlider from "./MakeSlider";
import ViewAll from "./ViewAll";
import ButtonData from "./ButtonData";
import DataEnd from "./DataEnd";

const Home = () => {
  return (
    <section
      style={{
        background: `url(${backgroundImg})`,
      }}
    >
      <img className=" mx-auto w-56 h-12 absulaye mt-5 " src={logo} alt="" />
      {/* ---------------------------------------------- */}

      <div className="hero  w-9/12 mx-auto ">
        <div className="hero-content ">
          <div>
            <h1 className="text-7xl font-bold mt-20 text-white">
              THE <span className="mx-36">RICK &</span> <br /> MORTY WIKI
            </h1>
            <img
              src={icon1}
              alt="/"
              className="w-52 h-52 absulate img-1 shadow"
            />
            <img src={icon3} alt="/" className=" absulate img-4" />
            <img src={icon4} alt="/" className="w-40 absulate img-2 " />
            <img src={icon2} alt="/" className="w-52 w-80 absulate img-3" />
          </div>
        </div>
        <div className=" flex button-flex ">
          <div>
            <button className="mt-5 btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500">
              Watch Now
            </button>
          </div>
          <div className="w-3/5 p-5  ">
            <p className="">
              Brilliant but boozy scientist Rick hijacks his fretful <br />
              teenage grandson, Morty, for wild escapades in other worlds and
              alternate dimensions.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-start mx-5 text-4xl text-white">Meet The Chast</h1>

      <ButtonData></ButtonData>
      <MakeSlider></MakeSlider>
      <ViewAll></ViewAll>
      <br />
      <br />
      <br />
      <br />
      <DataEnd></DataEnd>
    </section>
  );
};
export default Home;

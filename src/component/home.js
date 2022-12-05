import Holiday from "../services/holidays";
import Landing from "../services/landing";
import Services from "../services/Services";
import Stats from "../services/stats";
import Contact from "./contact";
import React from "react";

function Home(props) {
  return (
    <div>
      <Landing />
      <Services />
      <div className="title mb-0">
        <h1 className=" text-center text-uppercase p-3  ">
          Still more to come ...
        </h1>
        <p className="text-center text-black-50 fs-2 fst-italic text-uppercase p-3">
          Enjoy Our Honey Moon Holidays
        </p>
      </div>
      <Holiday />
      <Stats />
      <Contact />
      <div className="footer mt-3">
        <p className="text-white-50 text-center pt-3 ">
          Designed and Created by devLop
        </p>
        <p className="text-center text-white-50">Email:mmkamel77@gmail.com</p>
      </div>
    </div>
  );
}

export default Home;

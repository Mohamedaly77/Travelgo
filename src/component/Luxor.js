import React from "react";
import { useNavigate } from "react-router-dom";
import egypt1 from "../images/egypt1.jpg";

function Luxor(props) {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center text-capitalize mt-3 mb-3">
        Trip to Egypt Pyramid and nile by air
      </h1>

      <div className="container">
        <img src={egypt1} className="w-100" alt=""></img>

        <h2 className="mt-3 text-uppercase">Luxor where history begins</h2>
        <p className="text-black-50 lh-lg">
          The southern part of Thebes grew up around a beautiful temple
          dedicated to Amon, king of the gods, his consort Mut, and their son
          Khons. Commissioned by King Amenhotep III (Amenophis III; reigned
          1390–53 BCE) of the late 18th dynasty, the temple was built close to
          the Nile River and parallel with the bank and is known today as the
          Temple of Luxor. An avenue of sphinxes connected it to the Great
          Temple of Amon at Karnak. The modern name Luxor (Arabic: Al-Uqṣur)
          means “The Palaces” or perhaps “The Forts,” from the Roman castra.
        </p>
        <button
          onClick={() => navigate("/travelform")}
          className="btn btn-primary"
        >
          Book now
        </button>
      </div>
    </div>
  );
}

export default Luxor;

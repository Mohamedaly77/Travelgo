import React from "react";
import { useNavigate } from "react-router-dom";
import acropolis from "../images/acropolis.jpg";

function Greece(props) {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center text-capitalize mt-3 mb-3">Acropolis</h1>

      <div className="container">
        <img src={acropolis} className="w-100" alt=""></img>
        <h2 className="mt-3 text-uppercase">
          Athens , Explore more greek history
        </h2>
        <p className="text-black-50 lh-lg">
          The Acropolis of Athens is an ancient citadel located on a rocky
          outcrop above the city of Athens and contains the remains of several
          ancient buildings of great architectural and historical significance,
          the most famous being the Parthenon. The word acropolis is from the
          Greek words ἄκρον (akron, "highest point, extremity") and πόλις
          (polis, "city").[1] The term acropolis is generic and there are many
          other acropoleis in Greece. During ancient times the Acropolis of
          Athens was known also more properly as Cecropia, after the legendary
          serpent-man, Cecrops, the supposed first Athenian kin
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

export default Greece;

import React from "react";
import america from "../images/america.jpg";
import { useNavigate } from "react-router-dom";
function NewYork(props) {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center text-capitalize mt-3 mb-3">
        The heart of the city.<br></br> The soul of times square.
      </h1>

      <div className="container">
        <img className="w-100" src={america} alt=""></img>
        <h2 className="mt-3 text-uppercase">New york the worlds capital</h2>
        <p text-black-50 lh-lg>
          New York is the most ethnically diverse, religiously varied,
          commercially driven, famously congested, and, in the eyes of many, the
          most attractive urban centre in the country. No other city has
          contributed more images to the collective consciousness of Americans:
          Wall Street means finance, Broadway is synonymous with theatre, Fifth
          Avenue is automatically paired with shopping, Madison Avenue means the
          advertising industry, Greenwich Village connotes bohemian lifestyles,
          Seventh Avenue signifies fashion, Tammany Hall defines machine
          politics, and Harlem evokes images of the Jazz Age, African American
          aspirations, and slums. The word tenement brings to mind both the
          miseries of urban life and the upward mobility of striving immigrant
          masses. New York has more Jews than Tel Aviv, more Irish than Dublin,
          more Italians than Naples, and more Puerto Ricans than San Juan. Its
          symbol is the Statue of Liberty, but the metropolis is itself an icon,
          the arena in which Emma Lazarus’s “tempest-tost” people of every
          nation are transformed into Americans—and if they remain in the city,
          they become New Yorkers.
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

export default NewYork;

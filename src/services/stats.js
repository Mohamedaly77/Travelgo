import { useState, useEffect } from "react";
import React from "react";

function Stats(props) {
  const [count, setcount] = useState(0);

  const [dest, setDest] = useState(0);

  const [trav, setTrav] = useState(0);

  const tick2 = () => {
    setTrav(trav + 1);
  };

  const ticka = () => {
    setDest(dest + 1);
  };

  useEffect(() => {
    if (dest === 85) {
      clearInterval();
    } else {
      const interval = setInterval(ticka, 20);

      return () => {
        clearInterval(interval);
      };
    }
  }, [dest]);
  const tick = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    if (trav === 3) {
      clearInterval();
    } else {
      const interval = setInterval(tick2, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [trav]);

  useEffect(() => {
    if (count === 96) {
      clearInterval();
    } else {
      const interval = setInterval(tick, 20);

      return () => {
        clearInterval(interval);
      };
    }
  }, [count]);
  useEffect(() => {});
  return (
    <div>
      <div className="stats ">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="col-lg-4 dest">
            <span>{dest}</span>
            <h2 className="text-uppercase">Destination</h2>
          </div>

          <div className=" trips col-lg-4">
            <span className="text-center text-uppercase ml-3 ">{count}</span>
            <h2 className="text-uppercase">Trips a week</h2>
          </div>
          <div className=" trav col-lg-4">
            <span>{trav} </span>
            <h2 className="text-uppercase"> M Travellars</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

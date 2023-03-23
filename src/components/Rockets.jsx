import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRocketsInformation } from "../redux/rockets/rocketAction";
import classes from "./rockets.module.css";
import { reserveRocket } from "../redux/rockets/rocketSlice";
import { getReserved } from "../redux/rockets/rocketSlice";

const Rockets = () => {
  let saveReserve = false;
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (saveReserve === false) {
      saveReserve = true;
      dispatch(fetchRocketsInformation());
    }
  }, []);

  const onClickReserveRocket = (e) => {
    dispatch(reserveRocket(e.target.id));
  };
  console.log(rockets);

  return (
    <section>
      <h1>hello from rocket</h1>
      <article>
        {rockets.map((rocket) => (
          <section className={classes.rocket_card}>
            <div>
              <img src={rocket.images[1]} alt="" />
            </div>
            <div>
              <h1>{rocket.id}</h1>
              <h2>{rocket.description}</h2>
              <button
                onClick={(e) => {
                  onClickReserveRocket(e);
                }}
              >
                Reseve Rocket
              </button>
            </div>
          </section>
        ))}
      </article>
    </section>
  );
};

export default Rockets;

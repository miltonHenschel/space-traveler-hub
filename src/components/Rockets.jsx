import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRocketsInformation from '../redux/rockets/rocketAction';
import classes from './rockets.module.css';

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

  console.log(rockets.id);

  return (
    <section>
      <h1>hello from rocket</h1>
      <article>
        {rockets.map((rocket) => (
          <section key="" className={classes.rocket_card}>
            <div>
              <img src={rocket.images[1]} alt="" />
            </div>
            <div>
              <h1>{rocket.id}</h1>
              <h2>{rocket.description}</h2>
              <button
                type="button"
                onClick={() => {
                  console.log('clicked');
                }}
              >
                Reserve Rocket
              </button>
            </div>
          </section>
        ))}
      </article>
    </section>
  );
};

export default Rockets;

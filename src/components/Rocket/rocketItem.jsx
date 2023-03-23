import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rocket/rocketSlice';
import classes from './rocketItem.module.css';

const RocketCardItem = (props) => {
  const { rocket } = props;
  const {
    images, name, description, reserved, id,
  } = rocket;

  const dispatch = useDispatch();

  const reserveClickEvent = (e) => {
    dispatch(reserveRocket(e.target.id));
  };

  return (
    <li id={id} className="d-flex my-3">
      <img src={images} alt="Rocket SpaceX" className="rocket-img" />
      <div className={classes.content__left}>
        <h3 className={classes.name}>{name}</h3>

        {!reserved ? (
          <>
            <p>{description}</p>
            <button id={id} type="button" onClick={(e) => reserveClickEvent(e)}>
              Reserve Rocket
            </button>
          </>
        ) : (
          <>
            <p>{description}</p>
            <div className={classes.action__btns}>
              <button id={id} type="button">
                Reserved
              </button>
              <button id={id} type="button" onClick={reserveClickEvent}>
                Cancel Reservation
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  );
};

RocketCardItem.defaultProps = {
  rocket: {},
  name: '',
  description: '',
  images: '',
};

RocketCardItem.propTypes = {
  rocket: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.string,
};

export default RocketCardItem;

import React from 'react';
import PropTypes, { Object } from 'prop-types';
import RocketCardItem from './rocketItem';

const RocketList = (props) => {
  const { rockets } = props;

  return (
    <ul>
      {rockets.map((rocket) => (
        <RocketCardItem key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
};

RocketList.defaultProps = {
  rockets: [],
};

RocketList.propTypes = {
  rockets: PropTypes.instanceOf(Object),
};

export default RocketList;

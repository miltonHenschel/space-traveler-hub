import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import RocketList from './rocklist';
import { fetchingRocketsInfo } from '../../redux/rocket/rcktreducer';

let saveReserve = false;
const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (saveReserve === false) {
      saveReserve = true;
      dispatch(fetchingRocketsInfo());
    }
  }, []);

  return (
    <Container>
      <RocketList rockets={rockets} />
    </Container>
  );
};

export default Rockets;

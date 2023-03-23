import { useSelector } from 'react-redux';
import { ListGroup, Container } from 'react-bootstrap';

const Profiles = () => {
  const Rockets = useSelector((state) => state.rockets);
  const ReservedRockets = Rockets.filter((rocket) => rocket.reserved === true);

  return (
    <Container>
      <ListGroup className="w-25">
        <h2>My Rockets</h2>
        {!ReservedRockets.length ? (
          <p className="text-danger">You haven&apos;t select any rocket yet</p>
        ) : (
          ReservedRockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
};

export default Profiles;

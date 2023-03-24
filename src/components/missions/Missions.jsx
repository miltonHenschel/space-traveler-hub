/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  joinMissions,
  leaveMissions,
} from '../../redux/missions/missionsSlice';

import styles from '../../styles/Missions.module.css';

function Missions({
  mission_id, mission_name, description, reserved,
}) {
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMissions(mission_id));
  };

  const handleLeaveMission = () => dispatch(leaveMissions(mission_id));

  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{mission_name}</td>
      <td className={styles.td}>{description}</td>
      <td className={styles.tdMiddle}>
        <span className={reserved ? styles.activeMember : styles.notMember}>
          {reserved ? 'Active Member' : 'Not a Member'}
        </span>
      </td>
      <td className={styles.tdMiddle}>
        {reserved ? (
          <button
            type="button"
            className={styles.leaveMission}
            onClick={handleLeaveMission}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className={styles.joinMission}
            onClick={handleJoinMission}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
}

Missions.propTypes = {
  mission_id: PropTypes.string,
  mission_name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default Missions;

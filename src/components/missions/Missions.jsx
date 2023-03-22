/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Missions.module.css';

const Missions = ({ mission_name, description }) => (
  <tr className={styles.tr}>
    <td className={styles.td}>{mission_name}</td>
    <td className={styles.td}>{description}</td>
    <td className={styles.tdMiddle}>
      <span>Active/Not Member</span>
    </td>
    <td className={styles.tdMiddle}>
      <button type="button">Join/Leave Mission</button>
    </td>
  </tr>
);

Missions.propTypes = {
  mission_name: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

export default Missions;

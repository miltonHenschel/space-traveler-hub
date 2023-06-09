import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionsFromAPI } from '../../redux/missions/missionsSlice';

import styles from '../../styles/Missions.module.css';
import Missions from './Missions';

function MissionsPage() {
  const missions = useSelector((state) => state.missions);
  const isLoading = useSelector((state) => state.missions.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.missionsItems.length) dispatch(fetchMissionsFromAPI());
  }, [dispatch, missions.missionsItems.length]);

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.theadTr}>
          <th className={styles.th}>Mission</th>
          <th className={styles.th}>Description</th>
          <th className={styles.th}>Status</th>
          <th>
            <div />
          </th>
        </tr>
      </thead>
      <tbody>
        {isLoading && <tr className={styles.tr}>Loading...</tr>}
        {!isLoading
          && missions.missionsItems.map((mission) => (
            <Missions
              key={mission.mission_id}
              mission_id={mission.mission_id}
              mission_name={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
      </tbody>
    </table>
  );
}

export default MissionsPage;

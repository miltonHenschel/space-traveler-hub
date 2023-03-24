import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/Profile.module.css';

function Profile() {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.missionsItems.filter(
    (mission) => mission.reserved,
  );

  const Rockets = useSelector((state) => state.rockets);
  const ReservedRockets = Rockets.filter((rocket) => rocket.reserved === true);

  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>My Missions</th>
            </tr>
          </thead>
          <tbody>
            {reservedMissions.length > 0 ? (
              reservedMissions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td className={styles.td}>{mission.mission_name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className={styles.td}>
                  You haven&apos;t joined any missions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.div}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {ReservedRockets.length > 0 ? (
              ReservedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td className={styles.td}>{rocket.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className={styles.td}>
                  You don&apos;t have reserved rockets yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Profile;

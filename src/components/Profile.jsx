import { useSelector } from 'react-redux';
import styles from '../styles/Profile.module.css';

function Profile() {
  const missions = useSelector((state) => state.missions);

  const reservedMissions = missions.missionsItems.filter(
    (mission) => mission.reserved,
  );

  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>My Rockets</th>
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
                  You don&apos;t have reserved missions yet.
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
                  You don&apos;t have reserved missions yet.
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

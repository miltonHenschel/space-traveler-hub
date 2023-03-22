import { useSelector } from 'react-redux';

import { stateMissions } from '../redux/missions/missionsSlice';

function Profile() {
  const missions = useSelector(stateMissions);
  console.log(missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  // console.log(reservedMissions);

  return (
    <section>
      <div>
        <table>
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody>
            {reservedMissions.length > 0 ? (
              reservedMissions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>You don&apos;t have reserved missions yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Profile;

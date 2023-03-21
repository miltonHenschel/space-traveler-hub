import { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  NavLink,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/Rockets" element={<Rockets />} />
        <Route index="/" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Route>
    )
  );

  return (
    <main className="main__container">
      <RouterProvider router={router} />
    </main>
  );
}

const Root = () => (
  <>
    <nav className="main__nav">
      <section className="nav__link">
        <section className="nav__link-left">
          <img src="./src/assets/planet.png" alt="" />
          <h1>Space Travlers' Hub</h1>
        </section>
        <section className="nav__link-right">
          <NavLink
            className="nav__link-links rockets"
            style={({ isActive }) => ({
              color: isActive ? '#0290ff' : '#121212',
            })}
            to="/Rockets"
          >
            Rockets
          </NavLink>
          <NavLink className="nav__link-links missions" to="/Missions">
            Missions
          </NavLink>
          <NavLink className="nav__link-links profiles" to="/Profile">
            Profile
          </NavLink>
        </section>
      </section>
      <hr />
    </nav>
    <div>
      <Outlet />
    </div>
  </>
);

export default App;

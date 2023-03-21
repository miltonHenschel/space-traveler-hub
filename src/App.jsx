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

// I've spent the last several months completely immersed in remote development, building everything from landing pages to single page applications using HTML, CSS and vanilla JavaScript. Before transitioning into software development I worked as a Computer Science Teacher for a couple of years, teaching secondary school students coding in the C language. This taught me skills like problem-solving, effective communication, multi-tasking, and more. During the last several months, I have been working on a number of projects: my portfolio, matching a page to a Figma template, landing pages, and a modular, single-page web app to manage a collection of books. Being in the top 4% of active GitHub users in my country is something that I'm really proud of.

export default App;

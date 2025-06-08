import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './layout.jsx'; // Capitalized
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Contact from './components/contact/contact.jsx';
import User from './components/user/user.jsx';
import { Divide } from 'lucide-react';
import Github, { githubinfo } from './components/github/github.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path='' element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="user/" element={<User/>}>
<Route path=":username" element={<User/>}/>
    </Route>
    <Route loader={githubinfo} path="github" element={<Github/>}/>
     <Route path="*" element={<div>Not found</div>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

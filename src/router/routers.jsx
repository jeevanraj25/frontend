import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Loading from '../components/loading/Loading';
import Login from '../pages/login';

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login/" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routers;

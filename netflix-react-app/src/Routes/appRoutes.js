import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Components/Home/Home';
import StyledCompDemo from '../Components/StyledCompDemo/StyledCompDemo'; // not lazy loaded

const HocDemo = React.lazy( () => import('../Components/HocDemo/HocDemo') );
const UnitTestingDemo = React.lazy( () => import('../Components/UnitTestingDemo/UnitTestingDemo') );
const HooksDemo = React.lazy( () => import('../Components/HooksDemo/HooksDemo') );
const ContextApiDemo = React.lazy( () => import('../Components/ContextApiDemo/ContextApiDemo') );

export const appRoutes = (
  <Suspense fallback={
      <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    }>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hoc-demo' element={<HocDemo/>} />
      <Route path='/unit-testing' element={<UnitTestingDemo/>} />
      <Route path='/hooks' element={<HooksDemo/>} />
      <Route path='/context-api-demo' element={<ContextApiDemo/>} />
      <Route path='/styled-comp-demo' element={<StyledCompDemo/>} />
    </Routes>
  </Suspense>
)

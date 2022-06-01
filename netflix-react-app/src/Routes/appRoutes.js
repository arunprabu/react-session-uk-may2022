import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home/Home';
import HocDemo from '../Components/HocDemo/HocDemo';
import UnitTestingDemo from '../Components/UnitTestingDemo/UnitTestingDemo';
import HooksDemo from '../Components/HooksDemo/HooksDemo';
import ContextApiDemo from '../Components/ContextApiDemo/ContextApiDemo';
import StyledCompDemo from '../Components/StyledCompDemo/StyledCompDemo';

export const appRoutes = (
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/hoc-demo' element={<HocDemo/>} />
    <Route path='/unit-testing' element={<UnitTestingDemo/>} />
    <Route path='/hooks' element={<HooksDemo/>} />
    <Route path='/context-api-demo' element={<ContextApiDemo/>} />
    <Route path='/styled-comp-demo' element={<StyledCompDemo/>} />
  </Routes>
)

import React from 'react'
import {BrowserRouter,Route,Routes as Rts} from 'react-router-dom';
import Landing from './pages/Landing'
import TeacherForm from './pages/Landing/TeacherForm';
import TeacherList from './pages/TeacherList';


function Routes() {
  return (
    <BrowserRouter>
    <Rts>
        <Route path="/"  element={<Landing/>}/>
        <Route path="/study" element={<TeacherList/>}/>
        <Route path="/give-classes" element={<TeacherForm/>}/>
    </Rts>
    </BrowserRouter>
  )
}

export default Routes;

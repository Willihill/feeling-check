import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import CameraContainer from './containers/CameraContainer'
import PersonContainer from './containers/PersonContainer'
import AddCameraContainer from './containers/AddCameraContainer'
import MonitoringContainer from './containers/MonitoringContainer'
import AddPersonContainer from './containers/AddPersonContainer'

export default () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomeContainer />}>
        <Route path='/camera' element={<CameraContainer />}>
          <Route path='/add' element={<AddCameraContainer />} />
        </Route>
        <Route path='/person' element={<PersonContainer />}>
          <Route path='/add' element={<AddPersonContainer />} />
        </Route>
      </Route>
      <Route path='/monitoring' element={<MonitoringContainer />} />
    </Routes>
  </Router>
)

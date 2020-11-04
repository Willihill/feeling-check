import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import CameraContainer from './containers/CameraContainer'
import PersonContainer from './containers/PersonContainer'
import AddCameraContainer from './containers/AddCameraContainer'
import MonitoringContainer from './containers/MonitoringContainer'

export default () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomeContainer />}>
        <Route path='/camera' element={<CameraContainer />}>
          <Route path='/add' element={<AddCameraContainer />} />
        </Route>
        <Route path='/person' element={<PersonContainer />} />
      </Route>
      <Route path='/monitoring' element={<MonitoringContainer />} />
    </Routes>
  </Router>
)

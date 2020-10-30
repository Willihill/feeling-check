import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import CameraContainer from './containers/CameraContainer'
import PersonContainer from './containers/PersonContainer'
import AddCameraContainer from './containers/AddCameraContainer'

export default () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomeContainer />}>
        <Route path='/camera' element={<CameraContainer />}>
          <Route path='/add' element={<AddCameraContainer />} />
        </Route>
        <Route path='/person' element={<PersonContainer />} />
      </Route>
    </Routes>
  </Router>
)

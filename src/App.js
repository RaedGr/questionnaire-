import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import { evaluatePersonality } from './Personality'
import * as Survey from 'survey-react'
import { json } from './SurveyData'


import 'survey-react/defaultV2.css'
import 'survey-react/modern.css'

import Result from './result'


Survey.StylesManager.applyTheme('defaultV2')

function App() {

  const navigate = useNavigate()

  const survey = new Survey.Model(json)

  survey.onComplete.add(function (sender) {

    evaluatePersonality(sender.data)
    navigate('/final')
  })
  

  const Intro = () => (
    <div className="welcome-msg">
      <h1>Welcome</h1>
      <Link to="/survey">
        <button className="next-button">Start survey</button>
      </Link>
    </div>
  )

  const Final = () => {
    return (
      <Result />

    )
  }

  return (
    <Routes>
      <Route path="/survey" element={<Survey.Survey model={survey} />} />
      <Route path="/final" element={<Final />} />
      <Route path="/" element={<Intro />} />
    </Routes>
  )
}

export default App
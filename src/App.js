import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import { evaluatePersonality } from './Personality'
import * as Survey from 'survey-react'
import { json } from './SurveyData'


import 'survey-react/defaultV2.css'
import 'survey-react/modern.css'

import Result from './result'
export let question1=''
export let question41=''
export let question42=''
export let question43=''

Survey.StylesManager.applyTheme('defaultV2')

function App() {
  

  const navigate = useNavigate()

  const survey = new Survey.Model(json)
  survey.onComplete.add(function (sender) {
    question1 = survey.getValue("nom")
    question41 = survey.getValue("question41")
    question42 = survey.getValue("question42")
    question43 = survey.getValue("question43")


})
  survey.onComplete.add(function (sender) {



    evaluatePersonality(sender.data)
    navigate('/final')

   })
  
  

  const Intro = () => (
    <div className="welcome-msg">
      
      <Link to="/survey">
        <button className="next-button">Start questionnaire</button>
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
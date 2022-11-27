import React, { useState }  from 'react'
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
  const [questions, setQuestions] = useState({})

  const navigate = useNavigate()

  const survey = new Survey.Model(json)

  survey.onComplete.add(function (sender) {
     question1 = survey.getQuestionByName("nom")
     question41 = survey.getQuestionByName("question41")
     question42 = survey.getQuestionByName("question42")
     question43 = survey.getQuestionByName("question43")
    setQuestions({
      question1: question1.propertyHash.value,
      question41: question41.propertyHash.value[0],
      question42: question42.propertyHash.value[0],
      question43: question43.propertyHash.value[0]
    })


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
import React, {  useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

import * as Survey from 'survey-react'
import { json } from './SurveyData'
import {evaluatePersonality, msg,msgi,msgo,msgr,msgt,msges,msgfp,msgse,msgbp,msgre,msga } from './Personality'

import 'survey-react/defaultV2.css'
import 'survey-react/modern.css'
import './index.css'
import './App.css'

// Survey.StylesManager.applyTheme('modern')
Survey.StylesManager.applyTheme('defaultV2')

function App() {
  const [answers, setAnswers] = useState('')
  const navigate = useNavigate()

  const survey = new Survey.Model(json)

  survey.onComplete.add(function (sender) {
    // setAnswers(sender.data)
    // setAnswers(jsonToHtmlForm.getForm(sender.data))
    // setAnswers([JSON.stringify(sender.data, null, 3)])
    // console.log('Result JSON:\n' + JSON.stringify(sender.data, null, 3))
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
      // ! need to fix window.print() on mobile. Doesn't work on safari? Does it work on android though?
      <div className="final-msg">
        <h1>You are finished</h1>
        <h1>Thank you for filling out our survey!</h1>
        <h3>Here are your answers</h3>
        <h5>Your personality is: {msg}{msgi}{msgo}{msgt}{msgr}{msges}{msgfp}{msgse}{msgbp}{msgre}{msga}</h5>
        {/* <div style={{ marginBottom: 35, maxWidth: 800 }}>
          <JSONTable source={answers} />
        </div> */}
        <button className="next-button" onClick={() => window.print()}>
          Download as PDF
        </button>
      </div>
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
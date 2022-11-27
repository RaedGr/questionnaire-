import {msgPti,msgPai,msgPap,msgi,msgo,msgt,msgta,msgtn,msgtc,msgte,msgr,msges,msgfp,msgse,msgbp,msgre,msga,msgaa,msgaaa } from './Personality'
import {question1,question41,question42,question43} from './App.js'
import './result.css' 
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
const data = [
  {
    subject: "Intolérance à l'incertitude",
    A: 80,
    
    fullMark: 100
  },
  {
    subject: "Intelligence émotionnelle",
    A: 60,
    
    fullMark: 100
  },
  {
    subject: "Optimiste",
    A: 86,
   
    fullMark: 100
  },
  {
    subject: "Ouverture à l'expérience",
    A: 99,
    
    fullMark: 100
  },
  {
    subject: "Agréabilité dans les relations",
    A: 85,
   
    fullMark: 100
  },
  {
    subject: "Neuroticisme (ou névrotisme)",
    A: 65,
    
    fullMark: 100
  }
  ,
  {
    subject: "Consciencieusité:",
    A: 65,
    
    fullMark: 100
  }
  ,
  {
    subject: " Extraversion",
    A: 65,
    
    fullMark: 100
  }
  ,
  {
    subject: "Réactivité au stress",
    A: 65,
    
    fullMark: 100
  }
];
export default function Result (){
return (

<div className='cont'>
<div>


{question1}
{question41}
{question42}
{question43}
<div className='titre'>Votre tolérance à l'incertitude:</div>
<div className='msg'>{msgPti}</div>
<div className='titre'>Votre anxiété prospective:</div>
<div className='msg'>{msgPap}</div>
<div className='titre'> Votre anxiété inhibitrice:</div>
<div className='msg'>{msgPai}</div>
<div className='titre'> Votre intelligence émotionnelle:</div>
<div className='msg'>{msgi}</div>
<div className='titre'>Votre optimisme:</div>
<div className='msg'>{msgo}</div>
<div className='titre'>Votre ouverture à l'expérience:</div>
<div className='msg'>{msgt}</div>
<div className='titre'>Votre agréabilité dans les relations:</div>
<div className='msg'>{msgta}</div>
<div className='titre'>Votre neuroticisme (ou névrotisme):</div>
<div className='msg'>{msgtn}</div>
<div className='titre'>Votre consciencieusité:</div>
<div className='msg'>{msgtc}</div>
<div className='titre'>Votre extraversion:</div>
<div className='msg'>{msgte}</div>
<div className='titre'>Votre réactivité au stress:</div>
<div className='msg'>{msgr}</div>
<div className='titre'>Votre estime de soi:</div>
<div className='msg'>{msges}</div>
<div className='titre'>Votre flexibilité psychologique:</div>
<div className='msg'>{msgfp}</div>
<div className='titre'>Votre sentiment d'efficacité personnelle:</div>
<div className='msg'>{msgse}</div>
<div className='titre'>Votre besoins psychologiques:</div>
<div className='msg'>{msgbp}</div>
<div className='titre'>Votre régulation des émotions:</div>
<div className='msg'>{msgre}</div>
<div className='titre'>Votre vie authentique:</div>
<div className='msg'>{msga}</div>
<div className='titre'>Votre aliénation de soi-même:</div>
<div className='msg'>{msgaa}</div>
<div className='titre'>Votre acceptation de l'influence extérieure:</div>
<div className='msg'>{msgaaa}</div>
<button className="next-button" onClick={() => window.print()}>
   Download as PDF
 </button>
</div>
 
 
 <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={700}
      height={700}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>

 </div>

 )
 }
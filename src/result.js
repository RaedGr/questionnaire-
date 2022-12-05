import {msgPti,num,num1,num2,num3,num4,num5,num6,msgPai,msgPap,msgi,msgo,msgt,msgta,msgtn,msgtc,msgte,msgr,msges,msgfp,msgse,msgbp,msgre,msga,msgaa,msgaaa } from './Personality'
import {question1, question41,question42,question43} from './App.js'
import './result.css' 
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";


export default function Result (){
  var auth=Number
  var rc=''
  if((question41==='item1') && (question42==='item1')&&(question43==='item3')){
    auth=100
    rc='100% : Votre pensée est analytique'		
    }else if((question41==='item1' && question42==='item1')||(question41==='item1'&& question43==='item3')||(question43==='item3'&& question42==='item1')){
    auth=66
    rc="66.7% : Votre pensée est plus analytique qu'intuitive	    "
    }else if((question41==='item1' )||(question42==='item1')||(question43==='item3')){
    auth=33
    rc="33.3% : Votre pensée est plus intuitive qu'analytique"
    }else
    {
      rc="0% : Votre pensée est intuitive"
    auth=0
    }
    const data = [
      {
        subject: "Intolérance à l'incertitude",
       A: num,
        
        fullMark: 100
      },
      {
        subject: "Intelligence émotionnelle",
        A: num1,
        
        fullMark: 100
      },
      {
        subject: "Optimiste",
        A: num2,
       
        fullMark: 100
      },
      {
        subject: "Ouverture à l'expérience",
        A: num3,
        
        fullMark: 100
      },
      {
        subject: "Agréabilité dans les relations",
        A: num3,
       
        fullMark: 100
      },
      {
        subject: "Neuroticisme (ou névrotisme)",
        A: num3,
        
        fullMark: 100
      }
      ,
      {
        subject: "Consciencieusité:",
        A: num3,
        
        fullMark: 100
      }
      ,
      {
        subject: " Extraversion",
        A: num3,
        
        fullMark: 100
      }
      ,
      {
        subject: "Réactivité au stress",
        A: num4,
        
        fullMark: 100
      }
    ];
    const data1 = [
      {
        subject: "Régulations des émotions",
       A: num5,
        
        fullMark: 100
      },
      {
        subject: "Manque de conscience des émotions",
        A: num5,
        
        fullMark: 100
      },
      {
        subject: "Manque de clarté des émotions",
        A: num5,
       
        fullMark: 100
      },
      {
        subject: "Non acceptation des émotions",
        A: num5,
        
        fullMark: 100
      },
      {
        subject: "Accés limité à des stratégies de régulations des émotions ",
        A: num5,
       
        fullMark: 100
      },
      {
        subject: "Difficultés à contrôler les implusions",
        A: num5,
        
        fullMark: 100
      }
      ,
      {
        subject: "Difficultés à s'engager dans des comportements orientés vers des buts",
        A: num5,
        
        fullMark: 100
      }
      ,
      {
        subject: "Réflexion cognitive",
        A: auth,
        
        fullMark: 100
      }
      ,
      {
        subject: "Vie authentique",
        A: num6,
        
        fullMark: 100
      },
      {
        subject: "Aliénation de soi-même",
        A: num6,
        
        fullMark: 100
      },
      {
        subject: "Acceptation de l'influence extérieure",
        A: num6,
        
        fullMark: 100
      }
    ];
    
return (
<div>
<div className='cont'>
<div>
<div className='titre'>Nom et prénom:</div>
<div className='msg'>{question1}</div>
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
</div>
<RadarChart
      cx={500}
      cy={350}
      outerRadius={200}
      width={1000}
      height={1000}
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
    <div className='cont'>
      <div>
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
<div className='titre'>Votre réflexion cognitive</div>
<div className='msg'>{rc}</div>
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
      cx={550}
      cy={350}
      outerRadius={200}
      width={1000}
      height={1000}
      data={data1}
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
 </div>

 )
 }
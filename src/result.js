import {msgPti,msgPai,msgPap,msgi,msgo,msgt,msgta,msgtn,msgtc,msgte,msgr,msges,msgfp,msgse,msgbp,msgre,msga,msgaa,msgaaa } from './Personality'
import './result.css' 
export default function Result (){
return (

<div>
<div>
<h1>Votre résultats:</h1>
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
</div>
 
 <button className="next-button" onClick={() => window.print()}>
   Download as PDF
 </button>
 </div>

 )
 }
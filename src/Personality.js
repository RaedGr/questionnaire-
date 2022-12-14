
let col1 = 0
let col2 = 0
let col3 = 0
let col4 = 0
let col5 = 0
let col1re = 0
let col2re = 0
let col3re = 0
let col4re = 0
let col5re = 0
let col1i = 0
let col2i = 0
let col3i = 0
let col4i = 0
let col5i = 0
let col1o = 0
let col2o = 0
let col3o = 0
let col4o = 0
let col5o = 0
let col1t = 0
let col2t = 0
let col3t = 0
let col4t = 0
let col5t = 0
let col1r = 0
let col2r = 0
let col3r = 0
let col2es = 0
let col3es = 0
let col1es = 0
let col4es = 0
let col1fp = 0
let col2fp = 0
let col3fp = 0
let col4fp = 0
let col5fp = 0
let col6fp = 0
let col7fp = 0
let col1se = 0
let col2se = 0
let col3se = 0
let col4se = 0
let col1bp = 0
let col2bp = 0
let col3bp = 0
let col4bp = 0
let col5bp = 0
let col6bp = 0
let col7bp = 0
let col1a = 0
let col2a = 0
let col3a = 0
let col4a = 0
let col5a = 0
let col6a = 0
let col7a = 0
export let msgPti = ''
export let msgPap =''
export let msgPai=''
export let msgi=''
export let msgo=''
export let msgt=''
export let msgr=''
export let msges=''
export let msgfp=''
export let msgse=''
export let msgbp=''
export let msgre=''
export let msgaa=''
export let msga=''
export let msgaaa=''
export let msgta=""
export let msgtn=""
export let msgtc=""
export let msgte=""
export let num= Number ;
export let num1= Number ;
export let num2= Number ;
export let num3= Number ;
export let num4= Number ;
export let num6= Number ;
export let num5= Number ;



export const evaluatePersonality = (obj, recursed = false) => {
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 5 &&
        questionNumber(key) <= 6
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1 = col1 + 1
        if (questionNumber(obj[key]) === 2) col2 = col2 + 1
        if (questionNumber(obj[key]) === 3) col3 = col3 + 1
        if (questionNumber(obj[key]) === 4) col4 = col4 + 1
        if (questionNumber(obj[key]) === 5) col5 = col5 + 1
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if (((col5 >= 10 )|| (col5 >= 8 && col4 >= 2)) ||((col5 >= 6) && ( col4 >= 3 &&col3 >= 2))) {
        msgPti ="De 75% ?? 100% : Vous ??tes tr??s intol??rant ?? l'incertitude"
        msgPap ="De 75% ?? 100% : Vous avez beaucoup d'anxi??t?? prospective"
        msgPai ="De 75% ?? 100% : Vous avez beaucoup d'anxi??t?? inhibitrice"
        num=90
      } else if ( (col4 >= 10 || (col4 >= 8 && col3 >= 2))||((col4 >= 6) && ( col3 >= 3 && col2 >= 2))) {
        msgPti ="De 50% ?? 75% : Vous ??tes plut??t intol??rant ?? l'incertitude"
        msgPap ="De 50% ?? 75% : Vous avez de l'anxi??t?? prospective"
        msgPai ="De 50% ?? 75% : Vous avez de l'anxi??t?? inhibitrice"
        num=70
      } else if ((col3 >= 10 || (col3 >= 8 && col2 >= 2))||((col3 >= 6) && ( col2 >= 3 && col1 >= 2)) ){
        msgPti ="De 25% ?? 50% : Vous ??tes plut??t tol??rant ?? l'incertitude"
        msgPap ="De 25% ?? 50% : Vous avez plut??t peu d'anxi??t?? prospective"
        msgPai ="De 25% ?? 50% : Vous avez plut??t peu d'anxi??t?? inhibitrice"
        num=50
      } else if ( (col2 >= 10 || (col2 >= 8 && col1 >= 2))|| (col2 >= 6 && col1 >= 2)||(col1>=7) ){
        msgPti ="De 0% ?? 25 % : Vous ??tes tr??s tol??rant ?? l'incertitude"
        msgPap ="De 0% ?? 25 % : Vous avez tr??s peu d'anxi??t?? prospective"
        msgPai ="De 0% ?? 25 % : Vous avez tr??s peu d'anxi??t?? inhibitrice"
        num=25
      } else {
        msgPti ="De 25% ?? 50% : Vous ??tes plut??t tol??rant ?? l'incertitude"
        msgPap ="De 25% ?? 50% : Vous avez plut??t peu d'anxi??t?? prospective"
        msgPai ="De 25% ?? 50% : Vous avez plut??t peu d'anxi??t?? inhibitrice"
        num=50
      }
  
    }

    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 7 &&
        questionNumber(key) <= 12
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1i = col1i + 1
        if (questionNumber(obj[key]) === 2) col2i = col2i + 1
        if (questionNumber(obj[key]) === 3) col3i = col3i + 1
        if (questionNumber(obj[key]) === 4) col4i = col4i + 1
        if (questionNumber(obj[key]) === 5) col5i = col5i + 1
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if (((col5i >= 25 )|| (col5i >=25 && col4i >= 4)) ||((col5i >= 22) && ( col4i >= 6 &&col3i >= 4))) {
        msgi = "De 81.2% ?? 100% : Votre intelligence ??motionnelle est forte"
        num1=95
      } else if ( (col4i >= 25 || (col4i >= 24 && col3i >= 4))||((col4i >= 22) && ( col3i >= 8 && col2i >= 2))) {
        msgi ="De 61.5% ?? 81.1% : Votre intelligence ??motionnelle est dans la moyenne "
        num1=75
      } else if ((col3i >= 22 || (col3i >= 22 && col2i >= 4))||((col3i >= 22) && ( col2i >= 4 && col1i >= 2)) ||(col1>=14)){
        msgi ="De 0% ?? 61.4% : Votre intelligence ??motionnelle est faible"
        num1=50
      } else {
        msgi = "De 0% ?? 61.4% : Votre intelligence ??motionnelle est faible"
        num1=50
      }
  
    }
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 13 &&
        questionNumber(key) <= 14
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1o = col1o + 1
        if (questionNumber(obj[key]) === 2) col2o = col2o + 1
        if (questionNumber(obj[key]) === 3) col3o = col3o + 1
        if (questionNumber(obj[key]) === 4) col4o = col4o + 1
        if (questionNumber(obj[key]) === 5) col5o = col5o + 1
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if (((col5o >= 8 )|| (col5o >=6 && col4o >= 2)) ||((col5o >=7) && ( col4o >= 2 &&col3o >= 1)) ){
        msgo = "De 75% ?? 100% : Vous avez tendance ?? ??tre plus optimiste que la moyenne"
        num2=90
      } else if ( (col4o >= 8 || (col4o >= 6 && col3o >= 3))||((col4o >= 5) && ( col3o >= 3 && col2o >= 1))) {
        msgo ="De 55% ?? 75% : Votre tendance ?? l'optimisme est dans la moyenne"
        num2=70
      } else if (((col3o >= 8 || (col3o >= 6 && col2o >= 3))||((col3o >= 6) && (( col2o >= 2 && col1o >= 2)) )||(col1o>=7))){
        msgo ="De 0% ?? 55 % : Vous avez tendance ?? ??tre plus pessimiste que la moyenne"
        num2=40
      } else {
        msgo = "De 0% ?? 55 % : Vous avez tendance ?? ??tre plus pessimiste que la moyenne "
        num2=30
      }
  
    }
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 15 &&
        questionNumber(key) <= 21
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1t = col1t + 1
        if (questionNumber(obj[key]) === 2) col2t = col2t + 1
        if (questionNumber(obj[key]) === 3) col3t = col3t + 1
        if (questionNumber(obj[key]) === 4) col4t = col4t + 1
        if (questionNumber(obj[key]) === 5) col5t = col5t + 1
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if (((col5t >= 30)|| (col5t >=25 && col4o >= 7)) ||((col5t >=25) && ( col4t >= 6 && col3t >= 4))) {
        msgt ="De 50% ?? 100% : Ouverture ?? l'exp??rience"
        msgta="De 50% ?? 100% : Agr??abilit?? dans les relations"
        msgtn="De 50% ?? 100% : Neuroticisme"
        msgtc="De 50% ?? 100% : Consciencieusit??"
        msgte="De 50% ?? 100% : Extraversion"
        num3=100
      } else if ( (col2t >= 20 || (col2t >= 15 && col1t >= 5))||((col1t >= 15) && ( col3t>= 3 && col2t >= 5))) {
        msgt ="De 0% ?? 50% : Fermeture ?? l'exp??rience"
        msgta="De 0% ?? 50% : D??sagr??abilit?? dans les relations"
        msgtn="De 0% ?? 50% : Stabilit?? ??motionnelle"
        msgtc="De 0% ?? 50% : Impulsivit??"
        msgte="De 0% ?? 50% : Introversion"
        num3=50
      } else {
        msgt ="De 50% ?? 100% : Ouverture ?? l'exp??rience"
        msgta="De 50% ?? 100% : Agr??abilit?? dans les relations"
        msgtn="De 50% ?? 100% : Neuroticisme"
        msgtc="De 50% ?? 100% : Consciencieusit??"
        msgte="De 50% ?? 100% : Extraversion"
        num3=50
      }
  
    }
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 22 &&
        questionNumber(key) <= 24
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1r = col1r + 1
        if (questionNumber(obj[key]) === 2) col2r = col2r + 1
        if (questionNumber(obj[key]) === 3) col3r = col3r + 1
       
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if  ((col3r>=17)||(col3r>=14 && col2r>=5)){
        msgr = "De 66% ?? 100% : Forte r??activit?? au stress"
        num4=100
      } else if ((col2r>=17)||(col2r>=14 && col1r>=5)){
        msgr ="De 33% ?? 66% : Moyenne r??activit?? au stress"
        num4=-66
      } else if((col1r>=17)||(col1r>=14 && col2r>=5)) {
        msgr ="De 0% ?? 33% : Faible r??activit?? au stress"
        num4=33
      } else {
        msgr = "De 33% ?? 66% : Moyenne r??activit?? au stress"
        num4=33
      }
  
    }
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 25 &&
        questionNumber(key) <= 26
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1es = col1es + 1
        if (questionNumber(obj[key]) === 2) col2es = col2es + 1
        if (questionNumber(obj[key]) === 3) col3es = col3es + 1
        if (questionNumber(obj[key]) === 4) col4es = col4es + 1
       
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if  ((col4es>=7)||(col4es>=5 && col3es>=3)){
        msges = "De 80% ?? 100% : Vous avez une estime de vous ??lev??e"
      } else if ((col3es>=6)||(col3es>=5 && col2es>=3)){
        msges ="De 50% ?? 80% : Vous avez une estime de vous dans la moyenne"
      } else if((col2es>=7)||(col1es>= 6)) {
        msges ="De 50% ?? 80% : De 0% ?? 50% : Vous avez une estime de vous faible"
      } else {
        msges = "De 50% ?? 80% : Vous avez une estime de vous dans la moyenne"
      }
  
    }
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 27 &&
        questionNumber(key) <= 28
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1fp = col1fp + 1
        if (questionNumber(obj[key]) === 2) col2fp = col2fp + 1
        if (questionNumber(obj[key]) === 3) col3fp = col3fp + 1
        if (questionNumber(obj[key]) === 4) col4fp = col4fp + 1
        if (questionNumber(obj[key]) === 5) col5fp = col5fp + 1
        if (questionNumber(obj[key]) === 6) col6fp = col6fp + 1
        if (questionNumber(obj[key]) === 7) col7fp = col7fp + 1
       
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if  ((col7fp>=7)||(col7fp>=5 && col6fp>=3)){
        msgfp = "De 75% ?? 100% : Vous avez une tr??s grande flexibilit?? psychologique"
      } else if ((col6fp>=7)||(col6fp>=5 && col5fp>=3)){
        msgfp ="De 50% ?? 75% : Vous avez une grande flexibilit?? psychologique"
      } else if((col5fp>=5)||((col5fp>= 3 && col4fp>=3)) ){
        msgfp ="De 25% ?? 50% : Vous avez une faible flexibilit?? psychologique "
      } else if((col1fp>=5)||((col1fp>= 3 && col2fp>=3)) ){
        msgfp ="De 0% ?? 25% : Vous avez une tr??s faible flexibilit?? psychologique "
      }else {
        msgfp = "De 25% ?? 50% : Vous avez une faible flexibilit?? psychologique "
      }
  
    }
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 29 &&
        questionNumber(key) <= 30
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1se = col1se + 1
        if (questionNumber(obj[key]) === 2) col2se = col2se + 1
        if (questionNumber(obj[key]) === 3) col3se = col3se + 1
        if (questionNumber(obj[key]) === 4) col4se = col4se + 1
       
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if  ((col4se>=7)||(col4se>=5 && col3se>=3)){
        msgse = "De 70% ?? 100% : Au dessus de la moyenne "
      } else if ((col3se>=6)||(col3se>=5 && col2se>=3)){
        msgse ="De 53% ?? 70% : Dans la moyenne "
      } else if((col1se>=7)||((col1se>= 4 && col2se>=3))) {
        msgse ="De 0% ?? 53% : En-dessous de la moyenne"
      } else {
        msgse = "De 53% ?? 70% : Dans la moyenne "
      }
  
    }
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 31 &&
        questionNumber(key) <= 34
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1bp = col1bp + 1
        if (questionNumber(obj[key]) === 2) col2bp = col2bp + 1
        if (questionNumber(obj[key]) === 3) col3bp = col3bp + 1
        if (questionNumber(obj[key]) === 4) col4bp = col4bp + 1
        if (questionNumber(obj[key]) === 5) col5bp = col5bp + 1
        if (questionNumber(obj[key]) === 6) col6bp = col6bp + 1
        if (questionNumber(obj[key]) === 7) col7bp = col7bp + 1
       
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if  ((col7bp>=15)||(col7bp>=12 && col6bp>=5)){
        msgbp = "De 75% ?? 100% : Vos besoins psychologiques sont satisfaits"
      } else if ((col6bp>=12)||(col6bp>=8 && col5bp>=5)){
        msgbp =" De 50% ?? 75% : Vos besoins psychologiques sont plut??t satisfaits  "
      } else if((col5bp>=5)||((col5bp>= 3 && col4bp>=3)) ){
        msgbp ="De 25% ?? 50% : Vos besoins psychologiques sont peu satisfaits "
      } else if((col1bp>=12)||((col1bp>= 10 && col2bp>=4)) ){
        msgbp ="De 0% ?? 25% : Vos besoins psychologiques ne sont pas satisfaits"
      }else {
        msgbp = "De 25% ?? 50% : Vos besoins psychologiques sont peu satisfaits "
      }
  
    }
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 35 &&
        questionNumber(key) <= 40
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1re = col1re + 1
        if (questionNumber(obj[key]) === 2) col2re = col2re + 1
        if (questionNumber(obj[key]) === 3) col3re = col3re + 1
        if (questionNumber(obj[key]) === 4) col4re = col4re + 1
        if (questionNumber(obj[key]) === 5) col5re = col5re + 1
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if (((col5re >= 25 )|| (col5re >= 20 && col4re >= 7)) ||((col5re >= 20) && ( col4re >= 4 &&col3re >= 5))) {
        msgre = "De 75% ?? 100% : Grande difficult?? de r??gulation de vos ??mossions "
        num5=100
      } else if ( (col4re >= 20 || (col4re >= 15 && col3re >= 8))||((col4re >=15 ) && ( col3re >= 9 && col2re >= 4))) {
        msgre = "De 50% ?? 75% : Difficult?? de r??gulation de vos ??mossions"
        num5=75
      } else if ((col3re >= 20 || (col3re >= 15 && col2re >= 5))||((col3re >= 15) && ( col2re >= 5 && col1re >= 5)) ){
        msgre ="De 25% ?? 50% : Peu de difficult?? de r??gulation de vos ??mossions  "
        num5=50
      } else if ( (col2re >= 19 || (col2re >= 17 && col1re >= 8))|| (col2re >= 17 && col1re >= 6)||(col1re>=22) ){
        msgre = "De 0% ?? 25 % : Tr??s peu de difficult?? de r??gulation de vos ??mossions"
        num5=25
      } else {
        msgre = "De 25% ?? 50% : Peu de difficult?? de r??gulation de vos ??mossions  "
        num5=50
      }
  
    }
    for (let key in obj) {
      const questionNumber = (q) =>
        Number(q.match(/\d+/)) ? Number(q.match(/(\d+)/)[0]) : ''
      if (
        typeof key === 'string' &&
        // below checks if it is the personalite questions
        questionNumber(key) >= 44 &&
        questionNumber(key) <= 45
      ) {
        // below code checks if the property is an object
        if (typeof obj[key] === 'object') {
          // if it is an object it will call the original function recursively to loop over the data again
          evaluatePersonality(obj[key], true)
        }
      }
      if (recursed) {
        // here we are doing some conditional checks to sum the totals to each answer
        if (questionNumber(obj[key]) === 1) col1a = col1a + 1
        if (questionNumber(obj[key]) === 2) col2a = col2a + 1
        if (questionNumber(obj[key]) === 3) col3a = col3a + 1
        if (questionNumber(obj[key]) === 4) col4a = col4a + 1
        if (questionNumber(obj[key]) === 5) col5a = col5a + 1
        if (questionNumber(obj[key]) === 6) col6a = col6a + 1
        if (questionNumber(obj[key]) === 7) col7a = col7a + 1
       
    
      }
    }

    if (!recursed) {
      // change the below to set the rating on the personalities
      if  ((col7a>=8)||(col7a>=6 && col6a>=4)){
        msga = "De 75% ?? 100% : Vous ??tes authentique"
        msgaa = "De 75% ?? 100% : Vous avez conscience de vos exp??riences v??cues"
        msgaaa = "De 75% ?? 100% : Vous ne vous conformez pas aux attentes des autres"
        num6=100

      } else if ((col6a>=8)||(col6a>=6 && col5a>=4)){
        msga ="De 50% ?? 75% : Vous ??tes plut??t authentique"
        msgaa = "De 50% ?? 75% : Vous avez plut??t conscience de vos exp??riences v??cues"
        msgaaa = "De 50% ?? 75% : Vous vous conformez peu aux attentes des autres"
        num6=75
      } else if((col5a>=5)||((col5a>= 3 && col4a>=2)) ){
        msga ="De 25% ?? 50% : Vous ??tes peu authentique"
        msgaa = "De 25% ?? 50% : Vous avez peu conscience de vos exp??riences v??cues"
        msgaaa = "De 25% ?? 50% : Vous acceptez plut??t l'influence d'autres personnes"
        num6=50
      } else if((col1a>=8)||((col1a>= 6 && col2a>=2)) ){
        msga ="De 0% ?? 25% : Vous n'??tes pas authentique"
        msgaa = "De 0% ?? 25% : Vousn'avez pas conscience de vos exp??riences v??cues"
        msgaaa = "De 0% ?? 25% : Vous acceptez l'influence d'autres personnes"
        num6=25
      }else {
        msga = "De 25% ?? 50% : Vous ??tes peu authentique"
        msgaa = "De 25% ?? 50% : Vous avez peu conscience de vos exp??riences v??cues"
        msgaaa = "De 25% ?? 50% : Vous acceptez plut??t l'influence d'autres personnes"
        num6=50
      }
  
    }

  
  }
  
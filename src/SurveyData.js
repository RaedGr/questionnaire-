export var json = {
  locale: 'fr',
  title: { default: 'Cadrage', fr: 'Entrepreneuriat' },
  logoPosition: 'right',
  showProgressBar: 'top',
  goNextPageAutomatic: true,
  showNavigationButtons: true,
  pages: [
    {
      name: 'page1',
      elements: [
        {
          type: 'text',
          name: 'nom',
          title: { fr: 'Nom et prénom:' },
          hideNumber: true,
        },
        {
          type: 'text',
          name: 'question1',
          title: { fr: 'Age:' },
          hideNumber: true,
          inputType: 'number',
          min: 18,
        },
        {
          type: 'comment',
          name: 'question2',
          title: {
            fr: '1. Présentez-vous et présentez votre envie',
          },
          hideNumber: true,
          placeholder: {
            fr: 'Vous (Qui êtes-vous ? Vos études ? Votre vécu professionnel ?)',
          },
        },
        {
          type: 'comment',
          name: 'question3',
          title: { fr: 'Votre envie' },
          hideNumber: true,
          placeholder: {
            fr: '(Logique, développement, création,  reprise, horizon ?)',
          },
        },
        {
          type: 'comment',
          name: 'question4',
          title: { fr: '2. Finalité et objectifs' },
          hideNumber: true,
          placeholder: {
            fr: 'Votre envie professionnelle (Qu’est-ce que vous voulez pour votre avenir ? Comment vous voyez-vous d’ici trois ans ?)',
          },
        },
        {
          type: 'comment',
          name: 'vosObjectifs',
          hideNumber: true,
          placeholder: {
            fr: "(Quels sont vos objectifs professionnels à plus court terme ? Comment vous voyez-vous d'ici 6 mois ?)",
          },
        },
        {
          type: 'checkbox',
          name: 'demarcheEntrepeneur',
          title: '3. Votre démarche entrepreneuriale',
          description: {
            fr: 'Dans quelle démarche entrepreneuriale souhaitez vous vous lancer ?',
          },
          hideNumber: true,
          choices: [
            {
              value: 'item1',
              text: {
                fr: 'Vous souhaitez lancer de nouveaux projets dans votre entreprise "Faire émerger puis concrétiser des projets d\'activités nouvelles dans les TPE, PME-PMI et entreprises artisanales représente un enjeu économique important et permet d’asseoir et/ou de développer leur compétitivité. Il peut s’agir de structurer la démarche commerciale, développer un bureau d’études ou bien encore lancer un nouveau produit ou process... Des projets de développement «  dorment  » dans chaque entreprise ! Vous souhaitez identifier le ou les projets susceptibles de contribuer à la pérennité de votre entreprise, d’anticiper et de prendre une longueur d’avance sur vos concurrents : une règle d’or car les besoins des clients évoluent, tout autant que l’environnement dans lequel vous agissez agit votre comme le secteur d’activité de votre entreprise évoluent.     En outre, projeter l’évolution de votre entreprise, c’est prendre de la hauteur en tant que manager."      ',
              },
            },
            {
              value: 'item2',
              text: {
                fr: 'Vous réfléchissez à la création d\'une entreprise       "Et en ces temps de crise où certaines entreprises sont plutôt frileuses en matière de recrutement, pourquoi ne pas tenter sa chance si on peine à trouver un emploi ? Les motivations des candidats à la création d’entreprise sont nombreuses : plus d’autonomie, ne plus subir les inconvénients du statut de salarié ou encore le chômage... Mais cela ne suffit pas... Attention, si cela est votre seule motivation, un projet sérieux repose sur une vraie stratégie, permet de cheminer de l’idée à la concrétisation, respecte des étapes chronologiques. Le futur entrepreneur « doit porter son rêve et oser aller jusqu’au bout ». La création d’entreprise représente tout à la fois un enjeu collectif et un enjeu personnel."      ',
              },
            },
            {
              value: 'item3',
              text: {
                fr: "Vous souhaitez céder votre entreprise        \"Céder son entreprise n'est pas aussi simple que l'on pourrait le penser. Le nombre de cessions ne cesse d'augmenter et il vous faudra mettre toutes les chances de votre côté pour réussir le passage de témoin, si vous souhaitez que son existence soit pérennisée. Cette étape décisive dans votre parcours nécessite une grande anticipation. Vous allez, en outre, rencontrer un repreneur qui n'aura peut-être pas la même vision que vous et il est nécessaire de vous y préparer. La transmission, c'est l'affaire de deux logiques : celle d'un cédant qui vend son passé tout en se construisant un autre avenir, et celle d'un repreneur qui achète son avenir en le construisant autour d'une entreprise. Il vous faudra faire le point sur votre projet, sa faisabilité, ses répercussions, tout en vous faisant découvrir les différentes étapes de la cession d'entreprise.\"      ",
              },
            },
            {
              value: 'item4',
              text: {
                fr: "Vous réfléchissez à la reprise d'entreprise \"Vous vous apprêtez à franchir un cap professionnel qui ne doit pas laisser de place à l'improvisation. En effet, reprendre une entreprise, au contraire de la création, va vous permettre de vous appuyer sur une structure existante, mais cela ne signifie pas que tout coulera de source. Il vous faudra vous poser les bonnes questions : Que se passera-t-il au départ du dirigeant ? Suis-je la bonne personne pour donner un avenir à cette entreprise ? Cette entreprise est-elle celle qui me permettra de développer mon projet de vie ? Cette étape décisive dans votre parcours professionnel nécessite une grande anticipation. Vous allez rencontrer un cédant qui n'aura peut-être pas la même vision que vous et il est nécessaire de vous y préparer. La transmission, c'est l'affaire de deux logiques : celle d'un cédant qui vend son passé tout en se construisant un autre avenir, et celle d'un repreneur qui achète son avenir en le construisant autour d'une entreprise. Il vous faudra faire le point sur votre projet, sa faisabilité, ses répercussions, tout en découvrant les différentes étapes de la reprise d'entreprise.\"",
              },
            },
          ],
          showOtherItem: true,
          otherPlaceholder: { fr: '....' },
          maxSelectedChoices: 1,
        },
      ],
      title: { fr: 'I. Cadrage   ' },
    },
    {
      name: 'page2',
      elements: [
        {
          type: 'matrix',
          name: 'question5',
          title: { fr: "Tolérance à l'incertitude          \n" },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Pas du tout correspondant ' } },
            { value: 'Column 2', text: { fr: 'Un peu correspondant ' } },
            { value: 'Column 3', text: { fr: 'Assez correspondant ' } },
            { value: 'Column 4', text: { fr: 'Très correspondant ' } },
            { value: 'Column 5', text: { fr: 'Tout à fait correspondant ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: { fr: '1 - Les imprévus me dérangent énormément    ' },
            },
            {
              value: 'Row 2',
              text: {
                fr: "2 - Ça me frustre de ne pas avoir toute l'information dont j'ai besoin    ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "3 - L'incertitude m'empêche de profiter pleinement de la vie    ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '4 - On devrait tout prévenir pour éviter les surprises    ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '5 - Un léger imprévu peut tout gâcher, même la meilleure des planifications    ',
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "6 - Lorsque c'est le temps d'agir, l'incertitude me paralyse    ",
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question6',
          title: { fr: "Tolérance à l'incertitude          \n" },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Pas du tout correspondant ' } },
            { value: 'Column 2', text: { fr: 'Un peu correspondant ' } },
            { value: 'Column 3', text: { fr: 'Assez correspondant ' } },
            { value: 'Column 4', text: { fr: 'Très correspondant ' } },
            { value: 'Column 5', text: { fr: 'Tout à fait correspondant ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "7 - Lorsque je suis incertain(e), je ne peux pas aller de l'avant    ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "8 - Je veux toujours savoir ce que l'avenir me réserve    ",
              },
            },
            {
              value: 'Row 3',
              text: { fr: '9 - Je déteste être pris(e) au dépourvu    ' },
            },
            {
              value: 'Row 4',
              text: {
                fr: "10 - Le moindre doute peut m'empêcher d'agir    ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "11 - Je devrais être capable de tout organiser à l'avance    ",
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: '12 - Je dois me retirer de toute situation incertaine    ',
              },
            },
          ],
        },
        { type: 'panel', name: 'panel1' },
      ],
      title: { fr: 'II. Personnalité \n' },
    },
    {
      name: 'page3',
      elements: [
        {
          type: 'matrix',
          name: 'question7',
          title: { fr: 'Intelligence émotionnelle          ' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '1 - Je sais à quel moment il faut que je parle de mes problèmes personnels aux autres.    ',
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "2 - Quand je rencontre un obstacle, je me souviens des obstacles que j'ai déjà rencontrés et que j'ai surmontés.    ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "3 - Je pense que la plupart des choses que j'entreprends, je les fais bien.    ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '4 - La plupart des personnes me font facilement confiance.    ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "5 - Je trouve que c'est difficile de comprendre avec justesse les messages nonverbaux des autres personnes.    ",
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "6 - La plupart des évènements marquants de ma vie m'ont conduit à reconsidérer ce qui était important de qui ce ne l'était pas.    ",
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question8',
          title: { fr: 'Intelligence émotionnelle          ' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "7 - Quand je change d'humeur, j'entrevois de nouvelles ouvertures.    ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "8 - Ressentir des émotions est une chose qui fait que la vie vaut la peine d'être vécue.    ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: '9 - Je suis conscient de mes émotions au moment où je les vis.    ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "10 - Je m'attends à ce qui m'arrive des choses positives dans la vie.    ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "11 - J'aime partager mes émotions avec d'autres personnes.    ",
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "12 - Quand je vis une émotion positive, je veux savoir comment faire pour qu'elle perdure dans le temps.    ",
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question9',
          title: { fr: 'Intelligence émotionnelle          ' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "13 - J'organise des évènements que les autres apprécient.    ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: '14 - Je recherche des activités qui me rendent heureux(se).    ',
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "15 - Je suis conscient des messages non- verbaux que j'envoie aux autres.    ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '16 - Je me présente de telle façon que les autres aient une bonne impression de moi.    ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '17 - Quand je suis de bonne humeur, régler les problèmes devient facile pour moi.    ',
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "18 - En scrutant les expressions faciales des personnes, je suis capable de reconnaître les émotions qu'elles ressentent.    ",
              },
            },
          ],
        },
      ],
      title: { fr: 'II. Personnalité \n' },
    },
    {
      name: 'page4',
      elements: [
        {
          type: 'matrix',
          name: 'question10',
          title: { fr: 'Intelligence émotionnelle          ' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord  ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: { fr: "19 - Je sais pourquoi je change d'humeur.    " },
            },
            {
              value: 'Row 2',
              text: {
                fr: "20 - Quand je suis d'humeur positive, je suis capable d'avoir de nouvelles idées.    ",
              },
            },
            {
              value: 'Row 3',
              text: { fr: '21 - Je sais maîtriser mes émotions.    ' },
            },
            {
              value: 'Row 4',
              text: {
                fr: '22 - Je reconnais facilement mes émotions au moment où je les vis.    ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '23 - Je me motive en imaginant les bons résultats des tâches entreprises.    ',
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: '24 - Je complimente les personnes quand elles accomplissent quelque chose de bien.    ',
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question11',
          title: { fr: 'Intelligence émotionnelle          ' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord  ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "25 - Je suis capable d'interpréter les messages non-verbaux des personnes qui les envoient.    ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "26 - Quand quelqu'un me parle d'un événement important de sa vie, je le ressens comme si je l'avais vécu.    ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "27 - Quand je sens que je change d'émotions, j'ai le réflexe d'avoir de nouvelles idées.    ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "28 - Quand je suis face à un challenge, j'abandonne car j'ai peur d'échouer.    ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '29 - Je sais ce que les personnes ressentent juste en les regardant.    ',
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "30 - J'aide les personnes à se sentir mieux quand elles vont mal.    ",
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question12',
          title: { fr: 'Intelligence émotionnelle          ' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord  ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "31 - J'utilise ma bonne humeur pour faire face à un obstacle.    ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: '32 - Je peux dire comment une personne se sent au ton de sa voix.    ',
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "33 - C'est difficile pour moi de comprendre pourquoi les gens ressentent ce qu'ils ressentent.    ",
              },
            },
          ],
        },
      ],
      title: { fr: 'II. Personnalité \n' },
    },
    {
      name: 'page5',
      elements: [
        {
          type: 'matrix',
          name: 'question15',
          title: { fr: 'Optimisme' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'En désaccord' } },
            { value: 'Column 3', text: { fr: 'Neutre' } },
            { value: 'Column 4', text: { fr: 'En accord' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "1. Dans les périodes d'incertitude, je m'attends généralement au mieux.    ",
              },
            },
            {
              value: 'Row 2',
              text: { fr: "2. J'ai de la facilité à me détendre.    " },
            },
            {
              value: 'Row 3',
              text: {
                fr: '3. Si quelque chose risque de mal aller pour moi, ce sera le cas.    ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '4. Je suis toujours optimiste sur mon avenir.    ',
              },
            },
            {
              value: 'Row 5',
              text: { fr: "5. J'apprécie beaucoup mes amis(es).    " },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question13',
          title: { fr: 'Optimisme' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'En désaccord' } },
            { value: 'Column 3', text: { fr: 'Neutre' } },
            { value: 'Column 4', text: { fr: 'En accord' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '6. Il est important pour moi de rester occupé(e).    ',
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "7. Je m'attends presque jamais à ce que les choses aillent comme je le voudrais.    ",
              },
            },
            {
              value: 'Row 3',
              text: { fr: "8. Je ne m'énerve pas trop facilement.    " },
            },
            {
              value: 'Row 4',
              text: {
                fr: "9. Je m'attends rarement à ce que de bonnes choses m'arrivent.    ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "10. Dans l'ensemble, je m'attends à ce que plus de bonnes choses m'arrivent que de mauvaises.    ",
              },
            },
          ],
        },
      ],
      title: { fr: 'II. Personnalité  \n' },
    },
    {
      name: 'page6',
      elements: [
        {
          type: 'matrix',
          name: 'question14',
          title: { fr: 'Traits de personnalité' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord, ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: { fr: '1 - Est volubile (aime parler)    ' },
            },
            {
              value: 'Row 2',
              text: {
                fr: '2 - A tendendace à remarquer les défauts des autres    ',
              },
            },
            { value: 'Row 3', text: { fr: '3 - Fait du bon travail    ' } },
            {
              value: 'Row 4',
              text: { fr: '4 - Est déprimée, mélancolique    ' },
            },
            {
              value: 'Row 5',
              text: {
                fr: '5 - Est original(e), a des idées nouvelles    ',
              },
            },
            { value: 'Row 6', text: { fr: '6 - Est réservé' } },
          ],
        },
        {
          type: 'matrix',
          name: 'question16',
          title: { fr: 'Traits de personnalité' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord, ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '7 - Est serviable et généreux avec les autres    ',
              },
            },
            {
              value: 'Row 2',
              text: { fr: '8 - Peut être un peu négligeant    ' },
            },
            {
              value: 'Row 3',
              text: {
                fr: '9 - Est relaxe, détendu(e), gère bien le stress    ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '10 - Est curieux(se) à propos de plusieurs choses différentes    ',
              },
            },
            {
              value: 'Row 5',
              text: { fr: "11 - Est plein(e) d'énergie    " },
            },
            {
              value: 'Row 6',
              text: {
                fr: '12 - Provoque des disputes avec les autres    ',
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question17',
          title: { fr: 'Traits de personnalité' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord, ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: { fr: '13 - Est un travailleur(se) fiable    ' },
            },
            { value: 'Row 2', text: { fr: '14 - Peut être tendu' } },
            {
              value: 'Row 3',
              text: { fr: '15 - Est ingénieux (se), pense beaucoup    ' },
            },
            {
              value: 'Row 4',
              text: { fr: "16 - Communique beaucoup d'enthousiasme    " },
            },
            {
              value: 'Row 5',
              text: {
                fr: '17 - Est de nature indulgente (a tendance à pardonner)    ',
              },
            },
            {
              value: 'Row 6',
              text: { fr: '18 - A tendance à être désorganisé    ' },
            },
          ],
        },
      ],
      title: { fr: 'II. Personnalité  \n' },
    },
    {
      name: 'page7',
      elements: [
        {
          type: 'matrix',
          name: 'question18',
          title: { fr: 'Traits de personnalité' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord  ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord, ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord  ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: { fr: "19 - S'inquiète beaucoup    " },
            },
            {
              value: 'Row 2',
              text: { fr: '20 - A une imagination active    ' },
            },
            {
              value: 'Row 3',
              text: {
                fr: '21 - A tendance à être tranquille, silencieux(se)    ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '22 - Fait généralement confiance aux autres    ',
              },
            },
            {
              value: 'Row 5',
              text: { fr: '23 - A tendance à être paresseux(se)    ' },
            },
            {
              value: 'Row 6',
              text: {
                fr: "24 - Est stable émotivement, n'est pas facilement perturbé€    ",
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question19',
          title: { fr: 'Traits de personnalité' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord  ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord, ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord  ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            { value: 'Row 1', text: { fr: '25 - Est inventif(ve)    ' } },
            { value: 'Row 2', text: { fr: "26 - S'affirme    " } },
            {
              value: 'Row 3',
              text: { fr: '27 - Peut être froid(e) et distant€    ' },
            },
            {
              value: 'Row 4',
              text: {
                fr: "28 - Persévère jusqu'à ce que la tâche soit terminée    ",
              },
            },
            {
              value: 'Row 5',
              text: { fr: '29 - Peut être de mauvaise humeur    ' },
            },
            {
              value: 'Row 6',
              text: {
                fr: '30 - Valorise les expériences artistiques, esthétiques    ',
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question20',
          title: { fr: 'Traits de personnalité' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord  ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord, ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord  ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: { fr: '31 - Est parfois timide, inhibé    ' },
            },
            {
              value: 'Row 2',
              text: {
                fr: '32 - Est prévenant(e) et gentil(le) avec presque tout le monde    ',
              },
            },
            {
              value: 'Row 3',
              text: { fr: '33 - Fait les choses efficacement    ' },
            },
            {
              value: 'Row 4',
              text: {
                fr: '34 - Reste calme dans les situations tendues    ',
              },
            },
            {
              value: 'Row 5',
              text: { fr: '35 - Préfère le travail routinier    ' },
            },
            {
              value: 'Row 6',
              text: { fr: '36 - Est ouvert(e), sociable    ' },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question21',
          title: { fr: 'Traits de personnalité' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Fortement en désaccord ' } },
            { value: 'Column 2', text: { fr: 'Modérément en désaccord  ' } },
            {
              value: 'Column 3',
              text: { fr: 'Ni en accord, ni en désaccord  ' },
            },
            { value: 'Column 4', text: { fr: 'Modérément en accord  ' } },
            { value: 'Column 5', text: { fr: 'Fortement en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: { fr: '37 - Est parfois rude avec les autres    ' },
            },
            {
              value: 'Row 2',
              text: { fr: '38 - Fait des plans et les suit    ' },
            },
            {
              value: 'Row 3',
              text: { fr: '39 - Devient facilement nerveux(se)    ' },
            },
            {
              value: 'Row 4',
              text: { fr: '40 - Aime réfléchir, jouer avec des idées    ' },
            },
            {
              value: 'Row 5',
              text: { fr: "41 - A peu d'intérêts artistiques    " },
            },
            {
              value: 'Row 6',
              text: { fr: '42 - Aime coopérer avec les autres    ' },
            },
            {
              value: 'Row 7',
              text: { fr: '43 - Est facilement distrait€    ' },
            },
            {
              value: 'Row 8',
              text: {
                fr: '44 - Est sophistiqué(e) en ce qui concerne les arts, la musique et la littérature    ',
              },
            },
          ],
        },
      ],
      title: { fr: 'II. Personnalité  ' },
    },
    {
      name: 'page8',
      elements: [
        {
          type: 'matrix',
          name: 'question22',
          title: { fr: 'Réactivité au stress' },
          hideNumber: true,
          columns: [
            {
              value: 'Column 1',
              text: { fr: 'Je ne suis généralement pas perturbé(e)    ' },
            },
            {
              value: 'Column 2',
              text: {
                fr: "Je me sens généralement un peu mal à l'aise    ",
              },
            },
            {
              value: 'Column 3',
              text: { fr: 'Je deviens généralement très nerveux(se)    ' },
            },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "1 - Quand les tâches et les choses à faire s'accumulent au point qu'elles deviennent difficiles à gérer …         ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: '2 - Quand je veux relaxer après une dure journée au travail …         ',
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "3 - Quand j'ai des conflits avec des personnes qui ne peuvent être immédiatement résolus …         ",
              },
            },
            {
              value: 'Row 4',
              text: { fr: '4 - Quand je fais une erreur …         ' },
            },
            {
              value: 'Row 5',
              text: {
                fr: '5 - Quand je suis critiqué(e) à tort par les autres …         ',
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "6 - Quand je me dispute avec quelqu'un …         ",
              },
            },
            {
              value: 'Row 7',
              text: {
                fr: "7 - Quand j'ai peu de temps pour faire un travail …         ",
              },
            },
            {
              value: 'Row 8',
              text: { fr: '8 - Quand je fais une erreur …         ' },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question23',
          title: { fr: 'Réactivité au stress' },
          hideNumber: true,
          columns: [
            {
              value: 'Column 1',
              text: { fr: 'Je ne suis généralement pas perturbé(e)    ' },
            },
            {
              value: 'Column 2',
              text: {
                fr: "Je me sens généralement un peu mal à l'aise    ",
              },
            },
            {
              value: 'Column 3',
              text: { fr: 'Je deviens généralement très nerveux(se)    ' },
            },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '9 - Quand je ne suis incertain(e) de quoi faire ou dire dans une situation sociale …         ',
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "10 - Quand j'ai du temps libre après avoir travaillé fort …         ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "11 - Quand je suis critiqué(e) par d'autres …         ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "12 - Quand quelque chose ne se passe pas comme je m'y attendais …         ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "13 - Quand je n'atteins pas un but …         ",
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "14 - Quand d'autres me critiquent …         ",
              },
            },
            {
              value: 'Row 7',
              text: {
                fr: "15 - Quand j'échoue à quelque chose …         ",
              },
            },
            {
              value: 'Row 8',
              text: {
                fr: '16 - Quand il y a trop de demandes envers moi en même temps …         ',
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question24',
          title: { fr: 'Réactivité au stress' },
          hideNumber: true,
          columns: [
            {
              value: 'Column 1',
              text: { fr: 'Je ne suis généralement pas perturbé(e)    ' },
            },
            {
              value: 'Column 2',
              text: {
                fr: "Je me sens généralement un peu mal à l'aise    ",
              },
            },
            {
              value: 'Column 3',
              text: { fr: 'Je deviens généralement très nerveux(se)    ' },
            },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "17 - Quand d'autres disent quelque chose d'incorrect à mon sujet …         ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "18 - Quand j'échoue à une tâche …         ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "19 - Quand j'argumente avec d'autres …         ",
              },
            },
            {
              value: 'Row 4',
              text: { fr: '20 - Quand je suis stressé(e) …         ' },
            },
            {
              value: 'Row 5',
              text: {
                fr: "21 - Quand les tâches et les choses à faire s'accumulent au point où il devient difficile d'y faire face …         ",
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "22 - Quand je dois parler devant d'autres personnes …         ",
              },
            },
            {
              value: 'Row 7',
              text: {
                fr: "23 - Quand j'ai beaucoup de tâches et choses à accomplir …         ",
              },
            },
          ],
        },
      ],
      title: { fr: 'II. Personnalité  ' },
    },
    {
      name: 'III. Motivation',
      elements: [
        {
          type: 'matrix',
          name: 'question25',
          title: { fr: 'Estime de soi' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Tout à fait en désaccord ' } },
            { value: 'Column 2', text: { fr: 'En désaccord' } },
            { value: 'Column 3', text: { fr: 'En accord' } },
            { value: 'Column 4', text: { fr: 'Tout à fait en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "1 - Dans l'ensemble, je suis satisfait(e) de moi.  ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "2 -Je sens peu de raisons d'être fier(e) de moi.    ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: '3 -Je pense que je possède un certain nombre de belles qualités.         ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "4 -Je pense que je suis une personne de valeur, au moins égale à n'importe qui d'autre.         ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "5 -J'ai une attitude positive vis-à-vis moi-même.         ",
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "6 -J'aimerais avoir plus de respect pour moi-même.         ",
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question26',
          title: { fr: 'Estime de soi' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Tout à fait en désaccord ' } },
            { value: 'Column 2', text: { fr: 'En désaccord' } },
            { value: 'Column 3', text: { fr: 'En accord' } },
            { value: 'Column 4', text: { fr: 'Tout à fait en accord ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '7 - Je suis capable de faire les choses aussi bien que la majorité des gens.         ',
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "8 -Il m'arrive de penser que je suis un(e) bon(ne) à rien.         ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: '9 -Tout bien considéré, je suis porté(e) à me considérer comme un(e) raté(e).         ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '10 -Parfois je me sens vraiment inutile.         ',
              },
            },
          ],
        },
      ],
      title: { fr: 'III. Motivation' },
    },
    {
      elements: [
        {
          type: 'matrix',
          name: 'question27',
          title: { fr: 'Flexibilité psychologique ' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Jamais vrai' } },
            { value: 'Column 2', text: { fr: 'Très rarement vrai ' } },
            { value: 'Column 3', text: { fr: 'Rarement vrai' } },
            { value: 'Column 4', text: { fr: 'Parfois vrai' } },
            { value: 'Column 5', text: { fr: 'Souvent vrai' } },
            { value: 'Column 6', text: { fr: 'Presque toujours vrai ' } },
            { value: 'Column 7', text: { fr: 'Toujours vrai' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "1. C'est correct si j'ai un souvenir déplaisant.         ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "2. À cause de mes expériences et mes souvenirs douloureux il m'est difficile de vivre une vie que je valoriserais.         ",
              },
            },
            {
              value: 'Row 3',
              text: { fr: "3. J'ai peur de mes émotions.         " },
            },
            {
              value: 'Row 4',
              text: {
                fr: '4. Je crains de ne pas pouvoir contrôler mes inquiétudes et mes émotions.         ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "5. Mes souvenirs douloureux m'empêchent d'avoir une vie épanouie.         ",
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question28',
          title: { fr: 'Flexibilité psychologique ' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Jamais vrai' } },
            { value: 'Column 2', text: { fr: 'Très rarement vrai ' } },
            { value: 'Column 3', text: { fr: 'Rarement vrai' } },
            { value: 'Column 4', text: { fr: 'Parfois vrai' } },
            { value: 'Column 5', text: { fr: 'Souvent vrai' } },
            { value: 'Column 6', text: { fr: 'Presque toujours vrai ' } },
            { value: 'Column 7', text: { fr: 'Toujours vrai' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '6. Je suis en contrôle de ma vie.         ',
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: '7. Les émotions causent problème dans ma vie.         ',
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "8. J'ai l'impression que la plupart des gens gèrent leur vie mieux que moi.         ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "9. Les soucis m'empêchent de réussir.         ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "10. Mes pensées et mes émotions ne m'empêchent pas de vivre ma vie comme je le veux.         ",
              },
            },
          ],
        },
      ],
      title: { fr: 'III. Motivation' },
    },
    {
      name: 'page9',
      elements: [
        {
          type: 'matrix',
          name: 'question29',
          title: { fr: "Sentiment d'efficacité " },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Pas vrai du tout ' } },
            { value: 'Column 2', text: { fr: 'A peine vrai' } },
            { value: 'Column 3', text: { fr: 'Modérément vrai ' } },
            { value: 'Column 4', text: { fr: 'Tout à fait vrai ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "1- Je peux toujours arriver à résoudre mes difficultés si j'essaie assez fort.         ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "2- Si quelqu'un s'oppose à moi, je peux trouver une façon d'obtenir ce que je veux.         ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "3- C'est facile pour moi de maintenir mon attention sur mes objectifs et réaliser mes buts.         ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "4- J'ai confiance que je peux faire face efficacement aux événements inattendus.         ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '5- Grâce à ma débrouillardise, je sais comment faire face aux situations imprévues.         ',
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question30',
          title: { fr: "Sentiment d'efficacité " },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Pas vrai du tout ' } },
            { value: 'Column 2', text: { fr: 'A peine vrai' } },
            { value: 'Column 3', text: { fr: 'Modérément vrai ' } },
            { value: 'Column 4', text: { fr: 'Tout à fait vrai ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "6- Je peux résoudre la plupart de mes problèmes si j'investis les efforts nécessaires.         ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: '7- Je peux rester calme lorsque je suis confronté(e) à des difficultés car je peux me fier à mes habiletés pour faire face aux problèmes.         ',
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: '8- Lorsque je suis confronté(e) à un problème, je peux habituellement trouver plusieurs solutions.         ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '9- Si je suis "coincé(e)", je peux habituellement penser à ce que je pourrais faire.         ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "10- Peu importe ce qui arrive, je suis capable d'y faire face généralement.         ",
              },
            },
          ],
        },
      ],
      title: { fr: 'III. Motivation' },
    },
    {
      name: 'page10',
      elements: [
        {
          type: 'matrix',
          name: 'question31',
          title: { fr: 'Besoins psychologiques' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Absolument faux ' } },
            { value: 'Column 2', text: { fr: 'Faux' } },
            { value: 'Column 3', text: { fr: 'Plutôt faux' } },
            { value: 'Column 4', text: { fr: 'Ni vrai, ni faux ' } },
            { value: 'Column 5', text: { fr: 'Plutôt vrai' } },
            { value: 'Column 6', text: { fr: 'Vrai' } },
            { value: 'Column 7', text: { fr: 'Très vrai' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '1 - Je sens que je suis libre de décider moi-même comment vivre ma vie.         ',
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "2 - J'aime vraiment les gens avec qui je suis en contact.         ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: '3 - Souvent, je ne me sens pas très compétent(e).         ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '4 - Je me sens contraint(e) dans ma vie.         ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '5 - Les gens que je connais me disent que je suis bon(ne) dans ce que je fais.         ',
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question32',
          title: { fr: 'Besoins psychologiques' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Absolument faux ' } },
            { value: 'Column 2', text: { fr: 'Faux' } },
            { value: 'Column 3', text: { fr: 'Plutôt faux' } },
            { value: 'Column 4', text: { fr: 'Ni vrai, ni faux ' } },
            { value: 'Column 5', text: { fr: 'Plutôt vrai' } },
            { value: 'Column 6', text: { fr: 'Vrai' } },
            { value: 'Column 7', text: { fr: 'Très vrai' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "6 - Je m'entends bien avec les gens avec qui j'entre en contact.         ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "7 - Je me tiens pas mal à l'écart et je n'ai pas beaucoup de contacts sociaux.         ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "8 - Je me sens généralement libre d'exprimer mes idées et opinions.         ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '9 - Je considère les gens que je rencontre régulièrement comme des amis.         ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "10 - J'ai pu acquérir de nouvelles compétences intéressantes récemment.         ",
              },
            },
          ],
        },
      ],
      title: { fr: 'III. Motivation' },
    },
    {
      name: 'page11',
      elements: [
        {
          type: 'matrix',
          name: 'question33',
          title: { fr: 'Besoins psychologiques' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Absolument faux ' } },
            { value: 'Column 2', text: { fr: 'Faux' } },
            { value: 'Column 3', text: { fr: 'Plutôt faux' } },
            { value: 'Column 4', text: { fr: 'Ni vrai, ni faux' } },
            { value: 'Column 5', text: { fr: 'Plutôt vrai' } },
            { value: 'Column 6', text: { fr: 'Vrai' } },
            { value: 'Column 7', text: { fr: 'Très vrai' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "11 - Dans ma vie quotidienne, je dois souvent faire ce qu'on me dit.         ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: '12 - Les gens dans ma vie se soucient de moi.         ',
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "13 - La plupart des jours, ce que je fais me donne un sentiment d'accomplissement.         ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "14 - Les gens avec qui j'interagis sur une base quotidienne ont tendance à prendre mes sentiments en considération.         ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "15 - Dans ma vie, je n'ai pas beaucoup la chance de montrer ce dont je suis capable.         ",
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question34',
          title: { fr: 'Besoins psychologiques' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Absolument faux ' } },
            { value: 'Column 2', text: { fr: 'Faux' } },
            { value: 'Column 3', text: { fr: 'Plutôt faux' } },
            { value: 'Column 4', text: { fr: 'Ni vrai, ni faux' } },
            { value: 'Column 5', text: { fr: 'Plutôt vrai' } },
            { value: 'Column 6', text: { fr: 'Vrai' } },
            { value: 'Column 7', text: { fr: 'Très vrai' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "16 - Il n'y a pas beaucoup de gens avec qui je suis proche.         ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: '17 - Je sens que je peux être moi-même dans mes situations quotidiennes.         ',
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "18 - Les gens avec qui j'interagis régulièrement ne semblent pas m'aimer beaucoup.         ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '19 - Je me sens souvent pas très capable.         ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "20 - Il n'y a pas beaucoup d'opportunités pour moi de décider moi-même comment faire les choses dans ma vie quotidienne.         ",
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: '21 - Les gens sont généralement assez chaleureux envers moi.         ',
              },
            },
          ],
        },
      ],
      title: { fr: 'III. Motivation' },
    },
    {
      name: 'page12',
      elements: [
        {
          type: 'matrix',
          name: 'question35',
          title: { fr: 'Régulation des  émotions' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Presque jamais (0-10%) ' } },
            { value: 'Column 2', text: { fr: 'Quelques fois (11-35%) ' } },
            {
              value: 'Column 3',
              text: { fr: 'Environ la moitié du temps (36-65%)  ' },
            },
            {
              value: 'Column 4',
              text: { fr: 'La plupart du temps (66-90%) ' },
            },
            {
              value: 'Column 5',
              text: { fr: 'Presque toujours (91-100%)  ' },
            },
          ],
          rows: [
            {
              value: 'Row 1',
              text: { fr: "1 - J'identifie clairement mes sentiments    " },
            },
            {
              value: 'Row 2',
              text: {
                fr: '2 - Je porte attention à comment je me sens    ',
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: '3 - Je vis mes émotions comme étant accablantes et hors de contrôle    ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "4 - Je n'ai aucune idée de comment je me sens    ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "5 - J'ai de la difficulté à donner un sens à mes sentiments    ",
              },
            },
            {
              value: 'Row 6',
              text: { fr: '6 - Je suis attentif(ve) à mes sentiments    ' },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question36',
          title: { fr: 'Régulation des  émotions' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Presque jamais (0-10%) ' } },
            { value: 'Column 2', text: { fr: 'Quelques fois (11-35%) ' } },
            {
              value: 'Column 3',
              text: { fr: 'Environ la moitié du temps (36-65%)  ' },
            },
            {
              value: 'Column 4',
              text: { fr: 'La plupart du temps (66-90%) ' },
            },
            {
              value: 'Column 5',
              text: { fr: 'Presque toujours (91-100%)  ' },
            },
          ],
          rows: [
            {
              value: 'Row 1',
              text: { fr: '7 - Je sais exactement comment je me sens    ' },
            },
            {
              value: 'Row 2',
              text: { fr: '8 - Je me soucis de ce que je ressens    ' },
            },
            {
              value: 'Row 3',
              text: {
                fr: '9 - Je suis confus(e) sur ce que je ressens    ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '10 - Quand je suis perturbé(e), je tiens compte de mes émotions    ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '11 - Quand je suis perturbé(e), cela me rend en colère contre moi-même    ',
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: '12 - Quand je suis perturbé(e), je deviens embarrassé(e) de me sentir ainsi    ',
              },
            },
          ],
        },
      ],
      title: { fr: 'IV-Competences' },
    },
    {
      name: 'page13',
      elements: [
        {
          type: 'matrix',
          name: 'question37',
          title: { fr: 'Régulation des  émotions' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Presque jamais (0-10%) ' } },
            { value: 'Column 2', text: { fr: 'Quelques fois (11-35%) ' } },
            {
              value: 'Column 3',
              text: { fr: 'Environ la moitié du temps (36-65%)  ' },
            },
            {
              value: 'Column 4',
              text: { fr: 'La plupart du temps (66-90%)  ' },
            },
            {
              value: 'Column 5',
              text: { fr: 'Presque toujours (91-100%)  ' },
            },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "13 - Quand je suis perturbé(e), j'ai de la difficulté à terminer mon travail    ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: '14 - Quand je suis perturbé(e), je deviens hors de contrôle    ',
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: '15 - Quand je suis perturbé(e), je crois que je vais rester ainsi longtemps    ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '16 - Quand je suis perturbé(e), je crois que je vais finir par me sentir très déprimé(e )    ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '17 - Quand je suis perturbé(e), je crois que mes sentiments sont valides et importants    ',
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "18 - Quand je suis perturbé(e), j'ai de la difficulté à me concentrer sur d'autres choses    ",
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question38',
          title: { fr: 'Régulation des  émotions' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Presque jamais (0-10%) ' } },
            { value: 'Column 2', text: { fr: 'Quelques fois (11-35%) ' } },
            {
              value: 'Column 3',
              text: { fr: 'Environ la moitié du temps (36-65%)  ' },
            },
            {
              value: 'Column 4',
              text: { fr: 'La plupart du temps (66-90%)  ' },
            },
            {
              value: 'Column 5',
              text: { fr: 'Presque toujours (91-100%)  ' },
            },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '19 - Quand je suis perturbé(e), je me sens incontrôlable    ',
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "20 - Quand je suis perturbé(e), je peux encore faire ce que j'ai à faire    ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "21 - Quand je suis perturbé(e), j'ai honte de me sentir ainsi    ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '22 - Quand je suis perturbé(e), je sais que je peux trouver une façon pour me sentir mieux éventuellement    ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "23 - Quand je suis perturbé(e), je me sens comme si j'étais faible    ",
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: '24 - Quand je suis perturbé(e), je sens que je peux garder le contrôle de mes comportements    ',
              },
            },
          ],
        },
      ],
      title: { fr: 'IV-Competences' },
    },
    {
      name: 'page14',
      elements: [
        {
          type: 'matrix',
          name: 'question39',
          title: { fr: 'Régulation des  émotions' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Presque jamais (0-10%) ' } },
            { value: 'Column 2', text: { fr: 'Quelques fois (11-35%) ' } },
            {
              value: 'Column 3',
              text: { fr: 'Environ la moitié du temps (36-65%)  ' },
            },
            {
              value: 'Column 4',
              text: { fr: 'La plupart du temps (66-90%)  ' },
            },
            {
              value: 'Column 5',
              text: { fr: 'Presque toujours (91-100%)     ' },
            },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '25 - Quand je suis perturbé(e), je me sens coupable de me sentir de cette façon    ',
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "26 - Quand je suis perturbé(e), j'ai de la difficulté à me concentrer    ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "27 - Quand je suis perturbé(e), j'ai de la difficulté à contrôler mes comportements    ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "28 - Quand je suis perturbé(e), je crois qu'il n'y a rien que je puisse faire pour me sentir mieux    ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '29 - Quand je suis perturbé(e), cela me rend irrité(e) contre moi-même    ',
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: '30 - Quand je suis perturbé(e), je commence à me sentir très mal    ',
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question40',
          title: { fr: 'Régulation des  émotions' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Presque jamais (0-10%) ' } },
            { value: 'Column 2', text: { fr: 'Quelques fois (11-35%) ' } },
            {
              value: 'Column 3',
              text: { fr: 'Environ la moitié du temps (36-65%)  ' },
            },
            {
              value: 'Column 4',
              text: { fr: 'La plupart du temps (66-90%)  ' },
            },
            {
              value: 'Column 5',
              text: { fr: 'Presque toujours (91-100%)     ' },
            },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '31 - Quand je suis perturbé(e), je crois que me complaire dans cet état est tout ce que je peux faire    ',
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: '32 - Quand je suis perturbé(e), je perds le contrôle de mes comportements    ',
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: "33 - Quand je suis perturbé(e), j'ai de la difficulté à penser à quoique ce soit d'autre    ",
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "34 - Quand je suis perturbé(e), je prends le temps d'identifier ce que je ressens vraiment    ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '35 - Quand je suis perturbé(e), ça me prend beaucoup de temps pour me sentir mieux    ',
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: '36 - Quand je suis perturbé(e), mes émotions prennent toute la place    ',
              },
            },
          ],
        },
      ],
      title: { fr: 'IV-Competences' },
    },
    {
      name: 'page15',
      elements: [
        {
          type: 'checkbox',
          name: 'question41',
          title: {
            fr: '1- Une batte et une balle valent au total 1,10 euro (ou dollar). La  batte vaut 1,00 euro (ou dollar) de plus que la balle. Combien coûte la balle  ?question41',
          },
          hideNumber: true,
          choices: [
            { value: 'item1', text: { fr: '0,05 euro (ou dollar) ' } },
            { value: 'item2', text: { fr: '0,10 euro (ou dollar) ' } },
            { value: 'item3', text: { fr: '1 euro (ou dollar) ' } },
            { value: 'item4', text: { fr: '0,90 euro (ou dollar) ' } },
          ],
        },
        {
          type: 'checkbox',
          name: 'question42',
          title: {
            fr: '2- Si 5 machines produisent 5 articles en 5 minutes, combien de  temps faudrait-il à 100 machines pour en fabriquer 100 ?',
          },
          hideNumber: true,
          choices: [
            { value: 'item1', text: { fr: '5 minutes' } },
            { value: 'item2', text: { fr: '10 minutes' } },
            { value: 'item3', text: { fr: '100 minutes' } },
            { value: 'item4', text: { fr: '1 heure et 50 minutes ' } },
          ],
        },
        {
          type: 'checkbox',
          name: 'question43',
          title: {
            fr: "3- Un lac est recouvert de nénuphars dont l'étendue double chaque  jour. Si les nénuphars mettent 48 jours à couvrir toute la surface du lac, en  combien de temps en couvriraient-ils la moitié ?",
          },
          hideNumber: true,
          choices: [
            { value: 'item1', text: { fr: '12 jours' } },
            { value: 'item2', text: { fr: '24 jours' } },
            { value: 'item3', text: { fr: '47 jours' } },
            { value: 'item4', text: { fr: '48 jours' } },
          ],
        },
      ],
      title: { fr: 'IV-Competences' },
      description: { fr: 'Intuitif analytique ' },
    },
    {
      name: 'page16',
      elements: [
        {
          type: 'matrix',
          name: 'question44',
          title: { fr: 'Authentique' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Ne me décrit pas du tout  ' } },
            { value: 'Column 2', text: { fr: 'Me décrit très rarement  ' } },
            { value: 'Column 3', text: { fr: 'Me décrit rarement ' } },
            { value: 'Column 4', text: { fr: 'Me décrit parfois ' } },
            { value: 'Column 5', text: { fr: 'Me décrit souvent ' } },
            {
              value: 'Column 6',
              text: { fr: 'Me décrit presque toujours  ' },
            },
            { value: 'Column 7', text: { fr: 'Me décrit très bien ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: "1. Je pense qu'il est préférable d'être soi-même que d'être populaire.         ",
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "2. Je ne sais pas comment je me sens vraiment à l'intérieur.         ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: '3. Je suis fortement influencé(e) par les opinions des autres.         ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: "4. J'ai fais habituellement ce que d'autres personnes me disent de faire.         ",
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: "5. J'ai toujours l'impression que je dois faire ce que les autres s'attendent que je fasse.         ",
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: "6. Les autres m'influencent grandement.         ",
              },
            },
          ],
        },
        {
          type: 'matrix',
          name: 'question45',
          title: { fr: 'Authentique' },
          hideNumber: true,
          columns: [
            { value: 'Column 1', text: { fr: 'Ne me décrit pas du tout  ' } },
            { value: 'Column 2', text: { fr: 'Me décrit très rarement  ' } },
            { value: 'Column 3', text: { fr: 'Me décrit rarement ' } },
            { value: 'Column 4', text: { fr: 'Me décrit parfois ' } },
            { value: 'Column 5', text: { fr: 'Me décrit souvent ' } },
            {
              value: 'Column 6',
              text: { fr: 'Me décrit presque toujours  ' },
            },
            { value: 'Column 7', text: { fr: 'Me décrit très bien ' } },
          ],
          rows: [
            {
              value: 'Row 1',
              text: {
                fr: '7. Je me sens comme si je ne me connais pas très bien.         ',
              },
            },
            {
              value: 'Row 2',
              text: {
                fr: "8. Je m'en tiens toujours à ce que je crois.         ",
              },
            },
            {
              value: 'Row 3',
              text: {
                fr: '9. Je suis fidèle à moi-même dans la plupart des situations.         ',
              },
            },
            {
              value: 'Row 4',
              text: {
                fr: '10. Je me sens déconnecté(e) du "vrai moi".         ',
              },
            },
            {
              value: 'Row 5',
              text: {
                fr: '11. Je vis en accord avec mes valeurs et mes croyances.         ',
              },
            },
            {
              value: 'Row 6',
              text: {
                fr: '12. Je me sens aliéné(e) (éloigné, étranger) de moi-même         ',
              },
            },
          ],
        },
      ],
      title: { fr: 'IV-Competences' },
    },
    {
      name: 'page17',
      elements: [
        {
          type: 'comment',
          name: 'question46',
          title: { fr: '1. Finalité et objectifs' },
          hideNumber: true,
          placeholder: {
            fr: 'Votre envie professionnelle (Qu’est-ce que vous voulez pour votre avenir ? Comment vous voyez-vous d’ici trois ans ?)        ',
          },
        },
        {
          type: 'comment',
          name: 'question47',
          title: { fr: 'Vos objectifs' },
          hideNumber: true,
          placeholder: {
            fr: "(Quels sont vos objectifs professionnels à plus court terme ? Comment vous voyez-vous d'ici 6 mois ?) ",
          },
        },
        {
          type: 'comment',
          name: 'question48',
          title: { fr: '2. Moyens et tableau de bord' },
          hideNumber: true,
          placeholder: {
            fr: 'Moyens et ressources (De quels moyens disposez-vous ? Quelles sont vos ressources financières, matérielles, humaines ?)        ',
          },
        },
        {
          type: 'comment',
          name: 'question49',
          title: { fr: 'Indicateurs' },
          hideNumber: true,
          placeholder: {
            fr: ' (Que vous fixez-vous comme cap à atteindre ? Quel seuil vous fixez-vous ?)',
          },
        },
        {
          type: 'comment',
          name: 'question50',
          title: { fr: "3. Plan d'action" },
          hideNumber: true,
          placeholder: {
            fr: "Tâches à effectuer (Quels sont les grandes tâches à effectuer ? Quel est votre plan d'action ?)       ",
          },
        },
        {
          type: 'comment',
          name: 'question51',
          title: { fr: 'Acteurs' },
          hideNumber: true,
          placeholder: {
            fr: ' (Qui sont les acteurs impliqués dans ce projet ? Quelles seront les personnes impactées par ce projet ?) ',
          },
        },
      ],
      title: { fr: 'V-Action' },
    },
  ],
}
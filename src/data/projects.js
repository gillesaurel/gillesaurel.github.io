export const projects = [
  {
    id: 'expense-app',
    visual: 'phone-chart',
    title: 'ExpenseApp',
    kind: { fr: 'PROJET PERSONNEL', en: 'PERSONAL PROJECT' },
    description: {
      fr: "Application Android de suivi de dépenses personnelles, écrite en Kotlin avec une architecture MVP. Base de données Room gérée par coroutines, thème sombre soigné, export CSV/PDF, rappels via AlarmManager, interface bilingue FR/EN, onboarding en ViewPager2, widget d'accueil, sauvegarde/restauration et un chatbot IA (Gemini) intégré pour répondre aux questions sur ses finances.",
      en: "Android app for tracking personal expenses, written in Kotlin with an MVP architecture. Room database managed with coroutines, a polished dark theme, CSV/PDF export, reminders via AlarmManager, a bilingual FR/EN interface, ViewPager2 onboarding, a home-screen widget, backup/restore, and a built-in AI chatbot (Gemini) that answers questions about your finances.",
    },
    tags: ['Kotlin', 'MVP', 'Room', 'Coroutines', 'Gemini API'],
    links: [{ label: { fr: 'Code sur GitHub →', en: 'Code on GitHub →' }, href: 'https://github.com/gillesaurel/ExpenseApp' }],
  },
  {
    id: 'recettes-et-frigos',
    visual: 'phone-recipe',
    title: 'Recettes et Frigos',
    kind: { fr: "PROJET D'ÉQUIPE — COURS 420-G25-RO", en: 'TEAM PROJECT — COURSE 420-G25-RO' },
    description: {
      fr: "Application Android collaborative en Kotlin (MVP, SQLite) pour organiser ses recettes selon le contenu du frigo. J'ai pris en charge l'écran de détail d'une recette, l'affichage des valeurs nutritionnelles via l'API Open Food Facts (Retrofit + coroutines) et l'écran d'ajout/modification. Travail en équipe sur GitLab avec branches, rebase et merge requests.",
      en: "Collaborative Android app in Kotlin (MVP, SQLite) for organizing recipes based on what's in the fridge. I took charge of the recipe detail screen, displaying nutritional values via the Open Food Facts API (Retrofit + coroutines), and the add/edit screen. Team workflow on GitLab with branches, rebasing, and merge requests.",
    },
    tags: ['Kotlin', 'SQLite', 'Retrofit', 'Open Food Facts API', 'GitLab'],
    links: [{ label: { fr: 'Code sur GitHub →', en: 'Code on GitHub →' }, href: 'https://github.com/gillesaurel/RecettesEtFrigos' }],
  },
  {
    id: 'surviving-the-savannah',
    visual: 'window-game',
    title: 'Surviving the Savannah',
    kind: { fr: "PROJET D'ÉQUIPE — COURS 420-G56-RO", en: 'TEAM PROJECT — COURSE 420-G56-RO' },
    description: {
      fr: "Jeu de survie 2D+3D développé en équipe sous Unity/C# : survivre dans une jungle infestée de zombies, en éliminant 100 zombies en 5 minutes (mode 2D) ou en atteignant une zone de victoire avec au moins 10 éliminations (mode 3D). J'ai écrit les scripts de génération d'interface au moment de l'exécution et une partie de la logique de jeu, intégré le mini-jeu 2D façon « Vampire Survivors » d'une coéquipière dans le projet 3D partagé, monté la page itch.io avec un thème CSS personnalisé, et réglé plusieurs bugs d'équipe (cache iCloud corrompu, conflits de nommage sur GameManager, pipelines de rendu incompatibles).",
      en: "2D+3D survival game built as a team in Unity/C#: survive in a zombie-infested jungle by eliminating 100 zombies in 5 minutes (2D mode) or reaching a victory zone with at least 10 kills (3D mode). I wrote the runtime UI-generation scripts and part of the gameplay logic, integrated a teammate's \"Vampire Survivors\"-style 2D minigame into the shared 3D project, set up the itch.io page with a custom CSS theme, and fixed several team-wide bugs (a corrupted iCloud cache, GameManager naming conflicts, incompatible render pipelines).",
    },
    tags: ['Unity', 'C#', 'Game design', 'itch.io'],
    links: [
      { label: { fr: 'Jouer sur itch.io →', en: 'Play on itch.io →' }, href: 'https://thebenth4m.itch.io/surviving-the-savannah' },
      { label: { fr: 'Code 3D →', en: 'Code 3D →' }, href: 'https://github.com/gillesaurel/SurvivingTheSavannah-3D' },
      { label: { fr: 'Code 2D →', en: 'Code 2D →' }, href: 'https://github.com/gillesaurel/SurvivingTheSavannah-2D' },
    ],
  },
  {
    id: 'nutriplus',
    visual: 'window-dashboard',
    title: 'NutriPlus',
    kind: { fr: "PROJET D'ÉQUIPE", en: 'TEAM PROJECT' },
    description: {
      fr: "Application web de suivi nutritionnel en PHP/MySQL (architecture DAO / contrôleurs / vues) : entrer ses repas, fixer des objectifs (calories, protéines, ou manger un fruit ou légume par jour) et consulter des statistiques personnelles. Arrivé en cours de projet après un changement d'équipe approuvé par le professeur, j'ai ajouté l'affichage du mot de passe (bouton œil) et la validation des champs obligatoires sur les pages d'inscription et de compte.",
      en: "Nutrition-tracking web app in PHP/MySQL (DAO / controllers / views architecture): log meals, set goals (calories, protein, or eating a fruit or vegetable each day), and view personal statistics. I joined mid-project after a team change approved by the professor, and added a show-password toggle (eye button) and required-field validation on the sign-up and account pages.",
    },
    tags: ['PHP', 'MySQL', 'JavaScript', 'MVC'],
    links: [],
  },
  {
    id: 'crm-manara',
    visual: 'window-admin',
    title: 'CRM-Manara',
    kind: { fr: "PROJET D'ÉQUIPE — 4 MEMBRES", en: 'TEAM PROJECT — 4 MEMBERS' },
    description: {
      fr: "Portail web pour un organisme communautaire, en équipe de 4 : Angular au frontend, Spring Boot/Java et MySQL au backend — gestion des parents, des enfants, des activités et des inscriptions. J'ai pris en charge la partie administration : contrôleur et service Spring pour la gestion des activités et des utilisateurs, composants Angular associés, et l'envoi de courriels automatisés.",
      en: "Web portal for a community organization, built in a team of 4: Angular on the frontend, Spring Boot/Java and MySQL on the backend — managing parents, children, activities, and registrations. I handled the admin side: a Spring controller and service for managing activities and users, the associated Angular components, and automated email sending.",
    },
    tags: ['Angular', 'Spring Boot', 'Java', 'MySQL'],
    links: [{ label: { fr: 'Code sur GitHub →', en: 'Code on GitHub →' }, href: 'https://github.com/gillesaurel/CRM-Manara' }],
  },
  {
    id: 'guichet-automatique',
    visual: 'window-atm',
    title: 'Guichet Automatique',
    kind: { fr: "PROJET D'ÉQUIPE — 3 MEMBRES", en: 'TEAM PROJECT — 3 MEMBERS' },
    description: {
      fr: "Simulateur de guichet automatique bancaire en Java/JavaFX : comptes chèque, épargne et hypothécaire, historique de transactions, interface administrateur pour créer et bloquer des clients. J'ai écrit les classes du domaine (Banque, Marge) et corrigé la logique de blocage des clients ainsi que l'ajustement du solde de la banque lors des retraits.",
      en: "Bank ATM simulator in Java/JavaFX: checking, savings, and mortgage accounts, transaction history, and an admin interface to create and block customers. I wrote the domain classes (Banque, Marge) and fixed the customer-blocking logic as well as the bank balance adjustment on withdrawals.",
    },
    tags: ['Java', 'JavaFX', 'POO'],
    links: [{ label: { fr: 'Code sur GitHub →', en: 'Code on GitHub →' }, href: 'https://github.com/gillesaurel/GuichetAutomatique' }],
  },
]

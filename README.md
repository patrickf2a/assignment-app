## Projet : Assignment Application

Lien git du backend : https://github.com/patrickf2a/Projet-Angular

Lien du render : https://fernandes-brandi-application-front.onrender.com

## Auteur : FERNANDES DE FARIA Patrick et BRANDI Julien

## Conseils d'utilisation :

Apercu de l'application apres lancement :

- La page d'accueil s'affiche avec une card de presentation .
- Une toolbar est presente avec plusieurs boutons permettent la navigation entre les component : 
  - Le boutton "Home" qui renvoi vers la page principal.
  - Le boutton "Peupler la base " qui permet de peupler la base de données avec des assignments.
  - Le boutton "Login" qui permet de se connecter a un compte utilisateur.
  
- Pour commncer la navigation il faut cliquer sur le bouton home qui renvoi vers la page contenant la liste des assignments.
- Sur cette page on peut voir la liste des assignments dans une table avec leur titre, la matiere avec la photo de la matiere,la photo du professeur en charge de cette matiere, la date de rendu et la note et une remarque.
- Un Bouton "Ajouter un devoir" permet d'ajouter un devoir a l'aide d'un formulaire stepper.
- Un bouton " filtres" qui permet de selectionner les assignments rendus ou non rendus.
- Un champ de recherche permet de rechercher un assignment par son titre.
- Un bouton "Premiere page" qui permet de revenir a la premiere page de la liste des assignments.
- Un bouton "Derniere page" qui permet d'aller a la derniere page de la liste des assignments.
- Il est également possible de choisir le nombre d'assignments par page.
- Des boutons ">" et "<" permettent de naviguer entre les pages.


## Gestion de la connexion 

Pour la connexion nous avons utilisé une collection dans Mongodb qui contient les utilisateurs avec leur username, leur password et leur role.
Pour se connecter il faut cliquer sur le bouton "login" en haut a droite de la page.
Une fois sur la page de connexion, un formulaire de connexion apparait il faut rentrer les identifiants suivant :
  - Nom d'utilisateur : Par exemple (admin ou user)
  - Mot de passe : pass

Il suffit de cliquer sur le bouton "Se connecter" pour se connecter.
Si les identifiants sont incorrects un message d'erreur apparait.

Il est également possible de se créér un compte si ce n'est pas deja fait en cliquant sur le bouton "Créer un compte" en bas du formulaire de connexion.
Une fois sur la page de création de compte il faut rentrer les informations suivantes :

  - Nom d'utilisateur : Par exemple (admin ou user)
  - Mot de passe : pass
  - Il suffit de cliquer sur la checkbox si on veut etre admin ou non.

L'utilisateur est libre de saisir les informations qu'il souhaite.

Une fois connecter l'utilisateur peut se deconnecter a l'aide du bouton "logout" qui apparaitra en haut à droite de la page. Il sera redirigé vers la page d'accueil.


## Condition pour acceder au contenue de l'application

- Si l'utilisateur est connecté en tant que admin il peut :
  - Voir la liste des assignments
  - Voir les détails d'un assignment en cliquant dessus
  - Ajouter un assignment
  - Modifier un assignment
  - Supprimer un assignment
  - Se déconnecter

- Si l'utilisateur est connecté en tant que user il peut :
  - Voir la liste des assignments
  - Voir les détails d'un assignment en cliquant dessus
  - Ajouter un assignment, 
  - Modifier un assignment
  - Se déconnecter

Pour pouvoir acceder au contenue des assignments il faut etre connecté.

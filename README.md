# Assignment Application

## Liens du Projet

- Backend GitHub: https://github.com/patrickf2a/Projet-Angular
- Frontend en ligne: https://fernandes-brandi-application-front.onrender.com

## Auteurs 

FERNANDES DE FARIA Patrick et BRANDI Julien

## Description du projet

Ce projet est une application web permettant de gérer des devoirs d'étudiants. Elle permet de créer, modifier, supprimer et lister des devoirs. Elle permet également de se connecter à un compte utilisateur.

## Video de Démonstration : 



https://github.com/patrickf2a/assignment-app/assets/47286268/44f23385-af03-4ab2-bc8e-d81eae468ddc



## Guide d'utilisation :

## Apercu de l'application apres lancement :

- Page d'Accueil : Affichage d'une card de présentation.
- Toolbar : Navigation facilitée grâce à plusieurs boutons :
  Home : Retour à la page principale.
  Peupler la Base : Peuplement de la base de données avec des assignments.
  Login : Connexion au compte utilisateur.

- Une toolbar est presente avec plusieurs boutons permettent la navigation entre les component : 
  - Le boutton "Home" qui renvoi vers la page principal.
  - Le boutton "Peupler la base " qui permet de peupler la base de données avec des assignments.
  - Le boutton "Login" qui permet de se connecter a un compte utilisateur.

Remarques : quand on veut peupler la base l'hebergeur render restreint le peuplement de la base alors que notre fichier data.ts contient bien 1000 assignments.Il ajoute environ 500 voir des fois les 1000. 

## Navigation entre les components :

- Page Principale : Liste des assignments accessible via le bouton "Home".
- Liste des Assignments : Affichage dans une table comprenant le titre, la matière (avec photo), la photo du professeur, la date de rendu, la note et les remarques.

## Ajout et Gestion : 

- Un Bouton "Ajouter un devoir" permet d'ajouter un devoir a l'aide d'un formulaire stepper.
- Un bouton " filtres" qui permet de selectionner les assignments rendus ou non rendus.
- Un champ de recherche permet de rechercher un assignment par son titre.
- Un bouton "Premiere page" qui permet de revenir à la premiere page de la liste des assignments.
- Un bouton "Derniere page" qui permet d'aller à la derniere page de la liste des assignments.
- Il est également possible de choisir le nombre d'assignments par page.
- Des boutons ">" et "<" permettent de naviguer entre les pages.


## Connexion et Gestion des Utilisateurs

### Connexion

- Utilisation d'une collection MongoDB pour les identifiants utilisateurs.
- Formulaire de connexion accessible via le bouton "Login".
- Identifiants requis : Nom d'utilisateur (ex. admin ou user) et mot de passe (ex. pass).
- Gestion des erreurs d'identifiants.

### Création de compte

- Option de création de compte disponible.
- Information à fournir : Nom d'utilisateur, mot de passe et choix du rôle (admin ou non) en cliquant sur la checkbox.
- Pour etre admin il faut valider la chexbox.
- L'utilisateur est libre de saisir les informations qu'il souhaite.

### Déconnexion

- Option disponible une fois connecté à l'aide du bouton "logout" qui apparaitra en haut à droite de la page et redirige vers la page principal.


## Accès et Permissions

### Admin

- Si l'utilisateur est connecté en tant que admin il peut :
  - Voir la liste des assignments
  - Voir les détails d'un assignment en cliquant dessus
  - Ajouter un assignment
  - Modifier un assignment
  - Supprimer un assignment
  - Se déconnecter
  
### User

- Si l'utilisateur est connecté en tant que user il peut :
  - Voir la liste des assignments
  - Voir les détails d'un assignment en cliquant dessus
  - Ajouter un assignment, 
  - Modifier un assignment
  - Se déconnecter

Remarque : La connexion est requise pour accéder au contenu des assignments.


## Détails d'un assignment

- Affichage des détails d'un assignment en cliquant sur celui-ci dans la liste des assignments.
- Affichage du titre, de la matière, de la photo du professeur, de la date de rendu, de la note et des remarques.
- Affichage de la note que si le devoir est rendu.
- Possibilité de modifier les informations de l'assignment en cliquant sur le bouton "Modifier".
- Possibilité de supprimer l'assignment en cliquant sur le bouton "Supprimer".
- Possibilité de marquer le devoir comme rendu en cliquant sur le bouton "Devoir rendu".
- Si devoir rendu possibilité de marquer le devoir comme non rendu en cliquant sur le bouton "Supprimer rendu".

## Ajout d'un assignment

- Formulaire Stepper de création d'un assignment accessible via le bouton "Ajouter un devoir".
- Informations à fournir : Nom du devoir,Nom de l'élève, matière, photo du professeur, date de rendu, note et remarques.
- Possibilité de choisir une date de rendu grâce à un calendrier.


## Modification d'un assignment

- Formulaire de modification d'un assignment accessible via le bouton "Modifier" dans les détails d'un assignment.
- Informations à fournir : Nom du devoir,Nom de l'élève, matière, photo du professeur, date de rendu, note et remarques.
- Possibilité de choisir une date de rendu grâce à un calendrier.


## Suppression d'un assignment

- Bouton de suppression d'un assignment accessible via le bouton "Supprimer" dans les détails d'un assignment.
- Confirmation de la suppression de l'assignment(via un log sur la console).
- Redirection vers la liste des assignments.


# Angular : rendu n°2
Repository où déposer le projet n°2 Angular

### Nom[1] : FERNANDES DE FARIA

### Prénom[2] :Patrick

## A faire[3]
- [x] Suivre le cours jusqu'à la page 180
- [x] Intégrer toolbar et navbar du rendu n°1
- [x] Identification par **login/password**
  - ajouter un tableau de login/password/role (avec rôle qui est soit **user** soit **admin**) dans le service d'authentification
  - modifier le code pour avoir `isLogged()` **ET** `isAdmin()` au lieu de juste `isAdmin()`
- [x] Au lieu du slider `LogIn`, ajouter un bouton connecter (avec une *mat-icon* adaptée) qui amène à un composant avec un formulaire de connexion
- [x] Gestion des droits :
  - L'admin peut éditer et effacer les assignment
  - Le user peut voir le détail des assignment
  - Si on n'est pas logué on ne peut ni voir le détail, ni éditer


[^1]: à remplir
[^2]: à remplir
[^3]: vous pouvez cocher les tâches qui ont été faites en utilisant la syntaxe `[x]` dans le markdown



Conseils d'utilisation : 
- Pour lancer le projet, il faut lancer la commande `ng serve` dans le terminal
- Ensuite quand l'application est lancer pour pourvoir voir la liste des devoirs c'est depuis la sidenav en cliquant sur "Liste des devoirs"
- Une fois dessus quand on clique sur un devoir on ne peut voir les détails du devoir car on est n'est pas connecter.
- Pour se connecter il faut cliquer sur le bouton "loggin" en haut à droite de la page.
- Une fois sur la page de connexion il faut rentrer les identifiants suivant : 
  - username : admin ou user
  - password : pass

- Une fois connecter on peut voir les détails du devoir et on peut aussi modifier ou supprimer le devoir si on est admin.
- Si on est pas connecter en tant que admin mais en tant que user on ne peut pas modifier ou supprimer le devoir, on ne peut que consulter les details du devoir et cliquer sur devoir rendu ( qui renvoi le devoir surligne en jaune) ou alors supprimer le rendu si on le souhaite qui rend le devoir à son état d'origine.
- Lorsqu'on souhaite changer d'utilisateur il faut cliquer sur le bouton "logout" en haut à droite de la page.Ce qui va reset l'utilisateur et on pourra a nouveau se connecter.

- Pour ajouter un devoir il faut également etre connecter en tant que admin.
- Pour revenir à la page d'accueil il faut cliquer sur le titre "Mon Assignment app" en haur de la page.

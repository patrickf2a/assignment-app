import {Matiere} from "./Matiere.model";

export class Assignment {
  _id?: string;
  id!: number;
  nom!: string;
  dateDeRendu!: Date;
  rendu!: boolean;
  auteur!: string; // Nom de l'élève
  matiere!: string; // Matière (Base de données, Technologies Web, Grails, etc.)
  photomatiere!: string; // URL de l'image associée à la matière
  photoprof!: string; // URL de la photo du prof
  note!: number; // Note sur 20
  remarques!: string; // Remarques sur l'assignment
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Assignment} from "../assignments/assignment.model";
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private logginService:LoggingService) { }

  assignments : Assignment[] = [
/*
        {
          nom:this.nomDevoir,
          dateDeRendu: new Date(),
          rendu: false
        },

*/
        {
          nom: "TP2 sur Angular, un gestionnaire de devoirs",
          dateDeRendu: new Date("2023-12-17"),
          rendu: false
        },
        {
          nom: "TP3 sur Angular, utilisation du rooter et de web services",
          dateDeRendu: new Date("2023-10-02"),
          rendu: true
        },
  ]

  getAssignments():Observable<Assignment[]>{
    return of (this.assignments);
  }

  addAssignment(assignment: Assignment):Observable<string>{
    this.assignments.push(assignment);
    this.logginService.log(assignment.nom, "ajouté");

    return of("Assignment ajouté avec succès");
  }

  updateAssignment(assignment: Assignment):Observable<string>{
    this.assignments.forEach((item, index) => {
      if(item === assignment){
        this.assignments[index] = assignment;
      }
    });
    return of("Assignment modifié avec succès");
  }

  updateRendu(assignment: Assignment):Observable<string>{
    this.assignments.forEach((item, index) => {
      if(item === assignment){
        this.assignments[index] = assignment;
      }
    });
    return of("Rendu de l'Assignment modifié avec succès");
  }


  deleteAssignment(assignment: Assignment):Observable<string>{
    this.assignments.forEach((item, index) => {
      if(item === assignment) this.assignments.splice(index,1);
    });
    return of("Assignment supprimé avec succès");
  }
}

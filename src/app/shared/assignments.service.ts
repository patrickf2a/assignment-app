import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Assignment} from "../assignments/assignment.model";
import {LoggingService} from "./logging.service";
import {Router} from "@angular/router";

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
          id:1,
          nom: "TP2 sur Angular",
          dateDeRendu: new Date("2023-12-17"),
          rendu: false
        },
        {
          id:2,
          nom: "TP3 de JAVA",
          dateDeRendu: new Date("2023-10-02"),
          rendu: true
        }
  ];

  getNewId():number{
    return this.assignments.length+1;
  }

  getAssignments(): Observable<Assignment[]>{
    return of(this.assignments);
  }

  getAssignment(id : any): Observable<Assignment | undefined >{
   const a:Assignment | undefined = this.assignments.find( assignment => assignment.id === id);
   return of(a);
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

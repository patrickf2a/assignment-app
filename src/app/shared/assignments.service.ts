import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Assignment} from "../assignments/assignment.model";
import {LoggingService} from "./logging.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private logginService:LoggingService,
              private http:HttpClient) { }

  assignments : Assignment[] = [];
/*
        {
          nom:this.nomDevoir,
          dateDeRendu: new Date(),
          rendu: false
        },


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
*/

  getNewId():number{
    return this.assignments.length+1;
  }

  url= "http://localhost:8010/api/assignments";
  getAssignments(): Observable<Assignment[]>{

    return this.http.get<Assignment[]>(this.url);
    //return of(this.assignments);
  }

  getAssignment(id : number): Observable<Assignment | undefined >{
    /*
   const a:Assignment | undefined = this.assignments.find( assignment => assignment.id === id);
   return of(a);*/
    return this.http.get<Assignment>(this.url+"/"+id);
  }

  addAssignment(assignment: Assignment):Observable<any>{
    //this.assignments.push(assignment);
    //this.logginService.log(assignment.nom, "ajouté");

    //return of("Assignment ajouté avec succès");
    return this.http.post<Assignment>(this.url,assignment,this.httpOptions);
  }

  updateAssignment(assignment: Assignment):Observable<any>{
    /*
    this.assignments.forEach((item, index) => {
      if(item === assignment){
        this.assignments[index] = assignment;
      }
    });

     */
    return this.http.put<Assignment>(this.url,assignment);
    return of("Assignment modifié avec succès");
  }


  updateRendu(assignment: Assignment):Observable<any>{
    /*
    this.assignments.forEach((item, index) => {
      if(item === assignment){
        this.assignments[index] = assignment;
      }
    });
    */
    return this.http.put<Assignment>(this.url,assignment);
    return of("Rendu de l'Assignment modifié avec succès");
  }


  deleteAssignment(assignment: Assignment):Observable<any>{
    /*
    this.assignments.forEach((item, index) => {
      if(item === assignment) this.assignments.splice(index,1);
    });
    */
    return this.http.delete(this.url + "/" + assignment._id);
    //
    return of("Assignment supprimé avec succès");
  }

}

import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import {Assignment} from "../assignments/assignment.model";
import {LoggingService} from "./logging.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {bdInitialAssignments} from "./data";

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

  getNewId():number{
    return this.assignments.length+1;
  }

  url= "http://localhost:8010/api/assignments";

  getAssignments(): Observable<Assignment[]>{

    return this.http.get<Assignment[]>(this.url);
  }

  getAssignmentsPagines(page:number,limit:number): Observable<any>{
    return this.http.get<any>(this.url+"?page="+page+"&limit="+limit);
  }

  getAssignment(id : number): Observable<Assignment | undefined >{
    return this.http.get<Assignment>(this.url+"/"+id);
  }

  addAssignment(assignment: Assignment):Observable<any>{
    return this.http.post<Assignment>(this.url,assignment,this.httpOptions);
  }

  updateAssignment(assignment: Assignment):Observable<any>{
    return this.http.put<Assignment>(this.url,assignment);
    return of("Assignment modifié avec succès");
  }


  updateRendu(assignment: Assignment):Observable<any>{
    return this.http.put<Assignment>(this.url,assignment);
    return of("Rendu de l'Assignment modifié avec succès");
  }


  deleteAssignment(assignment: Assignment):Observable<any>{
    return this.http.delete(this.url + "/" + assignment._id);
    return of("Assignment supprimé avec succès");
  }

  peuplerBD():Observable<any>{
    let appelsVersAddAssignment:Observable<any>[] = [];

    bdInitialAssignments.forEach(a => {
      const nouvelAssignment = new Assignment();
      nouvelAssignment.id = a.id;
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
      nouvelAssignment.rendu = a.rendu;

      appelsVersAddAssignment.push(this.addAssignment(nouvelAssignment))
    });
    console.log("###Tous les Assingnement sont ajouter !!!")
    return forkJoin(appelsVersAddAssignment);
  }
}

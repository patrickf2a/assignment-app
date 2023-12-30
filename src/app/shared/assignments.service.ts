import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import {Assignment} from "../assignments/assignment.model";
import {LoggingService} from "./logging.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {bdInitialAssignments} from "./data";
import {Matiere} from "../assignments/Matiere.model";
import {bdInitialMatieres} from "./data_matiere";
import {User} from "../assignments/User.model";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  subjectList: Matiere[] = [];

  constructor(private logginService:LoggingService,
              private http:HttpClient) { }

  assignments : Assignment[] = [];

  getNewId():number{
    return this.assignments.length+1;
  }
  user=User;

  url= "http://localhost:8010/api/assignments";
  url2= "http://localhost:8010/api/user";

  getAssignments(): Observable<Assignment[]>{

    return this.http.get<Assignment[]>(this.url);
  }

  getAssignmentsPagines(page:number,limit:number,search?:string): Observable<any>{
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
      nouvelAssignment.auteur=a.auteur;
      nouvelAssignment.remarques=a.remarque;
      nouvelAssignment.note=a.notematiere;
      const randomElement =this.getRandomElement(bdInitialMatieres);
      nouvelAssignment.matiere=randomElement.nom;
      nouvelAssignment.photoprof=randomElement.photoprof;
      nouvelAssignment.photomatiere=randomElement.photomatiere;


      appelsVersAddAssignment.push(this.addAssignment(nouvelAssignment))
    });
    console.log("###Tous les Assingnement sont ajouter !!!")
    return forkJoin(appelsVersAddAssignment);
  }

  getmatieres():Observable<Matiere[]>{
    this.subjectList=bdInitialMatieres;
    return of(bdInitialMatieres);
  }
  getmateireById(id:number):Observable<Matiere|undefined>{
    return of(this.subjectList.find(a=>a.id === id));
  }
  getmatiereByName(name:string):Observable<Matiere|undefined>{
    return of(this.subjectList.find((a)=>{a.nom == name}));
  }
  getRandomElement(array: any[]): any {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  createUser(user : User): Observable<any> {
    return this.http.post<User>(this.url2,user,this.httpOptions);
    //return of("User crée avec succès");
  }



}

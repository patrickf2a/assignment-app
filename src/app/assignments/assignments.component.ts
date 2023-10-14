import {Component, OnInit} from '@angular/core';
import {Assignment} from './assignment.model';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments !";
  ajoutActive=true;
  //form
  nomDevoir = "";
  // date a la quel on le rend
  dateRendu?:Date;

  assignementSelectionne : Assignment | undefined;

  assignments : Assignment[] = [

    {
      nom:this.nomDevoir,
      dateDeRendu: new Date("2023-03-17"),
      rendu: false
    },


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
  constructor(){

  }
  ngOnInit(): void{

  }

  onSubmit() {
    if((!this.dateRendu) || (!this.nomDevoir)) return;

    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;
    //console.log(newAssignment);
    this.assignments.push(newAssignment);

    console.log(newAssignment);
  }

  assignmentClique(assignment: Assignment){
    this.assignementSelectionne = assignment;
  }


}

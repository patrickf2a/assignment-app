import {Component, OnInit} from '@angular/core';
import {Assignment} from './assignment.model';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments !";
  FormVisible=false;

  assignementSelectionne : Assignment | undefined;

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


  constructor(){

  }
  ngOnInit(): void{

  }

  assignmentClique(assignment: Assignment){
    this.assignementSelectionne = assignment;
  }
  onAddAssignmentBtnClick(){
    this.FormVisible=true;
  }
  onNouvelAssignment(event: Assignment){
    this.assignments.push(event);
    this.FormVisible=false;// on veut voir la liste avec le nouvel assignment
  }

}

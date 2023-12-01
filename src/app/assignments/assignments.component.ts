import {Component, OnInit} from '@angular/core';
import {Assignment} from './assignment.model';
import {AssignmentsService} from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})

export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments !";
  FormVisible=false;

  assignementSelectionne : Assignment | undefined;

  assignments: Assignment[]= [];

  //pour la pagination
  page:number=1;
  limit:number=10;
  totalDocs!:number;
  totalPages!:number;
  hasPrevPage!:boolean;
  hasNextPage!:boolean;
  nextPage!:number;
  prevPage!:number;



  constructor(private assignmentService: AssignmentsService){
  }

  ngOnInit(): void{
    //this.assignments= this.assignmentService.getAssignments();
    //this.getAssignments();
    //pour gerer la pagination
    this.assignmentService.getAssignmentsPagines(this.page,this.limit).
    subscribe((data)=>{
      this.assignments=data.docs;
      this.totalDocs=data.totalDocs;
      this.totalPages=data.totalPages;
      this.hasPrevPage=data.hasPrevPage;
      this.hasNextPage=data.hasNextPage;
      this.nextPage=data.nextPage;
      this.prevPage=data.prevPage;
      console.log("les assignments sont recu ");
    });
  }

  assignmentClique(assignment: Assignment){
    this.assignementSelectionne = assignment;
    console.log("L'assignement selectionné est "+this.assignementSelectionne);
  }

  onAddAssignmentBtnClick(){
   // this.FormVisible=true;
  }


  /*
  onNouvelAssignment(event: Assignment){
    //this.assignments.push(event);
    this.assignmentService.addAssignment(event).subscribe(message => console.log(message));
    this.FormVisible=false;// on veut voir la liste avec le nouvel assignment
  }
*/
  OnRenduAssignmentDelete(event : any){
    // permetbde supprimer le rendu et non l'assignment
    this.assignments.forEach((item, index) => {
      if(item === event) this.assignments.splice(index,1);
    });
    this.assignementSelectionne = undefined;
  }


  getAssignments() {
    this.assignmentService.getAssignments().
    subscribe(assignments => {
      this.assignments = assignments;
    }
    );
    console.log("on demande les assignments au service");

  }


}

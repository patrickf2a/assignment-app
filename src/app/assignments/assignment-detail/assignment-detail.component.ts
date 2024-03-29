import { Component,/*Input*/OnInit,EventEmitter,Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import {ActivatedRoute,Router} from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';



@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  /*@Input()*/
  assignmentTransmis?: Assignment ;
  @Output() assignmentRendu=new EventEmitter<Assignment>();
  @Output() deleteAssignment=new EventEmitter<Assignment>();
  constructor( private assignmentService:AssignmentsService,
               private route:ActivatedRoute,
               private router:Router,
               public authService:AuthService) { }


  ngOnInit() {

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.getAssignment();
    }
  }


  getAssignment() {
    const id:number = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id)
      .subscribe(assignment => {
        this.assignmentTransmis = assignment;
      });
  }

  OnAssignmentRendu(){
  // Vérifie que l'objet assignmentTransmis est initialisé avant d'accéder à sa propriété rendu
  if (this.assignmentTransmis) {
    this.assignmentTransmis.rendu = true;
    this.assignmentService.updateAssignment(this.assignmentTransmis)
    .subscribe(reponse => {
      console.log("Reponse du serveur : " + reponse.message)
      this.router.navigate(["/home"]);
    });
    //this.assignmentTransmis = undefined;
  }
}

  supprimerRenduAssignment(){
    // permet de supprimer le rendu et non l'assignment
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = false;
      this.assignmentService.updateRendu(this.assignmentTransmis)
        .subscribe(reponse => {
          console.log("Reponse du serveur : " + reponse.message)
        });
      this.router.navigate(["/home"]);
    }

    //this.assignmentTransmis = undefined;
  }


  DeleteElement(){
    //c'est le OnDelete
    //permet de supprimer l'assignment
    if (this.assignmentTransmis) {

    this.assignmentService.deleteAssignment(this.assignmentTransmis)
    .subscribe(reponse =>
    {
          console.log(" Reponse du serveur :" + reponse.message);
      this.router.navigate(["/home"]);
      });
      this.assignmentTransmis = undefined;
    }
  }

  edit() {
    this.router.navigate(["/assignment", this.assignmentTransmis?.id, "edit"],
    { queryParams: { nom: this.assignmentTransmis?.nom }, fragment: 'edition' });}
}



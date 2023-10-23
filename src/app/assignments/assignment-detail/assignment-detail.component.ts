import { Component,Input,OnInit,EventEmitter,Output } from '@angular/core';
import { Assignment } from '../assignment.model';


@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() assignmentTransmis?: Assignment;
  @Output() deleteAssignment=new EventEmitter<Assignment>();
  constructor() { }

  ngOnInit(): void {
    }

  OnAssignmentRendu(){
  // Vérifie que l'objet assignmentTransmis est initialisé avant d'accéder à sa propriété rendu
  if (this.assignmentTransmis) {
    this.assignmentTransmis.rendu = true;}
  }

  supprimerAssignment(){
    this.deleteAssignment.emit(this.assignmentTransmis);
  }

}

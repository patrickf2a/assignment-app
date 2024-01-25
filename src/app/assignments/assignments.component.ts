import {Component, OnInit,ViewChild} from '@angular/core';
import {Assignment} from './assignment.model';
import {AssignmentsService} from '../shared/assignments.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {PageEvent} from "@angular/material/paginator";
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})

export class AssignmentsComponent implements OnInit{
  //titre = "Mon application sur les Assignments !";
  FormVisible=false;

  assignementSelectionne? : Assignment;

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

  userPageSize: number = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // pour le table
  displayedColumns: string[] = ['id', 'nom', 'photomatiere','photoprof','auteur','dateDeRendu','rendu', 'Note','Remarques','Recherche'];
  //dataSource!: MatTableDataSource<Assignment>;
  dataSource= new MatTableDataSource(this.assignments);
  @ViewChild(MatSort) sort!:MatSort;

  // Pour le filtre
  filterRendu = false;

  // Pour la recherche
  searchValue = '';
  constructor(private assignmentService: AssignmentsService){
  }

  ngOnInit(): void{
    //this.assignments= this.assignmentService.getAssignments();
    //this.getAssignments();
    // Pour la table

    this.assignmentService.getAssignments().subscribe(assignments => {
      this.dataSource = new MatTableDataSource(this.assignments)
      this.dataSource.sort = this.sort;
      if (this.paginator){
        this.dataSource.paginator = this.paginator;
      }
    this.getAssignmentsPagines();
  }
);
  }

  // Pour la pagination
  getAssignmentsPagines(){
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

      // Filtre par le nom de l'assignment
      this.assignments = data.docs.filter((assignment: Assignment) =>
        assignment.nom.toLowerCase().includes(this.searchValue)
      );

      // Filtre par le rendu
      if (this.filterRendu) {
        this.assignments = this.assignments.filter(assignment => assignment.rendu);
      }

      console.log("les assignments sont recu ");
    });
  }

  onPageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.userPageSize = event.pageSize; // Ajoutez cette ligne
    this.getAssignmentsPagines();
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

  // Pour la pagination

  PremierPage(){
    this.page=1;
    this.getAssignmentsPagines();
  }

  pageSuivant(){
    if (this.hasNextPage){
      this.page=this.nextPage;
      this.getAssignmentsPagines();
    }
  }

  pagePrecedent(){
    if (this.hasPrevPage){
      this.page=this.prevPage;
      this.getAssignmentsPagines();
    }
  }

  DernierPage(){
    this.page=this.totalPages;
    this.getAssignmentsPagines();
  }


  // Pour le filtre

  OnRenduFiltre(event: MatCheckboxChange) {
    this.filterRendu = event.checked;
    this.getAssignmentsPagines();
  }


  // Pour la recherche
  OnRecherche(event: Event) {
    const fieldValue = (event.target as HTMLInputElement).value;
    this.searchValue = fieldValue.trim().toLowerCase();
    this.getAssignmentsPagines();
  }

}

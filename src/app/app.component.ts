import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titre = "Mon application sur les Assignments !"
  ngOnInit(): void{

  }
}

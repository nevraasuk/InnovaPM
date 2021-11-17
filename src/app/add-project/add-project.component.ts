import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {



  constructor() { }

  project: Project = new Project();

  ngOnInit(): void {
  }

  addProject(){
    console.log(this.project);
    console.log("Şu anda sunucuya gönderilir!");
  }

}

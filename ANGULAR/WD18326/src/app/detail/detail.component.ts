import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  id= 0;
  project: any ={};
  constructor (private route:ActivatedRoute, 
   // private http:HttpClient
  private service: ProjectService,
  ){
    this.id = this.route.snapshot.params['user'];
  }

  ngOnInit(): void{
    let apiURL ='http://localhost:3000/projects/' + this.id; //khai bao apiURL
    console.log(this.id);
    
    //gui request len json-server de lay thong tin
    //this.http.get(apiURL).subscribe(response => {
    //  console.log(response);
      
      //gandu lieu json-server tra vao 1 bien
    //  this.project = response;
    //})
    this.service.getDetail(this.id).subscribe(res => {
      this.project = res;
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {RouterLink}  from '@angular/router';
import { response } from 'express';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listProjects: any;
  id= 0;
  project: any ={};
  apiURL= 'http://localhost:3000/projects';
  constructor(private service: ProjectService){}
  ngOnInit(): void{
    //cú pháp gửi http request
    //this.httpClient.method(apiURL).subscribe(response => {})
    //this.truongdv.get(this.apiURL).subscribe(response => {
      //this.listProjects = response;
    //})
    //goi ham getlist o trong projectService
    this.service.getList().subscribe(res => {
      this.listProjects = res;
    })
  }

  onDelete(id: any): void{
    if(confirm('Ban co chac khong ')){
  //    this.truongdv.delete(this.apiURL + '/'+ id).subscribe(response => {
  //      alert('Da xoa thanh cong');
  //      this.ngOnInit();  
   //   })
   this.service.delete(id).subscribe(res => {
    alert('Da xoa thanh cong');
    this.ngOnInit();
   })
    }

  }
}
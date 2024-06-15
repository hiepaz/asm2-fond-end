import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl = 'http://localhost:3000/projects';
  constructor(private http: HttpClient) {}
  //ham lay danh sach du an
  getList(){
    return this.http.get(this.apiUrl);
  }
  //ham xoa
  delete(id: any){
    return this.http.delete(this.apiUrl + '/' + id);
  }

  //ham them moi
  create(data : any){
    return this.http.post(this.apiUrl, data);
  }

  //ham lay thong tin chi tiet
  getDetail(id: any){
    return this.http.get(this. apiUrl + '/' + id);
  }

  //ham sua
  edit(id: any, data: any){
    return this.http.put(this.apiUrl + '/' + id,data);
  }
}

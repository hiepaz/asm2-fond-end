import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'truongdvph11136';
  info = {
    name: 'add',
    email: 'dddd',
    gender: 'adfa',
  }

  name='';
  count=0;
  //Khai báo hàm;
  //Khai báo kiểu dữ liệu trả về: tenHam(): kieuDuLieu {}
  //ko khai báo kiểu dữ liệu trả về: tenHam() {}
  countClick(): void{
    this.count = this.count+1; //tăng giá trị count lên 1 đơn vị
  }

  list = [
    {
      name: 'truongdv1',
      email: 'truongdv@fpt',
      gender: 'male',
    },
    {
      name: 'truongdv2',
      email: 'truongdv@fpt',
      gender: 'male',
    },
    {
      name: 'truongdv3',
      email: 'truongdv@fpt',
      gender: 'male',
    },
  ]
  
  
}

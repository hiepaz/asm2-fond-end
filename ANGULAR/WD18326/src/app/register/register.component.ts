import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { error } from 'console';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private auth:AuthService,
    private router: Router
  ){}

  //khai bao ham onSubmit, goi ham register trong authService
  onSubmit(data: any) {
    this.auth.register(data).subscribe (res => {
      alert ('dang ki thanh cong');
      this.router.navigate(['login']);
    }, error=> {
      alert(error.error)
    })
  }
}

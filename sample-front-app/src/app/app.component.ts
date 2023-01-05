import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = {
    username: '',
    password: '',
  };
  message : string = ''
  constructor(private http: HttpClient) {}

  submit() {
    this.http.post('http://localhost:3000/login', this.model).subscribe((res:any)=>{
      this.message = res
    })  
  }
}

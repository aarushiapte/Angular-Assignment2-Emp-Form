import { Component } from '@angular/core';
import { Emp } from './emp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  empModel = new Emp('', '', 0, '', '', '', '', '', 0);

  onSubmit(){
    console.log(this.empModel);
  }
}

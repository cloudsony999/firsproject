import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firsproject';
  ename="Mercy";
  address="Chennai";

  display()
  {
    alert("Welcome to CG Angular Course!!!");
  }
}

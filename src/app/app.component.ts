import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  two="binding"
  stringbind='amitava';
  x=true;
 
  title = 'firsproject';
  ename="Mercy";
  address="Chennai";

  onChange(){
    this.stringbind='Example of Event Binding!!!!';
  }

  display()
  {
    alert("Welcome to CG Angular Course!!!");
  }
  products: any=[

    {
      title:"led tv",
      company:"Sony",
      price:40000
    },
    {
      title:"Mobile",
      company:"Samsung",
      price:20000
    },
    {
      title:"Freeze",
      company:"LG",
      price:45000
    }
  ]
}

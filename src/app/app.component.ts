import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputData: string = '';
  flag: boolean = true;
  clearInp(){
    this.inputData = "";
  }
}

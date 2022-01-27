import { Component } from '@angular/core';

interface Displays {
  value: string;
  viewValue: string;
}

interface Justify {
  value: string;
  viewValue: string;
}

interface Align {
  value: string;
  viewValue: string;
}

interface Height {
  value: string;
  viewValue: string;
}

interface Direction {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flexbox';
  styles:any;
  selectedValue!: string;
  selectedJustify!: string;
  selectedAlign!: string;
  selectedHeight!: string;
  selectedDirection!: string;

  display: Displays[] = [
    {value: '0', viewValue: 'flex'},

  ];

  justify: Justify[] = [
    {value: '9', viewValue: 'center'},
  ];

  align: Align[] = [
    {value: '5', viewValue: 'center'},

  ];

  height: Height[] = [
    {value: '8', viewValue: '100%'},
  ];

  direction: Direction[] = [
    {value: '1', viewValue: 'row'},
    {value: '2', viewValue: 'column'},
    {value: '3', viewValue: 'column-reverse'},
    {value: '4', viewValue: 'row-reverse'},
  
  ];

  try(){
    var span = (<HTMLInputElement>document.getElementById("blocks")).style.display = this.selectedValue;
    span = (<HTMLInputElement>document.getElementById("blocks")).style.justifyContent = this.selectedJustify;
    span = (<HTMLInputElement>document.getElementById("blocks")).style.alignItems = this.selectedAlign;
    span = (<HTMLInputElement>document.getElementById("blocks")).style.height = this.selectedHeight;
    span = (<HTMLInputElement>document.getElementById("blocks")).style.flexDirection = this.selectedDirection;

  }

}

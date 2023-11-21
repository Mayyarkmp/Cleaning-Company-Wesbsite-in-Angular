import { Component } from '@angular/core';

@Component({
  selector: 'app-buttombar',
  templateUrl: './buttombar.component.html',
  styleUrls: ['./buttombar.component.css']
})
export class ButtombarComponent {
  LogoImageUrl : string = "/assets/Images/Logo.png";
  buttomBarButtonsTitles :Map<number , string> = new Map([
    [0 , "INSTITUCIONAL"],
    [1 , "SERVICES"],
    [2 , "ADDRESS"],
    [3 , "HOURS OF OPERATION"],
  ]);


  institutional :Map<number , string> = new Map([
    [0 , "HOME"],
    [1 , "SERVICES"],
    [2 , "ABOUT US"],
    [3 , "AREAS"],
    [4 , "CONTACT"],
  ]);
  Services :Map<number , string> = new Map([
    [0 , "HOUSECLEANING"],
    [1 , "COMMERCIALCLEANING"],
    [2,"HOUSEMASTER"],
  ]);

  Areas :Map<number , string> = new Map([
    [0 , "AREAPLACEB"],
  ]);

  HoursOfOperation :Map<number , string> = new Map([
    [0 , "7 / 24"],
  ]);

  AvaialbleButtomBar :Map<number , Map<number,string>> = new Map([
    [0 , this.institutional],
    [1 , this.Services],
    [2 ,  this.Areas],
    [3 ,  this.HoursOfOperation],
  ]);

}

import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

export let   fadeInAnimation =    trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('1000ms ease-out', style({ opacity: 1 }))
  ])
])
@Component({
  selector: 'app-window-cleaning',
  templateUrl: './window-cleaning.component.html',
  styleUrls: ['./window-cleaning.component.css'],
  animations:[
    fadeInAnimation]
})
export class WindowCleaningComponent {
  collapsed1 = true;
  collapsed2 = true;
  collapsed3 = true;
  collapsed4 = true;
  collapsed5 = true;
  title1 = "Exterior Window Cleaning"
  title2 = "Interior Window Cleaning"
  title3 = "Extra Delicate Touch"
  title4 = "Window Screen Cleaning"

  content1 = "This service involves cleaning the exterior of windows, including the glass panes, frames, and sills. It is important to have the outside of every window cleaned by professional window washers to ensure a proper cleaning."
  content2 = "This service involves cleaning the interior of windows, including the glass panes, frames, and sills. It is important to have both the interior and exterior of windows cleaned to ensure an all-around clean."
  content3 = "This service involves cleaning delicate windows, such as stained glass or leaded glass windows, with extra care to avoid damage."
  content4 = "This service involves cleaning the screens and tracks of windows. Many people forget about the screens and focus solely on the glass, but it is important to clean the screens as well to ensure a comprehensive clean."
  CarouselCard =
  [
    {ImageUrl:"/assets/Images/w1.jpg",alt :'1', isactive : true},
    {ImageUrl:"/assets/Images/w2.jpg",alt :'2',  isactive : false},
    {ImageUrl:"/assets/Images/w3.jpg",alt :'3',  isactive : false},
    {ImageUrl:"/assets/Images/w4.jpg",alt :'4',  isactive : false},
    {ImageUrl:"/assets/Images/w5.jpg",alt :'5',  isactive : false},
    {ImageUrl:"/assets/Images/w6.jpg",alt :'6',  isactive : false},
    {ImageUrl:"/assets/Images/w7.jpeg",alt :'7',  isactive : false}
  ]
}

import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

export let   fadeInAnimation =    trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('1000ms ease-out', style({ opacity: 1 }))
  ])
])
@Component({
  selector: 'app-basic-cleaning',
  templateUrl: './basic-cleaning.component.html',
  styleUrls: ['./basic-cleaning.component.css'],
  animations:[
    fadeInAnimation]
})
export class BasicCleaningComponent {
  collapsed1 = true;
  collapsed2 = true;
  collapsed3 = true;
  collapsed4 = true;
  collapsed5 = true;
  title1 = "Bedrooms & Living Areas"
  title2 = "Kitchen"
  title3 = "Bathroom"

  content1 = "This service involves cleaning the bedrooms and living areas of a home. Tasks include dusting, vacuuming, and polishing surfaces. This service is important to maintain a clean and comfortable living space"
  content2 = "This service involves cleaning the kitchen, including countertops, sinks, and appliances. Tasks include wiping down surfaces, cleaning the stovetop, and mopping the floor. A clean kitchen is essential for maintaining a healthy and safe environment"
  content3 = "This service involves cleaning the bathroom, including the sink, toilet, shower, and bathtub. Tasks include scrubbing surfaces, cleaning mirrors, and mopping the floor. A clean bathroom is important for maintaining hygiene and preventing the spread of germs"
  CarouselCard=
  [
    {ImageUrl:"/assets/Images/b20.jpg",alt :'1',  isactive : true},
    {ImageUrl:"/assets/Images/b2.jpg",alt :'2',  isactive : false},
    {ImageUrl:"/assets/Images/b3.jpg",alt :'3',  isactive : false},
    {ImageUrl:"/assets/Images/b4.jpg",alt :'4',  isactive : false},
    {ImageUrl:"/assets/Images/b5.jpg",alt :'5',  isactive : false},
    {ImageUrl:"/assets/Images/b6.jpg",alt :'6',  isactive : false},
    {ImageUrl:"/assets/Images/b7.jpg",alt :'7',  isactive : false},
    {ImageUrl:"/assets/Images/b8.jpg",alt :'8',  isactive : false},
    {ImageUrl:"/assets/Images/b9.jpg",alt :'9',  isactive : false},
    {ImageUrl:"/assets/Images/b10.jpg",alt :'10',  isactive : false},
    {ImageUrl:"/assets/Images/b11.jpg",alt :'11',  isactive : false},
    {ImageUrl:"/assets/Images/b12.jpg",alt :'12',  isactive : false},
    {ImageUrl:"/assets/Images/b13.jpg",alt :'13',  isactive : false},
    {ImageUrl:"/assets/Images/b14.jpg",alt :'14',  isactive : false},
    {ImageUrl:"/assets/Images/b15.jpg",alt :'15',  isactive : false},
    {ImageUrl:"/assets/Images/b16.jpg",alt :'16',  isactive : false},
    {ImageUrl:"/assets/Images/b17.jpg",alt :'17',  isactive : false},
    {ImageUrl:"/assets/Images/b18.jpg",alt :'18',  isactive : false},
    {ImageUrl:"/assets/Images/b19.jpg",alt :'19',  isactive : false},
  ]
}

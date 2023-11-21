import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

export let   fadeInAnimation =    trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('1000ms ease-out', style({ opacity: 1 }))
  ])
])
@Component({
  selector: 'app-office-cleaning',
  templateUrl: './office-cleaning.component.html',
  styleUrls: ['./office-cleaning.component.css'],
  animations:[
    fadeInAnimation]
})
export class OfficeCleaningComponent {
  collapsed1 = true;
  collapsed2 = true;
  collapsed3 = true;
  collapsed4 = true;
  collapsed5 = true;
  title1 = "Offices"
  title2 = "Restaurants"
  title3 = "Showrooms"
  title4 = "Doctors offices"
  title5 = "Classrooms"

  content1 = "We offer comprehensive cleaning services for offices of all sizes. Our services include dusting, vacuuming, mopping, and cleaning the bathrooms and kitchen. We can also customize our services to meet your specific needs."
  content2 = "We provide thorough cleaning services for restaurants to ensure that they are clean and hygienic for your customers. Our services include cleaning the dining area, kitchen, and bathrooms, as well as washing dishes and taking out the trash."
  content3 = "We offer specialized cleaning services for showrooms to ensure that they are clean and presentable for your customers. Our services include dusting, vacuuming, and cleaning the floors and windows."
  content4 = "We provide cleaning services for doctors offices to ensure that they are clean and hygienic for your patients. Our services include cleaning the waiting area, exam rooms, and bathrooms, as well as disinfecting surfaces and equipment."
  content5 = "We offer cleaning services for classrooms to ensure that they are clean and safe for your students. Our services include dusting, vacuuming, and cleaning the floors and windows, as well as disinfecting surfaces and equipment."
  CarouselCard =
  [
    {ImageUrl:"/assets/Images/CC1.jpg",alt :'1', isactive : true},
    {ImageUrl:"/assets/Images/CC2.jpg",alt :'2',  isactive : false},
    {ImageUrl:"/assets/Images/CC3.jpg",alt :'3',  isactive : false},
    {ImageUrl:"/assets/Images/CC4.jpg",alt :'4',  isactive : false},
    {ImageUrl:"/assets/Images/CC5.jpg",alt :'5',  isactive : false},
    {ImageUrl:"/assets/Images/CC6.jpg",alt :'6',  isactive : false},
    {ImageUrl:"/assets/Images/CC7.jpg",alt :'7',  isactive : false},
    {ImageUrl:"/assets/Images/CC8.jpg",alt :'8',  isactive : false},


  ]

}

import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
export let   fadeInAnimation =    trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('1000ms ease-out', style({ opacity: 1 }))
  ])
])
@Component({
  selector: 'app-housecleaning',
  templateUrl: './housecleaning.component.html',
  styleUrls: ['./housecleaning.component.css'],
  animations:[
    fadeInAnimation]
})

export class HousecleaningComponent {

  collapsed1 = true;
  collapsed2 = true;
  collapsed3 = true;
  collapsed4 = true;
  collapsed5 = true;
  title1 = "Vacation apartments and condominiums"
  title2 = "Single-family houses"
  title3 = "Relocation (moving in/out)"
  title4 = "Spring cleaning"
  title5 = "After-party/Events"

  content1 = "We offer thorough cleaning services for vacation apartments and condominiums to ensure that they are clean and ready for the next guests. Our services include cleaning the bathrooms, kitchen, living areas, and bedrooms, as well as changing the linens and towels."
  content2 = "We provide comprehensive cleaning services for detached houses, including dusting, vacuuming, mopping, and cleaning the bathrooms and kitchen. We can also customize our services to meet your specific needs."
  content3 = "Our relocation cleaning services are designed to help you move in or out of your home with ease. We can clean your old home to ensure that it's ready for the next occupants, and we can also clean your new home before you move in."
  content4 = "Our spring cleaning services are perfect for giving your home a deep clean after the winter months. We can clean every nook and cranny of your home, including the windows, walls, and floors."
  content5 = "We offer after-party/event cleaning services to help you clean up after a party or event. Our services include cleaning up any messes, washing dishes, and taking out the trash."
  CarouselCard=
  [
    {ImageUrl:"/assets/Images/1.jpeg",alt :'1', isactive : true},
    {ImageUrl:"/assets/Images/2.jpg",alt :'2',  isactive : false},
    {ImageUrl:"/assets/Images/3.jpg",alt :'3',  isactive : false},
    {ImageUrl:"/assets/Images/4.jpg",alt :'4',  isactive : false},
    {ImageUrl:"/assets/Images/5.jpg",alt :'5',  isactive : false},
    {ImageUrl:"/assets/Images/HC1.png",alt :'6',  isactive : false},
    {ImageUrl:"/assets/Images/HC2.webp",alt :'7',  isactive : false},
    {ImageUrl:"/assets/Images/HC3.jpg",alt :'8',  isactive : false}
  ]

}

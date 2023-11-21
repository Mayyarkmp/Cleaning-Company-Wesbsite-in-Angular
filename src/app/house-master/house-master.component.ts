import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

export let   fadeInAnimation =    trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('1000ms ease-out', style({ opacity: 1 }))
  ])
])
@Component({
  selector: 'app-house-master',
  templateUrl: './house-master.component.html',
  styleUrls: ['./house-master.component.css'],
  animations:[
    fadeInAnimation]
})
export class HouseMasterComponent {
  collapsed1 = true;
  collapsed2 = true;
  collapsed3 = true;
  collapsed4 = true;
  collapsed5 = true;
  title1 = "Repairs & Renovations"
  title2 = "Garden/Backyard Maintenance"
  title3 = "Thermal Insulation"
  title4 = "Winter Service"

  content1 = "We offer a wide range of repair and renovation services for both residential and commercial properties. Our services include minor repairs such as replacement or repair of floors, windows, and doors, as well as more extensive renovation work."
  content2 = "We provide comprehensive garden and backyard maintenance services to ensure that your outdoor space is clean and well-maintained. Our services include garden maintenance, irrigation, weeding, and maintenance of flower beds, as well as carrying out tree and hedge trimming."
  content3 = "We offer thermal insulation services to help you save energy and reduce your heating and cooling costs. Our services include installing insulation in walls, roofs, and floors, as well as sealing air leaks and drafts."
  content4 = "We provide winter services to help you keep your property safe and accessible during the winter months. Our services include snow removal and gritting work to ensure that your property is safe for you and your visitors."
  CarouselCard=
  [
    {ImageUrl:"/assets/Images/bm1.jpg",alt :'1', isactive : true},
    {ImageUrl:"/assets/Images/bm2.jpg",alt :'2',  isactive : false},
    {ImageUrl:"/assets/Images/bm3.jpg",alt :'3',  isactive : false},
    {ImageUrl:"/assets/Images/bm4.jpg",alt :'4',  isactive : false},
    {ImageUrl:"/assets/Images/bm5.jpg",alt :'5',  isactive : false},
    {ImageUrl:"/assets/Images/bm6.jpg",alt :'6',  isactive : false},
    {ImageUrl:"/assets/Images/bm7.jpg",alt :'7',  isactive : false},
    {ImageUrl:"/assets/Images/bm8.jpg",alt :'8',  isactive : false},
    {ImageUrl:"/assets/Images/bm9.jpg",alt :'9',  isactive : false},
    {ImageUrl:"/assets/Images/bm10.png",alt :'10',  isactive : false}
  ]

}

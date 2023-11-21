import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export let   fadeInAnimation =    trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('1000ms ease-out', style({ opacity: 1 }))
  ])
])

export let   fadeOutAnimation =     trigger('fadeOutAnimation', [
  state('void', style({
    opacity:1,
    // border:'1px solid #2A66B0'
  })),
  state('leave', style({
    opacity: 0,
    // border:'none'
  })),
  transition('void => leave', [
    animate('.4s')
  ]),
  transition('leave => void', [
    animate('0.2s')
  ])
])

export let   CardAnimation =     trigger('CardAnimation', [
  state('void', style({

    transform: 'translateY(-200%)',


    // border:'1px solid #2A66B0'
  })),
  state('hover', style({
    transform: 'translateY(-100%)',

    // border:'none'
  })),
  transition('void => hover', [
    animate('.5s ease-in-out')
  ]),
  transition('hover => void', [
    animate('1s ease-in-out')
  ])
])

export let   CardTextAnimation =     trigger('CardTextAnimation', [
  state('void', style({

    transform: 'translateY(-100%)',
    opacity: 0,


  } ) ),
  state('hover', style({
    transform: 'translateY(-50%)',
    opacity: 1,


  })),
  transition('void => hover', [
    animate('.5s ease-in-out')
  ]),
  transition('hover => void', [
    animate('1s ease-in-out')
  ])
])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    CardAnimation,
    CardTextAnimation,
    fadeOutAnimation,
    fadeInAnimation]
})
export class HomeComponent {
  ImageUrl: string[] = ['/assets/Images/1.jpeg' , '/assets/Images/2.jpg' , '/assets/Images/3.jpg' , '/assets/Images/4.jpg' , '/assets/Images/5.jpg' , '/assets/Images/6.jpg'];


  homeImageUrl : string = "/assets/Images/HomePage.jpg";
  LocationImageUrl : string = "/assets/Images/Efiel.jpg";
  isHovered = false ;
	pauseOnHover = true;
	pauseOnFocus = false ;
  imageUrl: string = '/assets/Images/Logo.png';
  imageUrlSmall :string = '/assets/Images/LogoSmall.png';


CarouselCard=
[
  {ImageUrl:"/assets/Images/1.jpg",alt :'1', isactive : true},
  {ImageUrl:"/assets/Images/2.jpg",alt :'2',  isactive : false},
  {ImageUrl:"/assets/Images/3.jpg",alt :'3',  isactive : false},
  {ImageUrl:"/assets/Images/4.jpg",alt :'4',  isactive : false},

  {ImageUrl:"/assets/Images/7.jpg",alt :'7',  isactive : false},
  {ImageUrl:"/assets/Images/11.jpg",alt :'11',  isactive : false},
  {ImageUrl:"/assets/Images/12.jpg",alt :'12',  isactive : false},
  {ImageUrl:"/assets/Images/13.jpg",alt :'13',  isactive : false},
  {ImageUrl:"/assets/Images/14.jpg",alt :'14',  isactive : false},
  {ImageUrl:"/assets/Images/15.jpg",alt :'15',  isactive : false},
  {ImageUrl:"/assets/Images/16.jpg",alt :'16',  isactive : false},
  {ImageUrl:"/assets/Images/17.jpg",alt :'17',  isactive : false},
  {ImageUrl:"/assets/Images/18.jpg",alt :'18',  isactive : false},

  {ImageUrl:"/assets/Images/19.jpg",alt :'19',  isactive : false},
  {ImageUrl:"/assets/Images/20.jpg",alt :'20',  isactive : false},
  {ImageUrl:"/assets/Images/21.jpg",alt :'21',  isactive : false},
]


Cards = [
  {title:"HOUSECLEANING", content:"HCContent", ImageUrl:"../../assets/Images/CleanPic.jpg" , CardisHovered :false },
  {title:"COMMERCIALCLEANING", content:"CCContent", ImageUrl:"../../assets/Images/F3.jpg", CardisHovered :false},
  {title:"HOUSEMASTER", content:"HMContent", ImageUrl:"../../assets/Images/F1.jpg", CardisHovered :false},
  {title:"DEEPCLEANING", content:"DPCContent", ImageUrl:"../../assets/Images/F4.jpg", CardisHovered :false},
  {title:"WINDOWCLEANING", content:"WCContent", ImageUrl:"../../assets/Images/F2.jpg", CardisHovered :false},
];
isSmallScreen = false;
isMediumScreen = false ;
isLargeScreen = false ;
ngOnInit() {

  this.breakpointObserver
  .observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
  .subscribe((state) => {
    if (state.breakpoints[Breakpoints.Small]) {
      this.isSmallScreen = true;
      this.isMediumScreen = false;
      this.isLargeScreen = false;
    }
    else if(state.breakpoints[Breakpoints.Large])
    {
      this.isSmallScreen = false;
      this.isMediumScreen = false;
      this.isLargeScreen = true;
    }
     else if (state.breakpoints[Breakpoints.Medium]) {
      this.isSmallScreen = false;
      this.isMediumScreen = true;
      this.isLargeScreen = false;
    } else {
      this.isSmallScreen = true;
      this.isMediumScreen = false;
      this.isLargeScreen = false;
    }
  });
}
constructor(private breakpointObserver: BreakpointObserver){}
}



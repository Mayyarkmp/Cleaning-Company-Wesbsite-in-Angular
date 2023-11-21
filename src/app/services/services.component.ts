import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

export let   fadeInAnimation =    trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('500ms ease-out', style({ opacity: 1 }))
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
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations:[
    CardAnimation,
    CardTextAnimation,
    fadeOutAnimation,
    fadeInAnimation
  ]
})
export class ServicesComponent {
isHovered = false ;
imageUrlSmall :string = '/assets/Images/LogoSmall.png';

Cards = [
  {title:"HOUSECLEANING", content:"HCContent", ImageUrl:"../../assets/Images/CleanPic.jpg" , CardisHovered :false },
  {title:"COMMERCIALCLEANING", content:"CCContent", ImageUrl:"../../assets/Images/F3.jpg", CardisHovered :false},
  {title:"HOUSEMASTER", content:"HMContent", ImageUrl:"../../assets/Images/F4.jpg", CardisHovered :false},
  {title:"DEEPCLEANING", content:"DPCContent", ImageUrl:"../../assets/Images/F1.jpg", CardisHovered :false},
  {title:"WINDOWCLEANING", content:"WCContent", ImageUrl:"../../assets/Images/F2.jpg", CardisHovered :false},
];

//HMCpic.jpg
}


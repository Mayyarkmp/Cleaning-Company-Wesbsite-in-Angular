import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  animations:[]
})
export class ToolbarComponent {
  isMenuIconButtonSmallScreenClicked = false;
  isSmallScreen = false;
  isMediumScreen = false ;
  isLargeScreen = false ;

  imageUrl: string = '/assets/Images/Logo.png';
  imageUrlSmall :string = '/assets/Images/LogoSmall.png';
  isServicesTagOpened = false ;
  isLanguageTagOpen = false ;

  AvailableServicesCatagories :Map<number , string> = new Map([
    [0 , "House Cleaning"],
    [1 , "Commercial Cleaning"],
    [2, "Building Maintenance"],
  ]);
  AvailableServicesHouseCleaning :Map<number , string> = new Map([
    [0 , "VACATION APARTMENTS/CONDOS"],
    [1 , "SINGLE-FAMILY HOMES"],
    [2 , "MOVING IN/OUT"],
    [3 , "SPRING-CLEANING"],
    [4 , "AFTER-PARTY/EVENTS"],
  ]);
  AvailableServicesCommercialCleaning :Map<number , string> = new Map([
    [0 , "OFFICES"],
    [1 , "RESTAURANTS"],
    [2 , "EXHIBITION ROOMS"],
    [3 , "DOCTORS OFFICES"],
    [4 , "CLASSROOMS"],
    [5 , "VACATION APARTMENTS"],
  ]);
  AvailableServicesEmpty :Map<number , string> = new Map([
    [0 , ""],
  ]);
  AvailableServices :Map<number , Map<number,string>> = new Map([
    [0 , this.AvailableServicesHouseCleaning],
    [1 , this.AvailableServicesCommercialCleaning],
    [2 ,  this.AvailableServicesEmpty],

  ]);
  ToolBarButtons :Map<number , string> = new Map([
    [0 , "HOME"],
    [1 , "SERVICES"],
    [2 , "AREAS"],
    [3 , "CONTACT"],


  ]);

  lang :string = "en" ;
  public selectLanguage : number  = 0 ;

  AvailableLanguages: Map<number, string> = new Map([
    [0,'en'],
    [1,'du' ],

  ]);


  ngOnInit() {
    this.lang = navigator.language.substring(0, 2);
    console.log(navigator.language.substring(0, 2));
    if (this.lang == 'en' )
    {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      this.translate.getTranslation('en').subscribe((res: any) => {
        console.log(res);
      });
    }
    else if (this.lang == 'du' )
    {
      this.translate.setDefaultLang('du');
      this.translate.use('du');
      this.translate.getTranslation('du').subscribe((res: any) => {
        console.log(res);
      });
    }
    else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      this.translate.getTranslation('en').subscribe((res: any) => {
        console.log(res);
      });
    }
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
  constructor(private translate: TranslateService , private breakpointObserver: BreakpointObserver )
  {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.getTranslation('en').subscribe((res: any) => {
      console.log(res);
    });
  }
  onLanguageClicked(_t11: number) {

    this.selectLanguage = _t11;
    this.lang = this.AvailableLanguages.get(_t11) ?? 'en';
    this.translate.use(this.lang);
    this.translate.getTranslation(this.lang).subscribe((res: any) => {
      console.log(res);
    });
    console.log(this.lang);

    }
    isMenuButtonClicked()
    {
      this.isMenuIconButtonSmallScreenClicked = !this.isMenuIconButtonSmallScreenClicked;
    }
}

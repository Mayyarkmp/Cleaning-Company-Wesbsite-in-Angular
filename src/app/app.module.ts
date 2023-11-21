import { HousecleaningComponent } from './house-cleaning/housecleaning.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule  } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {MatDividerModule } from '@angular/material/divider'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatSelectModule} from '@angular/material/select';
import { NgbDropdownModule , NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import {LayoutModule} from '@angular/cdk/layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { ButtombarComponent } from './buttombar/buttombar.component';

import { ServicesComponent} from './services/services.component'
import { OfficeCleaningComponent } from './office-cleaning/office-cleaning.component';

import { HouseMasterComponent } from './house-master/house-master.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { BasicCleaningComponent } from './basic-cleaning/basic-cleaning.component';
import { WindowCleaningComponent } from './window-cleaning/window-cleaning.component';
import { ContactComponent } from './contact/contact.component';
import { AreasComponent } from './areas/areas.component';
@NgModule({
  declarations: [
    ContactComponent,
    AreasComponent,
    HomeComponent,
    ServicesComponent,
    HouseMasterComponent,
    OfficeCleaningComponent,
    AppComponent,
    ToolbarComponent,
    ButtombarComponent,
    HousecleaningComponent,
    BasicCleaningComponent,
    WindowCleaningComponent
  ],
  imports: [
    IonicModule.forRoot(),
    MatIconModule,
    CarouselModule,
    CommonModule,
    NgbAccordionModule,
    MatExpansionModule,
    MatIconModule,
    LayoutModule,
    MatMenuModule,
    NgbDropdownModule,
    NgbDropdownToggle,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatDividerModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[

  ]
})
export class AppModule { }

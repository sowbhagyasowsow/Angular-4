import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroesComponent} from './hero/heroes.component';
// import { RouterModule }   from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app.routing.module';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './database/in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { TypeHeadInputComponent } from './type-head-input/type-head-input.component';
// import { NgxTypeaheadModule } from 'ngx-typeahead';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    TypeHeadInputComponent,
    CrisisCenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    NgbModule.forRoot()
    // NgxTypeaheadModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

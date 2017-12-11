import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { SpoilerComponent } from './spoiler/spoiler.component';
import { FormComponent } from './form/form.component';
import { ContentComponent } from './content/content.component';
import { CategoryHeaderComponent } from './category-header/category-header.component';
import { FanartComponent } from './fanart/fanart.component';
import { WritingComponent } from './writing/writing.component';
import { PostTypePipePipe } from './post-type-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SpoilerComponent,
    FormComponent,
    ContentComponent,
    CategoryHeaderComponent,
    FanartComponent,
    WritingComponent,
    PostTypePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

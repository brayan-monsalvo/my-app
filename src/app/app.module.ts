import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RutaComponent } from './ruta/ruta.component';
import { BasesComponent } from './bases/bases.component';
import { Routes, RouterModule} from '@angular/router';
import { TablabasesComponent } from './tablabases/tablabases.component';
import { FormsModule }   from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';

const appRoutes : Routes=[
  { path: "", component : RutaComponent },
  { path: "bases", component : BasesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RutaComponent,
    BasesComponent,
    TablabasesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

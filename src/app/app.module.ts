import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


import { AppComponent } from './app.component';
import { AddWeaponComponent } from './weapon/add-weapon.component';
import { ListWeaponsComponent } from './weapon/list-weapons/list-weapons.component';

const appRoutes: Routes = [
  { path: 'weapon', component: AddWeaponComponent },
  // { path: 'weapon/:id',      component: HeroDetailComponent },
  {
    path: 'weapons',
    component: ListWeaponsComponent,
    data: { title: 'Weapons List' }
  },
  { path: '',
    redirectTo: '/weapons',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddWeaponComponent,
    ListWeaponsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

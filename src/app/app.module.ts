import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MesaComponent } from './CRUDS/mesa/mesa.component';
import { BebidaComponent } from './CRUDS/bebida/bebida.component';
import { PlatoComponent } from './CRUDS/plato/plato.component';
import { GuarnicionComponent } from './CRUDS/guarnicion/guarnicion.component';

import {MesaService} from '../app/CRUDS/mesa/mesa.service';
import {BebidaService} from '../app/CRUDS/bebida/bebida.service';
import {PlatoService} from '../app/CRUDS/plato/plato.service';
import {GuarnicionService} from '../app/CRUDS/guarnicion/guarnicion.service';

const routes: Routes = [
  {path: '', redirectTo: '/Mesa', pathMatch: 'full'},
  {path:'Mesa', component: MesaComponent},
  {path:'Bebida', component: BebidaComponent},
  {path:'Plato', component: PlatoComponent},
  {path:'Guarnicion', component: GuarnicionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MesaComponent,
    BebidaComponent,
    PlatoComponent,
    GuarnicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MesaService,
    PlatoService,
    BebidaService,
    GuarnicionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

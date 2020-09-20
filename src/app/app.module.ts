import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MesaComponent } from './CRUDS/mesa/mesa.component';
import { BebidaComponent } from './CRUDS/bebida/bebida.component';
import { PlatoComponent } from './CRUDS/plato/plato.component';
import { GuarnicionComponent } from './CRUDS/guarnicion/guarnicion.component';

import {MesaService} from './CRUDS/mesa/mesa-service/mesa.service';
import {BebidaService} from './CRUDS/bebida/bebida-service/bebida.service';
import {PlatoService} from './CRUDS/plato/plato-service/plato.service';
import {GuarnicionService} from './CRUDS/guarnicion/guarnicion-service/guarnicion.service';

const routes: Routes = [
  {path: '', redirectTo: '/Mesas', pathMatch: 'full'},
  {path:'Mesas', component: MesaComponent},
  {path:'Mesas/form', component: MesaComponent},
  {path:'Bebidas', component: BebidaComponent},
  {path:'Bebidas/form', component: BebidaComponent},
  {path:'Platos', component: PlatoComponent},
  {path:'Platos/form', component: PlatoComponent},
  {path:'Guarniciones', component: GuarnicionComponent},
  {path:'Guarniciones/form', component: GuarnicionComponent}
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
    HttpClientModule,
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MesaComponent } from './CRUDS/mesa/mesa.component';
import { BebidaComponent } from './CRUDS/bebida/bebida.component';
import { PlatoComponent } from './CRUDS/plato/plato.component';
import { GuarnicionComponent } from './CRUDS/guarnicion/guarnicion.component';
import { PedidoComponent } from './CRUDS/pedido/pedido.component';
import { HacerPedidoComponent } from './CORE/hacer-pedido/hacer-pedido.component';
import { DialogBebidasComponent } from './CORE/hacer-pedido/dialog-bebidas/dialog-bebidas.component';
import { DialogPlatosComponent } from './CORE/hacer-pedido/dialog-platos/dialog-platos.component';
import { DialogGuarnicionesComponent } from './CORE/hacer-pedido/dialog-guarniciones/dialog-guarniciones.component';
import { DialogEditarPedidoComponent } from './CORE/hacer-pedido/dialog-editar-pedido/dialog-editar-pedido.component'; 

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core'; 
import {MatExpansionModule} from '@angular/material/expansion';

import {MesaService} from './CRUDS/mesa/mesa-service/mesa.service';
import {BebidaService} from './CRUDS/bebida/bebida-service/bebida.service';
import {PlatoService} from './CRUDS/plato/plato-service/plato.service';
import {GuarnicionService} from './CRUDS/guarnicion/guarnicion-service/guarnicion.service';
import {PedidoService} from './CRUDS/pedido/pedido-service/pedido.service';

//PARA QUE SON LA ROUTES FORM?
const routes: Routes = [
  {path: '', redirectTo: '/Mesas', pathMatch: 'full'},
  {path:'Mesas', component: MesaComponent},
  {path:'Mesas/form', component: MesaComponent},
  {path:'Bebidas', component: BebidaComponent},
  {path:'Bebidas/form', component: BebidaComponent},
  {path:'Platos', component: PlatoComponent},
  {path:'Platos/form', component: PlatoComponent},
  {path:'Guarniciones', component: GuarnicionComponent},
  {path:'Guarniciones/form', component: GuarnicionComponent},
  {path:'tomar-pedido/:id', component: HacerPedidoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MesaComponent,
    BebidaComponent,
    PlatoComponent,
    GuarnicionComponent,
    PedidoComponent,
    HacerPedidoComponent,
    DialogBebidasComponent,
    DialogPlatosComponent,
    DialogGuarnicionesComponent,
    DialogEditarPedidoComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatRippleModule,
    MatExpansionModule,
  ],
  providers: [
    MesaService,
    PlatoService,
    BebidaService,
    GuarnicionService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

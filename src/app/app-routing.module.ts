import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent} from './componentes/bienvenida/bienvenida.component';
import { ErrorComponent} from './componentes/error/error.component';
import { LoginComponent} from './componentes/login/login.component';
import { HomeComponent} from './componentes/home/home.component';


const routes:Routes=[{path: '', component:BienvenidaComponent},
{path: 'login', component: LoginComponent},
{path: 'error', component: ErrorComponent},
{path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

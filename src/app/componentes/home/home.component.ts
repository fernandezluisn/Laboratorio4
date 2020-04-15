import { Component, OnInit } from '@angular/core'; 
import {Profesor} from '../../clases/profesor';
import {Alumno} from '../../clases/alumno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title="Luis Nahuel Fernández Trabajo en clase";
  listadoPrincipal: Alumno[] ;
  alumnoSeleccionado:Alumno;
  profesorParaMostrar:Profesor;
  ListadoProfesoresPrincipal:Profesor[];  

  constructor() { 
    this.profesorParaMostrar= new Profesor("Clementina","Programacion",777);
    this.listadoPrincipal = [
      { apellido: 'Aguas' ,nombre:"rogelio",legajo: 666 },
      { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 333 }
    ];

    this.ListadoProfesoresPrincipal= [
      { apellido: "Alvarez" ,materia:"matematicas",legajo: 666 },
      { apellido: "Villagran" ,materia:"prog 1",legajo: 333 }
    ];
}
tomarAlumnoCreado(NuevoAlumno: Alumno)
{
this.listadoPrincipal.push(NuevoAlumno);   
}
tomarAlumnoParaDetalles(NuevoAlumno: Alumno)
{
this.alumnoSeleccionado=NuevoAlumno;   
}
tomarProfesorParaDetalles(NuevoProfe: Profesor)
{
this.profesorParaMostrar=NuevoProfe;   
}
mostrarProfesor(parametroProfesor:Profesor)
{
  console.info("profesor",parametroProfesor);
  //this.profesorParaMostrar=parametroProfesor;
  this.ListadoProfesoresPrincipal.push(parametroProfesor);
}
  ngOnInit(): void {
  }

}

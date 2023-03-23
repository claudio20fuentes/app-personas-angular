import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router){

}

ngOnInit(){
  this.personasService.obtenerPersonas()
  .subscribe(
      (personas:Persona[]) => {
      this.personas = personas;
      console.log(this.personas);
      this.personasService.setPersonas(personas);
    });
}

agregar(){
  this.router.navigate(['personas/agregar']);
}

}

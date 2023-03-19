import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})

export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>(); 

  //nombreInput: string = '';
  //apellidoInput: string = '';
  @ViewChild('nombreInput') nombreInput:ElementRef;
  @ViewChild('nombreApellido') nombreApellido:ElementRef;

  constructor(private loggingService:LoggingService,
              private personasService: PersonasService
              ){
                this.personasService.saludar.subscribe(
                  (indice:number) => alert("El indice es: "+ indice)
                );

  }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.nombreApellido.nativeElement.value);
    //this.loggingService.enviaMensajeAConsola(" Enviamos persona " +" "+ persona1.nombre + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersonas(persona1);
  }

}

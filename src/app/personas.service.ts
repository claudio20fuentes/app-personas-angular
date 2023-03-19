import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    
    personas: Persona[] = [
        new Persona('Claudio','Fuentes'),
        new Persona('Renato','Fuentes'),
        new Persona('Dominga','Fuentes')
      ]

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService){
    }
      
    agregarPersonas(persona: Persona){
        this.loggingService.enviaMensajeAConsola("agregamos persona"+persona.nombre);
        this.personas.push(persona);
      }
}
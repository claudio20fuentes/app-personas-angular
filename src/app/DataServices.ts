import { HttpClient } from '@angular/common/http' ;
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona.model';


@Injectable()
export class DataServices{
    
    constructor(private httpClient:HttpClient){

    }

    cargarPersonas():Observable<any>{
        return this.httpClient.get('https://listado-personas-e94dd-default-rtdb.firebaseio.com/datos.json');
    }

    guardarPersonas(personas:Persona[]){
        console.log("guardar");
        this.httpClient.put('https://listado-personas-e94dd-default-rtdb.firebaseio.com/datos.json',personas)
        .subscribe(
            response => console.log('Resultado guardar las personas: ' + response ),
            error => console.log('Error al guardar una persona: ' + error )
        )
    }

    modificarPersona(index:number, persona:Persona){
        let url: string;
        url = 'https://listado-personas-e94dd-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.put(url,persona).
        subscribe(
            response => console.log('Persona modificada' + response),
            error => console.log('Error' + error)
        ); 
    }

}
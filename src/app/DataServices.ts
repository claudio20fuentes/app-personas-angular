import { HttpClient } from '@angular/common/http' ;
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';


@Injectable()
export class DataServices{
    
    constructor(private httpClient:HttpClient, private loginService:LoginService){

    }

    cargarPersonas():Observable<any>{
        const token = this.loginService.getIdToken();
        console.log("aca estoyyyyyyyyyyyyyyyyyyyyy" + token);
        console.log(this.httpClient.get('https://listado-personas-e94dd-default-rtdb.firebaseio.com/datos.json?auth=' + token));

        return this.httpClient.get('https://listado-personas-e94dd-default-rtdb.firebaseio.com/datos.json?auth=' + token);
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

    eliminarPersona(indice:number){
        //creamos la url
        //asignamos valor a la url, url + indice + .json
        //pasamos por parametros indice url + indice al metodo delete de httpClient
        //nos subscribimos al metodo creamos response y error
        let url: string;
        url = 'https://listado-personas-e94dd-default-rtdb.firebaseio.com/datos/'+indice+'.json';
        this.httpClient.delete(url).
        subscribe(
            response => console.log('Persona eliminada' + response),
            error => console.log('error',error)
        )

    }

}
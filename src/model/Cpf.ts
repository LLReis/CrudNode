import { Documento } from "./Documento";

export class Cpf implements Documento{


    private value: string

    constructor(value: string){
        if(!Cpf.isValid(value)){
            throw new Error ("Valor do Cpf não é valido")
        }
        this.value = value
    }

    static isValid(value: string){
        return value.length == 11
    }


    getDocumento(): Documento {
        return this
    }
    getValue(): string {
        return this.value
    }
    
}
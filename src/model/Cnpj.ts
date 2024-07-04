import { Documento } from "./Documento";

export class Cnpj implements Documento{


    private value: string

    constructor(value: string){
        if(!Cnpj.isValid(value)){
            throw new Error ("Valor do Cnpj não é valido")
        }
        this.value = value
    }

    static isValid(value: string){
        return value.length == 14
    }


    getDocumento(): Documento {
        return this
    }
    getValue(): string {
        return this.value
    }
    
}
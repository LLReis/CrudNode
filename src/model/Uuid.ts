import {validate as validadeUuid, v4 as uuidV4} from 'uuid'

export class Uuid{
    private value: string

    constructor(value: string){
        if(!validadeUuid(value)){
            throw new Error(`${value} não é um uuid valido `)
        }
        this.value = value
    }
    static randomGenerator(): Uuid{
        return new Uuid(uuidV4())
    }

    public getValue(){
        return this.value
    }
}
import { Documento } from "./Documento";
import { DocumentoFactory } from "./DocumentoFactory";
import { Uuid } from "./Uuid";

export class Cliente {
    private id: Uuid;
    private nome: string;
    private documento: Documento;

    constructor(nome: string, documento: Documento, id?: string){
        this.nome = nome
        this.documento = documento
        this.id = id ? new Uuid(id) : Uuid.randomGenerator()
    }

    static create (nome: string, documento: string, id?: string): Cliente {
        const documentoInstanciado = DocumentoFactory.create(documento) 
        return new Cliente(nome, documentoInstanciado, id)
    }
}
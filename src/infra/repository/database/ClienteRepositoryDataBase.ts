import knex, { Knex } from "knex";
import { Cliente } from "../../../model/Cliente";
import { ClienteRepository } from "../../../model/repositoy/ClienteRepository";
import { develop } from "./KnexConfig";
import { Uuid } from "../../../model/Uuid";


export class ClienteRepositoryDataBase implements ClienteRepository {
    
    private connection: Knex

    constructor(){
        this.connection = knex(develop)
    }


async save(cliente: Cliente): Promise<void> {
    await this.connection('cliente').insert({
        'id':cliente.getId().getValue(),
        'nome': cliente.getNome(),
        'documento': cliente.getDocumento().getValue()
    });
}
    async getAll(): Promise<Array<Cliente>> {
        const colecaoDeClientes: Array<Cliente> = [];

        const clientes = await this.connection('cliente').select('*')

        for (let i = 0; i < clientes.length; i++){
            const cliente = clientes[i];
            const id = clientes['id'];
            const nome = clientes['nome'];
            const documento = cliente['documento'];
            colecaoDeClientes.push(Cliente.create(nome,documento,id));
        }
        return colecaoDeClientes;
    }
        
    async getById(id: Uuid): Promise<Cliente> {
       const cliente = await this.connection('cliente').select('*').where({'id': id.getValue()});
       if(!cliente){
            throw new Error(`O cliente do id ${id.getValue()} não foi encontrado`) 
       }
       return Cliente.create(cliente['name'], cliente['documento'], cliente['id'])
    }
}
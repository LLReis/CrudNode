import knex, { Knex } from "knex";
import { Cliente } from "../../../model/Cliente";
import { ClienteRepository } from "../../../model/repositoy/ClienteRepository";
import { develop } from "./KnexConfig";
import { Uuid } from "../../../model/Uuid";
import { AlterarClienteDTO } from "../../../controller/dtos/AlterarClienteDTO";


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
       return Cliente.create(cliente[0]['name'], cliente[0]['documento'], cliente[0]['id'])
    }

    async delete(id: Uuid): Promise<void> {
        await this.connection('cliente').where({'id': id.getValue()}).delete();
    }

    async update(id: Uuid, clienteDTO: AlterarClienteDTO): Promise<Cliente> {
        await this.connection('cliente').where({'id': id.getValue()}).update({
            'nome': clienteDTO.nome,
            'documento': clienteDTO.documento
        });
        return await this.getById(id);
    }


}
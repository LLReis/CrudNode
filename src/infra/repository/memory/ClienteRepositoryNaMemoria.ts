import { Cliente } from "../../../model/Cliente";
import { ClienteRepository } from "../../../model/repositoy/ClienteRepository";
import { Uuid } from "../../../model/Uuid";


export class ClienteRepositoryNaMemoria implements ClienteRepository {
    
    getById(id: Uuid): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    
    private colecaoDeClientes: Array<Cliente> = []


    async save(cliente: Cliente): Promise<void> {
        this.colecaoDeClientes.push(cliente)
    }

    async getAll(): Promise<Cliente[]> {
        return this.colecaoDeClientes
    }

} 
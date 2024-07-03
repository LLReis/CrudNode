import { Cliente } from "../../../model/Cliente";
import { ClienteRepository } from "../../../model/repositoy/ClienteRepository";


export class ClienteRepositoryNaMemoria implements ClienteRepository {

    private colecaoDeClientes: Array<Cliente> = []


    async save(cliente: Cliente): Promise<void> {
        this.colecaoDeClientes.push(cliente)
    }

} 
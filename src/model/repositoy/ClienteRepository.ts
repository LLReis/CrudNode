import { AlterarClienteDTO } from "../../controller/dtos/AlterarClienteDTO";
import { Cliente } from "../Cliente";
import { Uuid } from "../Uuid";


export interface ClienteRepository {
    save(cliente: Cliente): Promise<void>
    getAll(): Promise<Array<Cliente>>
    getById(id: Uuid): Promise<Cliente>
    delete(id: Uuid): Promise<void>
    update(id: Uuid, clienteDTO: AlterarClienteDTO): Promise<Cliente>
}
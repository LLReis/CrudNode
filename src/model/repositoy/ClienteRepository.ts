import { Cliente } from "../Cliente";


export interface ClienteRepository {
    save(cliente: Cliente): Promise<void>
}
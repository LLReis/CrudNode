import { ClienteRepository } from "../model/repositoy/ClienteRepository";
import {Request, Response} from "express"
import { Uuid } from "../model/Uuid";

export class DeletarCliente {

    constructor(readonly repository: ClienteRepository){

    }

    async execute(request: Request, response: Response){
        let id: string|Uuid = request.params.id
        id = new Uuid(id);
        await this.repository.delete(id)
        response.status(204).json({})
    }
}
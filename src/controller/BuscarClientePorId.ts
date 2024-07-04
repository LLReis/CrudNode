import { ClienteRepository } from "../model/repositoy/ClienteRepository";
import {Request, Response} from "express"
import { Uuid } from "../model/Uuid";

export class BuscarClientePorId {

    constructor(readonly repository: ClienteRepository){

    }

    async execute(request: Request, response: Response){
        let id: string|Uuid  = request.params.id
        id = new Uuid(id)
        const cliente = await this.repository.getById(id)
        response.status(200).json({cliente})
    }
}
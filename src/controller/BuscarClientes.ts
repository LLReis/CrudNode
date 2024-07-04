import { ClienteRepository } from "../model/repositoy/ClienteRepository";
import {Request, Response} from "express"

export class BuscarClientes {

    constructor(readonly repository: ClienteRepository){

    }

    async execute(request: Request, response: Response){
        const colecaoDeClientes = await this.repository.getAll()
        response.status(200).json({colecaoDeClientes})
    }
}
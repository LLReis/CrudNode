import { Cliente } from "../model/Cliente";
import { ClienteRepository } from "../model/repositoy/ClienteRepository";
import {Request, Response} from "express"

export class CriarCliente {

    constructor(readonly repository: ClienteRepository){

    }

    async execute(request: Request, response: Response){
        const {nome, documento} = request.body
        const cliente = Cliente.create(nome, documento)
        await this.repository.save(cliente)
        response.status(201).json({cliente})
    }
}
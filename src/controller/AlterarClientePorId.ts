import { Cliente } from "../model/Cliente";
import { ClienteRepository } from "../model/repositoy/ClienteRepository";
import {Request, Response} from "express"
import { AlterarClienteDTO } from "./dtos/AlterarClienteDTO";

export class AlterarClientePorId {

    constructor(readonly repository: ClienteRepository){

    }

    async execute(request: Request, response: Response){
        const { id } = request.params
        const {nome, documento} = request.body
        let cliente = Cliente.create(nome, documento, id)
        const clienteDTO = new AlterarClienteDTO(cliente.getNome(), cliente.getDocumento().getValue())
        cliente = await this.repository.update(cliente.getId(), clienteDTO)
        response.status(200).json({cliente})
    }
}
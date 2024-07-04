import { Router, Request, Response } from "express"
import { ClienteRepositoryNaMemoria } from "./infra/repository/memory/ClienteRepositoryNaMemoria"
import { CriarCliente } from "./controller/CriarCliente"
import { BuscarClientes } from "./controller/BuscarClientes"
import { ClienteRepositoryDataBase } from "./infra/repository/database/ClienteRepositoryDataBase"
import { BuscarClientePorId } from "./controller/BuscarClientePorId"

const router = Router()

//const repository = new ClienteRepositoryNaMemoria()
const repository = new ClienteRepositoryDataBase()
const criarCliente = new CriarCliente(repository)
const ListaDeClientes = new BuscarClientes(repository)
const ClienteById = new BuscarClientePorId(repository)

router.post('/customer', (request: Request, response: Response) => {
    criarCliente.execute(request , response)
})

router.get('/customer', (request: Request, response: Response) => {
    ListaDeClientes.execute(request , response)
})

router.get('/customer/:id', (request: Request, response: Response) => {
    ClienteById.execute(request , response)
})

export{ router }
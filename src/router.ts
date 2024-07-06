import { Router, Request, Response } from "express"
import { ClienteRepositoryNaMemoria } from "./infra/repository/memory/ClienteRepositoryNaMemoria"
import { CriarCliente } from "./controller/CriarCliente"
import { BuscarClientes } from "./controller/BuscarClientes"
import { ClienteRepositoryDataBase } from "./infra/repository/database/ClienteRepositoryDataBase"
import { BuscarClientePorId } from "./controller/BuscarClientePorId"
import { DeletarCliente } from "./controller/DeletarCliente"
import { AlterarClientePorId } from "./controller/AlterarClientePorId"

const router = Router()

//const repository = new ClienteRepositoryNaMemoria()
const repository = new ClienteRepositoryDataBase();
const criarCliente = new CriarCliente(repository);
const listaDeClientes = new BuscarClientes(repository);
const clienteById = new BuscarClientePorId(repository);
const deletarClienteById = new DeletarCliente(repository);
const atualizarClienteById = new AlterarClientePorId(repository);

router.post('/customer', (request: Request, response: Response) => {
    criarCliente.execute(request , response);
})

router.get('/customer', (request: Request, response: Response) => {
    listaDeClientes.execute(request , response);
})

router.get('/customer/:id', (request: Request, response: Response) => {
    clienteById.execute(request , response);
})

router.delete('/cliente/:id',(request: Request, response: Response) => {
    deletarClienteById.execute(request, response);
})
router.patch('/cliente/:id',(request: Request, response: Response) => {
    atualizarClienteById.execute(request, response);
})


export{ router }
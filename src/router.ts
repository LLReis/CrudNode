import { Router, Request, Response } from "express"
import { ClienteRepositoryNaMemoria } from "./infra/repository/memory/ClienteRepositoryNaMemoria"
import { CriarCliente } from "./controller/CriarCliente"

const router = Router()

const repository = new ClienteRepositoryNaMemoria()
const criarCliente = new CriarCliente(repository)

router.post('/customer', (request: Request, response: Response) => {
    criarCliente.execute(request , response)
})

export{ router }
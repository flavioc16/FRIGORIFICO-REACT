import { Request, Response } from "express";

import { CreateClientService } from "../../services/client/CreateClientService";

class CreateClientController{
    async handle(req: Request, res: Response){

        const { name, reference, address, telephone, limit } = req.body;

        const createClientService = new CreateClientService();

        const client = await createClientService.execute({ 
            name, 
            reference, 
            address, 
            telephone, 
            limit 
        });

        return res.json(client);
    }
}

export { CreateClientController };
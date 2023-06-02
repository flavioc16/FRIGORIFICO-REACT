import {Request,  Response } from "express";

import { ListByClientPurchaseService } from "../../services/purchase/ListByClientPurchaseService";

class ListByClientPurchaseController{
    async handle(req: Request, res: Response){

        const client_id = req.query.client_id as string;

        const listByClientPurchaseService = new ListByClientPurchaseService();

        const purchase = await listByClientPurchaseService.execute({
            client_id
        });

        return res.json(purchase);
    }
}
 export { ListByClientPurchaseController };
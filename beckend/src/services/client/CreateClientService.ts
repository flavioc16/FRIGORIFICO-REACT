import prismaClient from "../../prisma";

interface ClientRequest{
    name: string;
    reference: string;
    address: string;
    telephone: string;
    limit: string
}

class CreateClientService{
    async execute({ name, reference, address, telephone, limit }: ClientRequest){

        const nameAlreadyExist = await prismaClient.client.findFirst({
            where:{
                name: name
            }
        })

        if(!name){
            throw new Error("Name incorrect")
        }
        if(!reference){
            throw new Error("Reference incorrect")
        }
        if(!address){
            throw new Error("Address incorrect")
        }
        if(!telephone){
            throw new Error("Telephone incorrect")
        }
        if(!limit){
            throw new Error("Limit incorrect")
        }

        if(nameAlreadyExist){
            throw new Error("Name already exists")
        }
        
        const client = await prismaClient.client.create({
            data:{
                name: name,
                reference: reference,
                address: address,
                telephone: telephone,
                limit: limit
            },
            select:{
                id: true,
                name: true,
                reference: true,
                address: true,
                telephone: true,
                limit: true
            }
        })

        return client;

    }
}

export { CreateClientService };
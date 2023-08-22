import { errors } from "../constants/error";
import { Address, IAddress } from "../models/Address";
import { Transaction } from "sequelize";

import validator from "validator";

export const address_services = {

    async store(data: IAddress, transaction: Transaction) {

        try {

            console.log("no service");
            console.log(data.user_id);

            const address = await Address.create({
                user_id: data.user_id,
                state: data.state,
                city: data.city,
                street: data.street,
                number: data.number
            },
            { transaction }
            );

            return {
                status: 201,
                success: {
                    title: "Endereço criado com sucesso.",
                    data: address
                }
            };

        } catch (error) {

            return {
                status: 400,
                error: {
                    title: errors.INVALID_DATA.title
                }
            };

        };

    },

    async findByUserId(user_id: number) {

        const address = await Address.findOne({
            where: {
                user_id: user_id
            }
        });

        return address;

    }

}
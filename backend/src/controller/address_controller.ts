import { address_services } from "../services/address_services";
import { Transaction } from "sequelize";

export const address_controller = {
  async store(req: any, res: any, transaction: Transaction) {

    try {
      const result = await address_services.store(req.body, transaction);
      return result;
    } catch (error) {
      console.error("Erro ao criar endereço:", error);
      return {
        status: 400,
        error: {
          title: "Erro ao criar endereço.",
        },
      };
    }
  },
};

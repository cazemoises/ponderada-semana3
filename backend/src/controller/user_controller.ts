import { user_services } from "../services/user_services";
import { Transaction } from "sequelize";

export const user_controller = {
  async store(req: any, res: any, transaction: Transaction) {

    try {
      const result = await user_services.store(req.body, transaction);
      req.body.id = result.success?.data?.id;
      return result;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return {
        status: 400,
        error: {
          title: "Erro ao criar usuário.",
        },
      };
    }
  },
  async login(req: any, res: any) {

    try {

      const response = await user_services.login(req.body);
      
      return res.status(response.status).json(response);

    } catch (error) {

      console.error("Erro ao criar usuário:", error);

      return res.status(500).json({
        status: 500,
        error: {
          title: "Erro interno do servidor."
        }
      })
      
    }
  },
  async findAll(req: any, res: any) {

    const response = await user_services.findAll();

    return res.status(response.status).json(response);

  }
};

import { user_services } from "../services/user_services";
import { Transaction } from "sequelize";

import { Request, Response } from 'express';

export const user_controller = {
  
  async store(req: Request, res: Response, transaction: Transaction) {

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
  async login(req: Request, res: Response) {

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
  async findAll(req: Request, res: Response) {

    const response = await user_services.findAll();

    return res.status(response.status).json(response);

  },
  async delete(req: Request, res: Response) {

    const user_id = parseInt(req.params.user_id);

    const response = await user_services.delete(user_id);

    return res.status(response.status).json(response);

  },
  async findById(req: Request, res: Response) {

    const response = await user_services.findById(parseInt(req.params.id));

    return res.status(response.status).json(response);

  },
  async update(req: Request, res: Response) {
    
    const response = await user_services.update(req.body);

    return res.status(response.status).json(response);

  }
};

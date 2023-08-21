import { Router } from "express";
import { user_controller } from "../controller/user_controller";
import { address_controller } from "../controller/address_controller";
import { sequelize } from "../config/pg"; // Importe a instância do Sequelize
import { Transaction } from "sequelize";

const router = Router();

router.get('/', user_controller.findAll);
router.post("/", async (req, res) => {
  const { userData, addressData } = req.body;

  const transaction = await sequelize.transaction();

  try {
    const userResult: any = await user_controller.store(req, res, transaction);

    if (userResult.status === 201) {
      const addressResult: any = await address_controller.store(req, res, transaction);

      if (addressResult.status === 201) {
        await transaction.commit();
        console.log("FOI")
        console.log(addressResult);
        console.log(userResult);
        
        
        res.status(201).json({
            status: 201,
            success: {
                title: "Usuário e endereço criados com sucesso.",
                data: {
                    user: userResult.success.data,
                    address: addressResult.success.data,
                }
          }
        });
      } else {
        await transaction.rollback();
        console.log("FOI")
        console.log(addressResult);
        console.log(userResult);
        res.status(400).json({ 
            status: 400,
            error: {
                title: "Erro com os dados do endereço."
            }
        });
      }
    } else {
      await transaction.rollback();
      console.log("FOI")
      console.log(userResult);
      res.status(400).json({ 
        status: 400,
        error: {
            title: "Erro com os dados do usuário."
        }
    });
    }
  } catch (error) {
    await transaction.rollback();
    console.error("Erro com os dados do usuário e endereço:", error);
    res.status(500).json({ 
        status: 400,
        error: {
            title: "Erro com os dados do usuário e endereço.",
            failure: error
        }
    });
  }
});

router.post('/login', user_controller.login)

export default router;

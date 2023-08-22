import { Router } from "express";
import { sequelize } from "../config/pg";
import { Transaction } from "sequelize";
import { user_controller } from "../controller/user_controller";
import { address_controller } from "../controller/address_controller";

const router = Router();

router.get("/", user_controller.findAll);
router.get('/:id', user_controller.findById);
router.delete('/:user_id', user_controller.delete);
router.patch('/', user_controller.update);
router.post("/", async (req, res) => {

    const transaction = await sequelize.transaction();

    try {

        const userResult = await user_controller.store(req, res, transaction);

        console.log("AQUI");
        
        const user_id = userResult.success?.data.id;

        req.body.user_id = user_id;

        if (userResult.status === 201) {
            const addressResult = await address_controller.store(req, res, transaction);

            if (addressResult.status === 201) {
                await transaction.commit();

                res.status(201).json({
                    status: 201,
                    success: {
                        title: "Usuário e endereço criados com sucesso.",
                        data: {
                            user: userResult.success?.data,
                            address: addressResult.success?.data,
                        },
                    },
                });
            } else {
                await transaction.rollback();
                res.status(400).json({
                    status: 400,
                    error: {
                        title: "Erro com os dados do endereço.",
                    },
                });
            }
        } else {
            await transaction.rollback();
            res.status(400).json({
                status: 400,
                error: {
                    title: userResult.error?.title,
                },
            });
        }
    } catch (error) {
        await transaction.rollback();
        console.error("Erro com os dados do usuário e endereço:", error);
        res.status(500).json({
            status: 500,
            error: {
                title: "Erro com os dados do usuário e endereço.",
                failure: error,
            },
        });
    }
});

router.post("/login", user_controller.login);

export default router;
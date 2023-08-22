import { errors } from "../constants/error";
import { User, IUser } from "../models/User";
import { Transaction } from "sequelize";
import { hashSync, compareSync } from 'bcrypt';

import validator from "validator";
import { Address } from "../models/Address";

export const user_services = {

    async store(data: IUser, transaction: Transaction) {

        try {

            const existing_user = await User.findOne({
                where: {
                    username: data.username
                }
            });

            if (existing_user) {

                return {
                    status: 400,
                    error: {
                        title: "Nome de usuário em uso."
                    }
                }

            }

            const user = await User.create({
                username: data.username,
                first_name: data.first_name,
                last_name: data.last_name,
                age: data.age,
                birthdate: data.birthdate,
                password: hashSync(data.password, 10)
            },
            { transaction });

            return {
                status: 201,
                success: {
                    title: "Usuário criado com sucesso.",
                    data: user
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

    async login(data: { username: string, password: string }) {

		try {

			const user_found = await User.findOne({
				where: { username: data.username },
				attributes: ['username', 'password']
			});

            console.log(user_found?.username);

            console.log(data.username + " " + data.password)

			if (!user_found) {

                return {
					status: 404,
					error: {
						title: "Usuário não encontrado."
					}
				};

			}

            console.log("vai achar");
            
            console.log(user_found.password + " " + data.password);

            console.log(compareSync(data.password, user_found.password))

            if (!compareSync(data.password, user_found.password)) {

                return {
                    status: 401,
                    error: {
                        title: "Senha incorreta."
                    }
                }

            }

			return {
				status: 200,
				success: {
					title: "Autenticado com sucesso."
				}
			};

		} catch (error) {

			return {
				status: 400,
				error: {
					title: errors.INVALID_DATA.title
				}
			};

		}

	},

    async findAll() {

        const users = await User.findAll({
            include: "address"
        });

        return {
            status: 200,
            success: {
                title: "Usuários encontrados com sucesso.",
                data: users
            }
        };

    },

    async findById(id: number) {

        const user = await User.findByPk(id, {
            include: "address"
        });

        return {
            status: 200,
            success: {
                title: "Usuário encontrado com sucesso.",
                data: user
            }
        };

    },

    async delete(user_id: number) {
        
        await Address.destroy({
            where: {
                user_id: user_id
            }
        });

        await User.destroy({
            where: { 
                id: user_id
            }
        });

        return {
            status: 204
        };

    },

    async update(data: IUser) {

        const user = await User.findByPk(data.id);

        await user?.update({
            first_name: data.first_name || user.first_name,
            last_name: data.last_name || user.last_name,
            username: data.username || user.username,
            age: data.age || user.age,
            birthdate: data.birthdate || user.birthdate,
            password: hashSync(data.password, 10) || user.password
        });

        await user?.save();

        return {
            status: 204
        };

    }

}
import { errors } from "../constants/error";
import { User, IUser } from "../models/User";
import { Transaction } from "sequelize";
import { hashSync, compareSync } from 'bcrypt';

import validator from "validator";

export const user_services = {

    async store(data: IUser, transaction: Transaction) {

        try {

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

        const users = await User.findAll();

        return {
            status: 200,
            success: {
                title: "Usuários encontrados com sucesso.",
                data: users
            }
        };

    }

}
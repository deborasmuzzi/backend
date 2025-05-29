const { default: mongoose } = require("mongoose");
const {z} = require ("zod");
const { validateRequest } = require ("zod-express-middleware");


const create = validateRequest({ 
    body: z.object({ 
        nome: z.string({required_error: "O nome é obrigatório"})
        .min(2, {
            message: "O nome deve ter no mínimo dois caracteres"
        })
        .max(60, {
            message: "O nome pode ter no máximo 60 caracteres"
        }),


        email : z
        .string({required_error: "O email é obrigatório"})
        .email({required_error: "O email é inválido"}),

        senha : z.string({required_error: "A senha é obrigatória"})
        .min(2, {
            message: "A senha deve ter no mínimo dois caracteres"
        }),

        senha2: z.string({required_error: "Confirme sua senha"})
        .min(2, {
            message: "Confirme sua senha"
        }),
        cargo : z.string({required_error: "O cargo é obrigatório"})
        .min(2, {
            message: "O cargo é obrigatório"
        }),

    }),
});

const destroy = validateRequest ({
    params: z.object({
        id: z.custom (mongoose.isValidObjectId, "O id não é válido"),
    }),
});

const update = validateRequest ({
    body: z.object ({
        nome: z.string().optional(),
        email : z
        .string()
        .email({required_error: "O email é inválido"}).optional(),
        senha : z.string().optional(),
        senha2 : z.string().optional(),
        cargo : z.string().optional(),
    }),
    params: z.object({
        id: z.custom (mongoose.isValidObjectId, "O id não é válido"),
    }),
})

module.exports = { create, destroy, update, };


import { body, param, validationResult } from "express-validator";

const validateUser = [
    body("name")
        .isString().withMessage("El nombre debe ser una cadena de texto")
        .trim()
        .notEmpty().withMessage("El nombre es requerido")
        .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),

    body("email")
        .trim()
        .notEmpty().withMessage("El email es requerido")
        .isEmail().withMessage("El correo electrónico no es válido"),
];

const validateId = [
    param("id")
        .notEmpty().withMessage("El id es requerido")
        .isInt({ gt: 0 }).withMessage("El id debe ser un número entero positivo"),
];

function checkValidation(rules) {
    return async (req, res, next) => {
        const chains = Array.isArray(rules) ? rules : [rules];

        for (let chain of chains) {
            await chain.run(req);
        }

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }

        next();
    };
}

export { validateUser, validateId, checkValidation };
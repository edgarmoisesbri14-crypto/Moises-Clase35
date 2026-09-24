import { body, param, validationResult } from "express-validator";

const validateProduct = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('El nombre es obligatorio')
        .isLength({ min: 2 })
        .withMessage('El nombre debe tener al menos 2 caracteres'),

    body('price')
        .notEmpty()
        .withMessage('El precio es obligatorio')
        .isFloat({ gt: 0 })
        .withMessage('El precio debe ser un numero mayor a 0'),

    body('description')
        .isLength({ max: 100 })
        .withMessage('La descripción no puede tener mas de 100 caracteres')
];

const validateId = [
    param('id')
        .notEmpty()
        .withMessage("el id es requerido")
        .isMongoId()
        .withMessage("el id debe ser un id valido")
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

export { checkValidation, validateId, validateProduct };
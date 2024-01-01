import Joi from 'joi';

const validar = producto => {
    const productoSchema = Joi.object({
        palabra: Joi.string().min(2).max(20).required(),
    });

    const { error } = productoSchema.validate(producto);
    return error;
};

export default validar;

const express = require('express');

const CostumerService = require('./../services/costumer.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('./../schemas/costumer.schema');

const router = express.Router();
const service = new CostumerService();

router.get('/', async (req, res, next) => {
    try {
        const customers = await service.find();
        res.json(customers);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const costumer = await service.findOne(id);
            res.json(costumer);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
    validatorHandler(createCustomerSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newCostumer = await service.create(body);
            res.status(201).json(newCostumer);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    validatorHandler(updateCustomerSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const costumer = await service.update(id, body);
            res.json(costumer);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            await service.delete(id);
            res.status(201).json({ id });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;

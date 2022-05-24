const express = require("express");
const router = express.Router();
const Cable = require('../schemas/cable')

router.post('/missing', async (req, res) => {

    const { id, quantity, psuModel, instructions, properties } = req.body.product
    const orderNumber = req.body.orderNumber

    const cable = await Cable.findOne({ id: id })

    if (!cable) {
        try {
            const cableAdded = await Cable.create({
                orderNumber: orderNumber,
                quantity: quantity,
                buildInstructions: instructions,
                psuModel: psuModel,
                id: id,
                properties: properties,

            })
            if (cableAdded) {
                res.json({ success: true, message: 'Cable Added to Missing List.' })
            }
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            const cableRemoved = await Cable.deleteOne({
                id: id
            })
            if (cableRemoved) {
                res.json({ success: true, message: 'Cable removed from missing list.' })
            }
        } catch (error) {
            console.log(error)
        }
    }
})

module.exports = router;
const keys = require('../config/dev');
const stripe = require('stripe')(keys.STRIPE_SK);

const saySomething = async (req, res, next) => {

    const charges = await stripe.charges.list({
        limit: 3,
    });
    
    res.status(200).json({
        body: charges.data[0].id
    });
};

module.exports.saySomething = saySomething;
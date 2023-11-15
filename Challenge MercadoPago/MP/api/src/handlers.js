require("dotenv").config();
const {MercadoPagoConfig, Preference} = require("mercadopago");
const {ACCESS_TOKEN} = process.env;

// VERSION 1.0
// const mercadopago = require("mercadopago");
// mercadopago.configure({
//   access_token: ACCESS_TOKEN,
// });

// VERSION 2.0

const client = new MercadoPagoConfig({
  accessToken: ACCESS_TOKEN,
});

const payment = new Preference(client);
// funcion de agregar
const createOrder = async (req, res) => {
  try {
    // la info se recibe como un objeto individual
    const {title, description, image, price, quantity} = req.body;

    let preference = {
      body: {
        items: [
          {
            title: title,
            quantity: quantity,
            unit_price: price,
            currency_id: "ARG",
            picture_url: image,
            description: description,
          },
        ],

        back_urls: {
          failure: "http://localhost:3001/failure",
          pending: "http://localhost:3001/pending",
          success: "http://localhost:3001/success",
        },
      },
    };

    const response = await payment.create(preference);

    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const successfulPurchase = (req, res) => {
  try {
    const {payment_id} = req.query;
    // almaceno el id de la compra al usuario en DB
    console.log(payment_id);

    res.status(200).redirect(`http://localhost:5173`);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {createOrder, successfulPurchase};

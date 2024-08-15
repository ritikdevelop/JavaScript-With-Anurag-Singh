const express = require("express");
const bodyParser = require("body-parser");
const stripe =
  require(spk_test_51PYS6jErnXjLBYQHC3lnLCwEBa6BblD7msnydZc3JiqmgUY5wMTTJCOfBAf1z6Gcbi64iKi1gPLadxHSOyFJBdrO00EDxka1HD)(
    sk_test_51PYS6jErnXjLBYQHaTCB9TLb4AK5O0QjJaKfbhAeFM39yp0rI3LHiTAeM2MKyXAzmkR2QMUrFB5HlkOCukQ3tszV00SomkbLm7
  );
const app = express();
const port = 5500;

app.use(bodyParser.json());

app.post("/charge", async (req, res) => {
  const token = req.body.token;

  try {
    const charge = await stripe.charges.create({
      amount: 2000, // Amount in sent (for example, $20.00)
      currency: "usd",
      source: token,
      description: "Example charge",
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

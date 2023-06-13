//Payment intent
app.post("/create-payment-intent", async (req, res) => {
    const { price } = req.body;
    const amount = parseInt(price * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }); 
  //payment
  app.get("/classesCarts/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await classesCartCollection.findOne(query);
    res.send(result);
  });
  
  
  app.put("/payments/:id", async (req, res) => {
    const payment = req.body;
    const id = req.params.id;
    const updateDoc = {
      $set: payment,
    };
    const query = { _id: new ObjectId(id) };
    const options = { upsert: true };
    // console.log(payment);
    const result = await classesCartCollection.updateOne(query, updateDoc, options);
    res.send(result);
  });
  
  app.put("/classUpdates/:id", async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const updateDoc = {
      $set: data,
    };
    const query = { _id: new ObjectId(id) };
    const options = { upsert: true };
    // console.log(payment);
    const result = await classesCollection.updateOne(query, updateDoc, options);
    res.send(result);
  });
  
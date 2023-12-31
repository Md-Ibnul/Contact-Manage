const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;


// middleware
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
  }
  app.use(cors(corsOptions))
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3rhi256.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const contactCollection = client.db('contact-manager').collection('tasks');

    // Post contact
    app.post('/allContact', async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();
      if(!body){
        return res.status(404).send({message: "Data not found, Not Valid Request."})
      }
      const result = await contactCollection.insertOne(body);
      res.send(result)
    })

    // Get all contact
    app.get('/allContact', async(req, res) => {
        const cursor = contactCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    // Edit Contact
    app.put('/allContact/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updatedContact = req.body;
      const updateDoc = {
        $set: {
          firstName: updatedContact.firstName,
          lastName: updatedContact.lastName,
          email: updatedContact.email,
          status: updatedContact.status,
        }
      };
      const result = await contactCollection.updateOne(filter, updateDoc, options);
      res.send(result)
    });

    // Delete Contact
    app.delete('/allContact/:id', async (req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await contactCollection.deleteOne(query);
        res.send(result);
      })

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("Contact is Running")
});

app.listen(port, () => {
    console.log(`Contact is running on ${port}`);
})
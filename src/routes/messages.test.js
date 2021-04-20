const messagesRouter = require('./messages');
describe('messages.js', () => {
  it('should be defined', () => {
    expect(messagesRouter).toBeDefined();
  });
});

const bodyParser = require('body-parser');
const express = require("express");
const request = require('supertest');
const app = express();
app.use(bodyParser.json())
app.use("/messages", messagesRouter);

describe("testing-server-routes", () => {
  it("GET / - success", async () => {
    const body = await request(app).get("/messages");
    expect(body).toEqual(expect.arrayContaining([]));
  });

  let lastId;
  it("POST / - success", async () => {
    const body = await request(app).post("/messages").send({ message:"testing1", user:"testinguser1"});
    lastId = JSON.parse(body.text).id;
    expect(JSON.parse(body.text)).toEqual(expect.objectContaining({
      id: expect.any(Number),
      message: expect.any(String),
      user: expect.any(String),
    }));
  });

  it("GET /:id - success", async () => {
    const body = await request(app).get("/messages/"+lastId);
    expect(JSON.parse(body.text)).toEqual(expect.objectContaining({
      id: expect.any(Number),
      message: expect.any(String),
      user: expect.any(String),
    }));
  });

  it("DELETE /:id - success", async () => {
    const body = await request(app).delete("/messages/"+lastId);
    expect(body.text).toEqual("Entry deleted");
  });
});


"use strict";

const supertest = require("supertest");
const { server } = require("../src/server.js");
const request = supertest(server);

describe("express server", () => {
  it("should give status 404 on a bad route", async () => {
    // arrange
    let route = "/food";
    let status = 404;
    // act
    const res = await request.get(route);
    // assert
    expect(res.status).toBe(status);
  });

  it("should give status 404 on a bad method", async () => {
    // arrange
    let route = "/food";
    let status = 404;
    // act
    const res = await request.delete(route);
    // assert
    expect(res.status).toBe(status);
  });



  it("should give status 201 and return a food object", async () => {
    // arrange
    let route = "/food";
    let status = 201;
    let objJson = {
      "foodname": "pizza",
      "foodtype": "italan"
    }
    let obj = {
      foodname: "pizza",
      foodtype: "italan"
    }
    // act
    const res = await request.post(route, objJson);
    // assert
    expect(res.status).toBe(status);
    expect(res.data).toEqual(obj);
  });
  it("should give status 200 and receive an object", async () => {
    // arrange
    let route = "/food";
    let status = 200;
    // act
    const res = await request.get(route);
    // assert
    expect(res.status).toBe(status);
    expect(typeof res.data).toEqual("object");
  });
  it("should give status 201 and receive an object", async () => {
    // arrange
    let route = "/food/1";
    let status = 201;
    // act
    const res = await request.get(route);
    // assert
    expect(res.status).toBe(status);
    expect(typeof res.data).toEqual("object");
  });
  it("should give status 201 and receive an object", async () => {
    // arrange
    let route = "/food/1";
    let status = 200;
    let objJson = {
      "foodName": "bread",
      "foodDescription": "great"
    }
    let obj = {
        foodname: "pizza",
        foodtype: "italan"
    }
    // act
    const res = await request.put(route, objJson);
    // assert
    expect(res.status).toBe(status);
    expect(typeof res.data).toEqual(obj);
  });
  it("should give status 201 and receive an object", async () => {
    // arrange
    let route = "/food/1";
    let status = 204;
    // act
    const res = await request.delete(route);
    // assert
    expect(res.status).toBe(status);
    expect(typeof res.data).toEqual("undefined");
  });


});
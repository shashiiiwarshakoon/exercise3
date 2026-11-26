const test = require("node:test");
const assert = require("node:assert");
const app = require("../app");

let server;
let baseUrl;

test.before(function() {
    server = app.listen(0);
    baseUrl = "http://localhost:" + server.address().port;
});

test.after(function() {
    server.close();
});

test("home page returns Hello World", async function() {
    const res = await fetch(baseUrl + "/");
    assert.strictEqual(res.status, 200);
    assert.strictEqual(await res.text(), "Hello World");
});

test("add route adds two numbers", async function() {
    const res = await fetch(baseUrl + "/add/2/3");
    const data = await res.json();
    assert.strictEqual(data.result, 5);
});
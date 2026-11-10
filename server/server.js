import http from "http";
import fetchItems from "./fetch_items.js";

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const currentServer = os.hostname();
    res.end("Hello from Docker on " + currentServer);
    return;
  }

  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK");
    return;
  }

  if (req.url === "/items") {
    fetchItems()
      .then((items) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(items));
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});

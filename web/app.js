import http from "http";

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Docker");
    return;
  }

  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK");
    return;
  }
  const items = [];

  if (req.url === "/items") {
    items.push(...fetchItems())
      .then((items) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(items));
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      });
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});

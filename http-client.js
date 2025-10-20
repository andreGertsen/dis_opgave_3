const http = require("http");
/*
const ping = (targetHost) => {
  const startTime = Date.now();
  console.log("Sent ping");
  const req = http.get(targetHost, (res) => {
    res.on("data", (chunk) => {
      console.log("Received", chunk.toString());
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      console.log("GET request to", targetHost, "took", responseTime, "ms");   
      console.log("Response cookie header:", res.headers["set-cookie"]);
    });
  });

  req.on("error", (error) => {
    console.error("Error:", error.message);
  });
};

for(let i = 0; i < 1; i++){
  // Kald funktionen ping() med parameter
ping("http://207.154.231.254:8000/ping");  
}*/

const ping = (host) => {
  const url = `${host}`;
  const startTime = Date.now();
  console.log("Sent ping to", url);

  const req = http.get(url, (res) => {
    res.once("data", (chunk) => { 
      const time = Date.now() - startTime;
      console.log(`Time to first byte: (took ${time}ms)`);
    });
  });

  req.on("error", err => console.error("Error:", err.message));
};

ping("http://localhost:8000/ping");




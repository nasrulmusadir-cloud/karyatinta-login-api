const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// Simpan user secara sementara (mock database)
const users = [];

// Endpoint REGISTER
app.post("/auth/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(409).json({ message: "Email already registered." });
  }

  users.push({ email, password });
  return res.status(201).json({ message: "Registration successful", email });
});

// Endpoint LOGIN
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    return res.status(200).json({ message: "Login success", email });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/", (req, res) => {
  res.send("Karya Tinta Login API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
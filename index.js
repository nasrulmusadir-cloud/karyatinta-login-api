// index.js (lanjutan dari login sebelumnya)
const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// Dummy user storage
const users = [
  { email: "testuser@example.com", password: "123456" } // user default untuk login
];

// Endpoint login
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    return res.json({ message: "Login success", email });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
});

// Endpoint register
app.post("/auth/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const exists = users.find((u) => u.email === email);
  if (exists) {
    return res.status(409).json({ message: "Email already registered" });
  }

  users.push({ email, password });
  return res.json({ message: "Register success", email });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
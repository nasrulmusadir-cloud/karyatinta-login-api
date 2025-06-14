const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// LOGIN
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    return res.status(200).json({
      message: "Login success",
      email,
    });
  } else {
    return res.status(400).json({
      message: "Login failed. Email and password required.",
    });
  }
});

// REGISTER (baru ditambahkan)
app.post("/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    return res.status(201).json({
      message: "Register success",
      name,
      email,
    });
  } else {
    return res.status(400).json({
      message: "Register failed. Name, email, and password required.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
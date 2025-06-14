const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    return res.status(200).json({ message: "Login success", email });
  } else {
    return res.status(400).json({ error: "Missing email or password" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
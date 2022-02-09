const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "xxxxxxx@gmail.com",
    pass: "xxxxxxx",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const nro = req.body.nro;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "javieritroxx@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
            <p>Fono: ${nro}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR, intentelo más tarde" });
    } else {
      res.json({ status: "Mensaje enviado" });
    }
  });
});
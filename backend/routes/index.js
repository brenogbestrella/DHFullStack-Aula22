var express = require("express");
var bcrypt = require("bcryptjs");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.cookies);
  res.render("index", { title: "Express", darkMode: req.session.darkMode });
});

router.get("/dark-mode", function (req, res) {
  req.session.darkMode = !req.session.darkMode;

  res.cookie("darkMode", req.session.darkMode, {
    maxAge: 86400,
  });
  res.redirect("/");
});

router.get("/desafio24", function (req, res) {
  req.session.dados = {
    email: "grupo5@gmail.com",
    senha: "senhagrupo5",
  };
  let dadosSalvos = req.session.dados;
  let hash = bcrypt.hashSync("senhagrupo5", 10);

  if (bcrypt.compareSync("senhagrupo5", hash)) {
    res.json(dadosSalvos);
  } else {
    res.json("Usuário ou senha incorretos");
  }
});

router.post("/usuario/login", function (req, res) {
  req.session.dados = {
    email: "grupo5@gmail.com",
    senha: "senhagrupo5",
  };
  let dadosSalvos = req.session.dados;
  let hash = bcrypt.hashSync("senhagrupo5", 10);

  if (
    typeof re.session.dados.email !== "undefined" &&
    bcrypt.compareSync(re.session.dados.senha, hash) === true
  ) {
    req.session = dadosSalvos;
    return res.render("Ok");
  } else {
    return res.redirect("/usuario/login", 403);
  }
});

// router.get('/legendaries')

module.exports = router;

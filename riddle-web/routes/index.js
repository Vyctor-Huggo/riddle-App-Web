var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/01', (req, res) => {
  res.render('index', {
    title: "O Primeiro",
    mainText: "1 wxyz tuv ghi",
    mainImage: "/images/g-o.svg",
    altMainImg: "Image",
    footerText: "© 2025 Riddle App",
    response: "na pior em paris e londres",
    tip: "dica:",
    nextPage: "/riddle/1"

  });
});

router.get('/1', (req, res) => {
  res.render('index', {
    title: "Onde esta o coelho?",
    mainText: "<div> Título </div>",
    mainImage: "/images/2.webp",
    altMainImg: "1010 111 10 0010 00 01 10 1 0 110011 * 01 00 10 100 01 * 0 000 0110 0 010 111 * 111 * 100 00 01",
    footerText: "© 2025 Riddle App",
    response: "desfigurado",
    tip: "dica: é como magica",
    nextPage: "/riddle/2"

  });
});

router.get('/2', (req, res) => {
  res.render('index', {
    title: "Samuel Ratchett",
    mainText: "o que importa e que voce esta bem nem que seja, por poucos segundos antes que o mundo, caia sobre você",
    altMainImg: "Oi, tudo bem?",
    mainImage: "/images/1986.png",
    footerText: "© 2025 Riddle App",
    response: "na pior em paris e londres",
    tip: "dica:",
    nextPage: "/riddle/3"

  });
});
  
router.get('/3', (req, res) => {
  res.render('index', {
    title: "O Primeiro",
    mainText: "1 wxyz tuv ghi",
    mainImage: "/images/g-o.svg",
    footerText: "© 2025 Riddle App",
    response: "na pior em paris e londres",
    tip: "dica:",
    nextPage: "/riddle/success"

  });
});

//fibonacci até o 7

module.exports = router;

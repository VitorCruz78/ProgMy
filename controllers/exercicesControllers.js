const express = require('express');
const router = express.Router();


router.get('/introducao-a-programacao', (req, res) => {
   res.render('exercices/introducao', { 
      title: 'Exercícios | Introdução a Programação'
   });
});

router.get('/operadores-e-expressoes', (req, res) => {
   res.render('exercices/operadores', { 
      title: 'Exercícios | Operadores e Expressões'
   });
});

router.get('/programacao-em-c', (req, res) => {
   res.render('exercices/programacao_em_c', { 
      title: 'Exercícios | Programação em C'
   });
});

router.get('/expressoes-condicionais', (req, res) => {
   res.render('exercices/expressoes_condicionais', { 
      title: 'Exercícios | Expressões Condicionais'
   });
});

router.get('/estrutura-de-repeticao', (req, res) => {
   res.render('exercices/estrutura_de_repeticao', { 
      title: 'Exercícios | Estrutura de Repetição'
   });
});


module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/boas-vindas', (req, res) => {
   res.render('content/boas_vindas', { 
      title: 'ProgMy | Boas Vindas'
   });
});

router.get('/introducao-a-programacao', (req, res) => {
   res.render('content/introducao', { 
      title: 'ProgMy | Introdução a Programação',
      link_exercices : '/exercicios/introducao-a-programacao'
   });
});

router.get('/operadores-e-expressoes', (req, res) => {
   res.render('content/operadores', { 
      title: 'ProgMy | Operadores e Expressões',
      link_exercices : '/exercicios/operadores-e-expressoes'
   });
});

router.get('/programacao-em-c', (req, res) => {
   res.render('content/programacao_em_c', { 
      title: 'ProgMy | Estrutura em C',
      link_exercices : '/exercicios/programacao-em-c'
   });
});

router.get('/expressoes-condicionais', (req, res) => {
   res.render('content/expressoes-condicionais', { 
      title: 'ProgMy | Expressões Condicionais',
      link_exercices : '/exercicios/expressoes-condicionais '
   });
});

router.get('/estrutura-de-repeticao', (req, res) => {
   res.render('content/estrutura_de_repeticao', { 
      title: 'ProgMy | Estrutura de Repetição',
      link_exercices : '/exercicios/estrutura-de-repeticao'
   });
});



module.exports = router;
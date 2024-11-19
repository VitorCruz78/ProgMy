const express = require('express');
const path = require('path');
const app = express();
const routersControllers = require('./controllers/routersControlers');
const contentControllers = require('./controllers/contentControlles');
const exercicesControllers = require('./controllers/exercicesControllers');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use("/", routersControllers);
app.use("/conteudo", contentControllers);
app.use("/exercicios", exercicesControllers);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

import { error } from 'console';
import { createApp } from './app.js ';
const PORT = process.env.PORT || 3000;
createApp()
    .then(app => app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    }))
    .cath(err => {
        console.error('Falha ao iniciar app:', error)
    });
import express from 'express';

import quilomboCardsRoutes from './src/routes/quilomboCardsRoutes.js';
import quilomboInfoRoutes from './src/routes/quilomboInfoRoutes.js';
import quilomboFontRoutes from './src/routes/quilomboFontRoutes.js';
import relatosRoutes from './src/routes/relatosRoutes.js';
import loginRoutes from './src/routes/loginRoutes.js';

const app = express();

app.use(express.json());

// Quilombos
app.use('/api/quilombos/cards', quilomboCardsRoutes);
app.use('/api/quilombos', quilomboInfoRoutes);

// Fontes
app.use('/api/fontes', quilomboFontRoutes);

// Autenticação
app.use('/api/auth', loginRoutes);

// Relatos
app.use('/api/relatos', relatosRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
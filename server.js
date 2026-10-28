import express from 'express';

import quilomboCardsRoutes from './src/routes/quilomboCardsRoutes.js';
import quilomboInfoRoutes from './src/routes/quilomboInfoRoutes.js';
import quilomboFontRoutes from './src/routes/quilomboFontRoutes.js';

const app = express();

app.use(express.json());

app.use('/quilombocards', quilomboCardsRoutes);

app.use('/quilomboinfo', quilomboInfoRoutes);

app.use('/quilombofontes', quilomboFontRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
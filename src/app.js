import express from 'express';
import { prismaClient } from '../prisma/prisma.js';
import { usuarioRouter } from './usuarios.js';

export const app = express()
app.use(express.json())

app.use(usuarioRouter);

app.listen(3000, () => console.log("Api rodandos"))

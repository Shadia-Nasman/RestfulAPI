import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json(messages);
});

router.post('/', (req, res) => {
  users.push({ id: messages.length, author: req.context.me, ...req.body });
  res.json(messages);
});

export default router;

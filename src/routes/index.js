const { Router, json } = require('express');
const router = Router();

router.get('/', (req, res) => res.json({ message: 'Hello world!' }));
router.get('/test', (req, res) => res.json({ message: 'this is a test!' }));

module.exports = router
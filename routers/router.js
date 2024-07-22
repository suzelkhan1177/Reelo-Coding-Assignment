const express = require('express');
const router = express.Router();
const { generateQuestionPaper } = require('../controllers/controller');


router.post('/generate-paper', (req, res) => {
    const { totalMarks, distribution } = req.body;

    if (!totalMarks || !distribution) {
        return res.status(400).json({ error: 'Total marks and distribution are required' });
    }

    try {
        const questionPaper = generateQuestionPaper(totalMarks, distribution);
        res.status(200).json(questionPaper);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

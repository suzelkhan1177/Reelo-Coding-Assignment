const questions = require('../data');

function generateQuestionPaper(totalMarks, distribution) {
    const { Easy, Medium, Hard } = distribution;
    
    const easyMarks = totalMarks * (Easy / 100);
    const mediumMarks = totalMarks * (Medium / 100);
    const hardMarks = totalMarks * (Hard / 100);

    const result = {
        Easy: getQuestionsByDifficulty('Easy', easyMarks),
        Medium: getQuestionsByDifficulty('Medium', mediumMarks),
        Hard: getQuestionsByDifficulty('Hard', hardMarks)
    };

    return result;
}

function getQuestionsByDifficulty(difficulty, targetMarks) {
    const filteredQuestions = questions.filter(q => q.difficulty === difficulty);
    let totalMarks = 0;
    const selectedQuestions = [];

    for (const question of filteredQuestions) {
        if (totalMarks + question.marks <= targetMarks) {
            selectedQuestions.push(question);
            totalMarks += question.marks;
        }
    }

    return selectedQuestions;
}

module.exports = { generateQuestionPaper };

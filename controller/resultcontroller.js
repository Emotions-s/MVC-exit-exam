const feedback = require('../module/feedback');

const render = async (req, res) => {
    res.render('result', {
        title: 'result',
    });
}

module.exports = {
    render,
}
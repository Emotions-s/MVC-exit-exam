const feedback = require('../model/feedback');

// render index
const render = async (req, res) => {
    res.render('index', {
        title: 'home',
    });
}

// insert new feedback
const newFeedback = async (req, res) => {

    // get requet data
    const data = req.body;

    // use for store error
    let error = [];

    // validate data
    if (!data.firstname) {
        error.push("No firstname");
    }
    if (!data.lastname) {
        error.push("No lastname");
    }
    if (!data.email) {
        error.push("No email");
    }
    if (!data.feedback) {
        error.push("No feedback");
    }

    // check any error
    if (error.length > 0) {
        res.render('result', {
            title: 'result',
            error: error,
        });
        return;
    }

    // insert to db
    await feedback.newFeedback(data.firstname, data.lastname, data.email, data.feedback);

    // render result
    res.render('result', {
        title: 'result',
        error: error,
    });

}

module.exports = {
    render,
    newFeedback
}
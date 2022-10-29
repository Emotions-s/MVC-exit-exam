const feedback = require('../model/feedback');

// render admin
const render = async (req, res) => {

    // get data from db
    const data = await feedback.getAllfeedback();

    // render admin page
    res.render('admin', {
        title: 'admin',
        data: data,
    });
}

// update status admin
const updateStatus = async (req, res) => {

    // get request data
    const data = req.body;

    // validata data
    if (!data.id || !data.status) {
        res.redirect('/admin');
        return;
    }

    // update to db => model
    await feedback.updateStatus(data.id, data.status);

    res.redirect('/admin');
}

module.exports = {
    render,
    updateStatus,
}
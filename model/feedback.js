const db = require('../util/dbconnector');

class feedback extends db {
    constructor() {
        super();
    }

    // get all feedback
    static async getAllfeedback() {
        let data = [];
        try {
            // update date > 7
            await this.UpdateInvalidDate();

            // get data from db
            data = await db.select('*')
                .from('feedback')
                .orderByRaw(`CASE
                                WHEN status = 'Escalate' then 1
                                WHEN status = 'Open' then 2
                                WHEN status = 'Close' then 3
                                END ASC
                        `);
        }
        catch (error) {
            console.log(error)
        }
        return data;
    }

    // add new feedback
    static async newFeedback(fname, lname, email, feedback) {
        try {
            // try to insert to db
            await db('feedback').insert({
                'f_name': fname,
                'l_name': lname,
                'email': email,
                'feedback': feedback,
                'status': 'Open',
            });
        } catch (error) {
            console.log(error)
        }
    }

    // update Status by id
    static async updateStatus(id, status) {
        try {
            // try to update to db
            await db('feedback')
                .update({ 'status': status })
                .where({ 'id': id });
        } catch (error) {
            console.log(error)
        }
    }

    // update status that > 7 days
    static async UpdateInvalidDate() {
        try {
            // try to update to db
            await db('feedback')
                .update({ 'status': "Close" })
                .whereRaw('time_stamp < now() - INTERVAL 7 day');
        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = feedback;
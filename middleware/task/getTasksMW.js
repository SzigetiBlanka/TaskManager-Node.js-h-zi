/**
 * Load all befott from the database
 * The result is saved to res.locals.tasks
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TaskModel = requireOption(objectrepository, 'TaskModel');

    return function (req, res, next) {
        TaskModel.find({}, (err, tasks) => {
            if (err) {
                return next(err);
            }

            res.locals.tasks = tasks;
            return next();
        });
    };
};
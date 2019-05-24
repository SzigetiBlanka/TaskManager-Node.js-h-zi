/**
 * Using POST params update or save a task to the database
 * If res.locals.task is there, it's an update otherwise this middleware creates an entity
 * Redirects to /task/:userid after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TaskModel = requireOption(objectrepository, 'TaskModel');
    return function (req, res, next) {
        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.priority === 'undefined') ||
            (typeof req.body.category === 'undefined')||
            (typeof req.body.time === 'undefined') ||
        (typeof res.locals.user === 'undefined')){
            return next();
        }

        if (typeof res.locals.task === 'undefined') {
            res.locals.task = new TaskModel();
        }

        res.locals.task.name = req.body.name;
        res.locals.task.priority = req.body.priority;
        res.locals.task.category = req.body.category;
        res.locals.task.time = req.body.time;
        res.locals.task._owner = res.locals.user.id;

        res.locals.task.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/tasks');
        });
    };
};
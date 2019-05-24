
/**
 * Load a task from the database using the :userid param
 * The result is saved to res.locals.user_tasks
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TaskModel = requireOption(objectrepository, 'TaskModel');
    return function (req, res, next) {

        TaskModel.findOne(
            {
                "id":Number.isNaN(parseInt(req.params.id, 10))
            },
            (err, task) => {
                if (err || !task) {
                    return next(err);
                }

                res.locals.task = task;
                return next();
            }
        );
    };
};
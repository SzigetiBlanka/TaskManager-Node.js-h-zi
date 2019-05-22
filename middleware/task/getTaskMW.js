
/**
 * Load a task from the database using the :userid param
 * The result is saved to res.locals.user_tasks
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
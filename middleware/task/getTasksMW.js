/**
 * Load all befott from the database
 * The result is saved to res.locals.tasks
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.tasks = [
            {
            _id: 'task01',
            name: 'Football',
            desc:'egy egy remek leiras',
            priority: 'high',
            category: 'sport',
            time :'2h'
        },
            {
                _id: 'task02',
                name: 'Write homework',
                desc:'egy egy remek leiras2',
                priority: 'low',
                category: 'school',
                time :'1h'
            }];
        return next();
    };
};
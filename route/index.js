const authMW = require('../middleware/auth/authMW');
const checkPassMW = require('../middleware/auth/checkPassMW');
const renderMW = require('../middleware/renderMW');
const delTaskMW = require('../middleware/task/delTaskMW');
const getTasksMW = require('../middleware/task/getTasksMW');
const getTaskMW = require('../middleware/task/getTaskMW');
const saveTaskMW = require('../middleware/task/saveTaskMW');
const getUsersMW = require('../middleware/user/getUsersMW');
const getUserMW = require('../middleware/user/getUserMW');
const saveUserMW = require('../middleware/user/saveUserMW');

module.exports = function (app) {
    const objRepo = {};

    app.use('/',
        getUsersMW(objRepo),
        checkPassMW(objRepo),
        renderMW(objRepo, 'index'));

    app.get('/user',
        authMW(objRepo),
        getUsersMW(objRepo),
        renderMW(objRepo, 'users'));
    app.use('/user/new',
        authMW(objRepo),
        saveUserMW(objRepo),
        renderMW(objRepo, 'signup'));

    app.get('/task/:userid',
        authMW(objRepo),
        getUserMW(objRepo),
        getTasksMW(objRepo),
        renderMW(objRepo, 'user_tasks'));
    app.use('/task/:userid/new',
        authMW(objRepo),
        getUserMW(objRepo),
        saveTaskMW(objRepo),
        renderMW(objRepo, 'task_edit'));
    app.use('/task/:userid/edit/:taskid',
        authMW(objRepo),
        getUserMW(objRepo),
        getTaskMW(objRepo),
        saveTaskMW(objRepo),
        renderMW(objRepo, 'task_edit'));
    app.get('/task/:userid/del/:taskid',
        authMW(objRepo),
        getUserMW(objRepo),
        getTaskMW(objRepo),
        delTaskMW(objRepo),
        renderMW(objRepo, 'task_edit'));
};
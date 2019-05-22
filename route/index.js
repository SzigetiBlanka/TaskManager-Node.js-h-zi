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

    app.use('/users',
        getUsersMW(objRepo),
        renderMW(objRepo, 'users'));
    app.use('/tasks',
        getTasksMW(objRepo),
        renderMW(objRepo, 'tasks'));
    app.get('/profil/:userid',
        authMW(objRepo),
        getUserMW(objRepo),
        renderMW(objRepo, 'profil'));
    app.use('/signup',
        authMW(objRepo),
        saveUserMW(objRepo),
        renderMW(objRepo, 'signup'));

    app.get('/user_task/:userid',
        authMW(objRepo),
        getUserMW(objRepo),
        getTasksMW(objRepo),
        renderMW(objRepo, 'user_tasks'));
    app.use('/task_edit/:taskid',
        authMW(objRepo),
        getTaskMW(objRepo),
        getUserMW(objRepo),
        saveTaskMW(objRepo),
        renderMW(objRepo, 'task_edit'));
    app.use('user_task/edit/:taskid',
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
    app.use('/',
        getUsersMW(objRepo),
        checkPassMW(objRepo),
        renderMW(objRepo, 'index'));
};
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

const UserModel = require('../models/user');
const TaskModel = require('../models/task');

module.exports = function(app) {
    const objRepo = {
        UserModel: UserModel,
        TaskModel: TaskModel
    };

    app.use('/users',
        getUsersMW(objRepo),
        renderMW(objRepo, 'users'));
    app.use('/tasks',
        getTasksMW(objRepo),
        renderMW(objRepo, 'tasks'));
    app.get('/profil/:userid',
        getUserMW(objRepo),
        saveUserMW(objRepo),
        renderMW(objRepo, 'profil'));
    app.use('/signup',
        saveUserMW(objRepo),
        renderMW(objRepo, 'signup'));

    app.get('/user_task/:userid',
        getUserMW(objRepo),
        getTasksMW(objRepo),
        renderMW(objRepo, 'user_tasks'));
    app.get('/task_edit/:taskid',
        getTaskMW(objRepo),
        saveTaskMW(objRepo),
        renderMW(objRepo, 'task_edit'));
    app.use('/task_edit',
        saveTaskMW(objRepo),
        renderMW(objRepo, 'task_edit'));
    app.get('user_task/edit/:taskid',
        getUserMW(objRepo),
        getTaskMW(objRepo),
        saveTaskMW(objRepo),
        renderMW(objRepo, 'task_edit'));
    app.get('/task/:userid/del/:taskid',
        getUserMW(objRepo),
        getTaskMW(objRepo),
        delTaskMW(objRepo),
        renderMW(objRepo, 'task_edit'));
    app.use('/',
        getUsersMW(objRepo),
        checkPassMW(objRepo),
        renderMW(objRepo, 'index'));
};
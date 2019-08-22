import userModel from '../models//user-model';
import taskModel from '../models/task-model';
import moment from 'moment';
import * as authService from '../services/auth-service';


export function index(req, res) {

    taskModel.find({}, (error, tasks) => {
        if (error) {
            console.log(res.status(500).json());
            return res.status(500).json();
        } else {
            return res.status(200).json({
                tasks: tasks
            });
        }
    }).populate('author', 'username', 'user');

}

export function create(req, res) {

    const id = authService.getUserId(req);

    userModel.findOne({
        _id: id
    }, (error, user) => {
        if (error && !user) {
            return res.status(500).json();
        }

        const task = new taskModel(req.body.task);
        task.author = user._id;
        task.dueDate = moment(task.dueDate);

        task.save(error => {
            if (error) {
                return res.status(500).json();
            } else {
                return res.status(201).json();
            }
        })
    });

    return res.status(201).json();
}

export function update(req, res) {
    const id = authService.getUserId(req);

    userModel.findOne({
        _id: id
    }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }

        if (!user) {
            return res.status(400).json();
        }

        const task = new taskModel(req.body.task);

        task.author = user._id;
        task.dueDate = moment(task.dueDate);

        taskModel.findByIdAndUpdate({
            _id: task._id
        }, task, error => {
            if (error) {
                return res.status(500).json();
            }

            return res.status(204).json();
        })
    });
}

export function remove(req, res) {
    const id = authService.getUserId(req);

    taskModel.findOne({
        _id: req.params.id
    }, (error, task) => {
        if (error) {
            return res.status(500).json();
        }

        if (!task) {
            return res.status(404).json();
        }

        if (task.author._id.toString() !== id) {
            return res.status(403).json({
                message: 'Not allowed to delete another user\'s task'
            });
        }

        taskModel.deleteOne({
            _id: req.params.id
        }, error => {
            if (error) {
                return res.status(500).json();
            }

            return res.status(204).json();
        })
    });
}

export function show(req, res) {
    taskModel.findOne({
        _id: req.params.id
    }, (error, task) => {
        if (error) {
            return res.status(500).json();
        }

        if (!task) {
            return res.status(400).json();
        }

        return res.status(200).json({
            task: task
        });
    });
}
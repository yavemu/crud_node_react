import User from '../models/user';

exports.test = function (req, res) {
    res.send('User Test OK');
};

exports.create = function (req, res) {
    try {
        const user = new User(
            {
                name: req.body.name,
                lastname: req.body.lastname,
                age: req.body.age
            }
        );

        user.save(function (err) {
            if (err) {
                return next(err);
            }
            res.json({
                message: "User Created successfully"
            })
        })
    } catch (err) {
        next(new Error(err));
    }
};

exports.list = function (req, res) {
    try {
        User.find(function (err, user) {
            if (err) {
                return res.status(400).json({
                    error: true
                });
            }
            res.json({
                user
            })
        })
    } catch (err) {
        next(new Error(err));
    }
};

exports.details = function (req, res) {
    try {
        User.findById(req.params.id, function (err, user) {
            if (err) {
                return res.status(400).json({
                    error: true
                });
            }
            res.json({
                user: user
            })
        })
    } catch (err) {
        next(new Error(err));
    }
};

exports.update = function (req, res) {
    try {
        User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
            if (err) {
                return res.status(400).json({
                    error: true
                });
            }
            res.json({
                message: "User udpated successfully"
            })
        });
    } catch (err) {
        next(new Error(err));
    }
};

exports.delete = function (req, res) {
    try {
        User.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                return res.status(400).json({
                    error: true
                });
            }
            res.json({
                message: "User deleted successfully!"
            })
        })
    } catch (err) {
        next(new Error(err));
    }
};
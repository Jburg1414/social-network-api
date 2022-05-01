const {Users} = require('../model');

const userController = {
    getAllUser(req, res) {
        Users.find({})
        .populate({path:'thoughts', path: 'friends'})
        .sort({_id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    getUserById({params}, res) {
        Users.findOne({_id: params.id})
        .populate({path:'thoughts', path: 'friends'})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No user found with this id.'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    },
    createUser({body}, res) {
        Users.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    updateUser({params, body}, res) {
        Users.findOneAndUpdate({_id: params.id}, body, {new:true, runValidators: true})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    deleteUser({params}, res) {
        User.findOneAndDelete({_id: params.id})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    }

};

module.exports = userController;
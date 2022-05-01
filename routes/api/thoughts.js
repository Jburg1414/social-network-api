const router = require('express').Router();
const {getAllThought, getThoughtById, addThought, updateThought, removeThought} = require('../../controllers/thought');

router
    .route('/')
    .get(getAllThought)
    .post(addThought);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction);
    
module.exports = router;
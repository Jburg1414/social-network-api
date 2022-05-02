const router = require('express').Router();
const {getAllThought, getThoughtById, addThought, updateThought, removeThought} = require('../../controllers/thought');

router
    .route('/')
    .get(getAllThought)
    
router
    .route('/:userId')
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)
    // .post(addReaction);

router
    .route('/:userId/:thoughtId/:reactionId')
    // .delete(removeReaction);
    
module.exports = router;
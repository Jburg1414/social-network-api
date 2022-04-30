const {Schema, model, Types} = require("mongoose");
const newDateFormat = require('../utils/newDateFormat');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,

        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => newDateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id:false,
    }
    );

    const reactionSchema = new Schema(
        {
           reactionId: {
               type: Schema.Types.ObjectId,
               default: () => new Types.ObjectId()
           },
           reactionBody: {
               type: String,
               required: true,
               maxlength: 280
           },
           username: {
               type: String,
               required: true,
           },
           createdAt: {
               type: Date,
               default: Date.now,
               get: createdAtVal => newDateFormat(createdAtVal)
           }
        },
        {
            toJSON: {
                virtuals: true,
                getters: true
            }
        }
    );

    thoughtsSchema.virtual('ractionCount').get(function() {
        return this.reactions.length;
    });

    const Thoughts = model("Thoughts", thoughtsSchema);

    module.exports = Thoughts;
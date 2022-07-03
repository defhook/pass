const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('savedAttractions')

            return userData
            }

            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        saveAttraction: async (parent, args, context) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                { _id: context.user._id},
                { $addToSet: { savedAttractions: args.input }},
                { new: true }
                )
                return updateUser;
            }

            throw new AuthenticationError('You need to be logged in!')
        },
        removeAttraction: async (parent, args, context) => {
            if (context.user) {
                const deletedPark = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedAttractions: {attractionId: args.attractionId} }},
                    { new: true }
                )

                return deletedPark;
            }

            throw new AuthenticationError('You need to be logged in')
        }
    }
}

module.exports = resolvers;
const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('savedParks')

            return userData
            }

            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user }
        },
        login: async (parent, { email, password}) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPass = await user.isCorrectPassword(password)

            if (!correctPass) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user);
            return { token, user }
        },
        savePark: async (parent, args, context) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                { _id: context.user._id},
                { $addToSet: { savedBooks: args.input }},
                { new: true }
                )
                return updateUser;
            }

            throw new AuthenticationError('You need to be logged in!')
        },
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const deletedPark = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedParks: {parkId: args.parkId} }},
                    { new: true }
                )

                return deletedPark;
            }

            throw new AuthenticationError('You need to be logged in')
        }
    }
}

module.exports = resolvers;
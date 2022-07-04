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
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
            .select('-__v -password')
            .populate('savedAttractions')
          },
        users: async () => {
          return User.find()
            .select('-__v -password')
            .populate('savedAttractions')
          },
    },

    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
      
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect username');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password');
        }
      
        const token = signToken(user);
        return { token, user };
      },
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

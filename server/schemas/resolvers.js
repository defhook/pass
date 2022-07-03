const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password');
          //.populate('favorites');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

  users: async () => {
    return User.find()
      .select('-__v -password');
      //.populate('favorites');
    },

  user: async (parent, { username }) => {
    return User.findOne({ username })
      .select('-__v -password');
      //.populate('favorites');
    }
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
    }//,
    // addFavorite: async (parent, { parkId }, context) => {
    //   if (context.user) {
    //     const updatedFavorites = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { favorites: parkId } },
    //       { new: true }
    //     ).populate('favorites');

    //     return updatedFavorites;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // }
  }
};
  
  module.exports = resolvers;
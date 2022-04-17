const { User, Book } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            console.log(`args: ${JSON.stringify(args)}`);
            console.log(`context: ${JSON.stringify(context)}`);

            const user = User.findOne(args);
            return user;
        }
    },

    Mutation: {
        saveBook: async (parent, args, context) => {
            console.log(`args: ${JSON.stringify(args)}`);
            console.log(`context: ${JSON.stringify(context)}`);
            console.log(`parent: ${JSON.stringify(parent)}`);
            User.findOneAndUpdate(args)

        }
    }
}

module.exports = resolvers;
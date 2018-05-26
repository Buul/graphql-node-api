import { makeExecutableSchema } from 'graphql-tools'

const users: any[] = [
    {
        id: 1,
        name: 'jon',
        email: 'jon@emai.com'
    },
    {
        id: 2,
        name: 'Dany',
        email: 'dany@emai.com'
    }

]

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`;

const resolvers = {
    //resolver triviais, não precisa emplementgar
    User: {
        id: (user) => user.id,
        name: (user) => user.name,
        email: (user) => user.email
    },
    //
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign(
                {
                    id: users.length + 1
                }, args)
            users.push(newUser);
            return newUser;
        }
    }
};

export default makeExecutableSchema({ typeDefs, resolvers });
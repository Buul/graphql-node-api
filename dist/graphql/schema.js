"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [{
        id: "1",
        nome: 'José da Silva',
        apelido: 'Zé',
        cpf: '261.782.466-76',
        rg: '44903548-3',
        dtNasc: '28/07/1977',
        cnh: '5478511112',
        nacionalidade: 'Brasileiro',
        sexo: 'Masculino',
        celular: '11992548778',
        paisNascimento: 'Brasil',
        email: 'ze@email.com',
        endereco: 'rua Leão de Roma',
        numero: '121',
        complemento: 'casa 2',
        cep: '06224-080',
        cidade: 'Paulistanópolis',
        estado: 'São Paulo',
        pais: 'Brasil',
        statusConta: '1',
        statusCadastro: '1',
        pessoaPolititicExposta: '1',
        declaracao: '1'
    },
    {
        id: "2",
        nome: 'José da Silva',
        apelido: 'Zé',
        cpf: '261.782.466-77',
        rg: '44903548-3',
        dtNasc: '28/07/1977',
        cnh: '5478511112',
        nacionalidade: 'Brasileiro',
        sexo: 'Masculino',
        celular: '11992548778',
        paisNascimento: 'Brasil',
        email: 'ze@email.com',
        endereco: 'rua Leão de Roma',
        numero: '121',
        complemento: 'casa 2',
        cep: '06224-080',
        cidade: 'Paulistanópolis',
        estado: 'São Paulo',
        pais: 'Brasil',
        statusConta: '1',
        statusCadastro: '1',
        pessoaPolititicExposta: '1',
        declaracao: '1'
    }];
const typeDefs = `
    type User {
        id: ID!
        nome: String!
        apelido: String!    
        cpf: String!
        rg: String!
        dtNasc: String!
        cnh: String!
        nacionalidade: String!
        sexo: String!
        celular: String!
        paisNascimento: String!
        email: String!
        endereco: String!
        numero: String!
        complemento: String!
        cep: String!
        cidade: String!
        estado: String!
        pais: String!
        statusConta: String!
        statusCadastro: String!
        pessoaPolititicExposta: String!
        declaracao:String!
    }

    type Query {
        allUsers: [User!]!
        user(cpf: String!): [User!]!
    }

    type Mutation {
        createUser(nome: String!, email: String!): User
    }
`;
const resolvers = {
    //
    Query: {
        allUsers: () => users,
        user: (obj, args, context, info) => users.filter(i => i.cpf === args.cpf)
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign({
                id: users.length + 1
            }, args);
            users.push(newUser);
            return newUser;
        }
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });

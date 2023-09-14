import { ApolloServer } from '@apollo/server'
import { Application } from 'express'

import resolvers from '../graphql/resolvers'
import typeDefs from '../graphql/typeDefs'


export const graphqlConfig = async (app: Application) => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    })

    await server.start()
    console.log('GraphQL Server started')

    return server
  } catch(error) {
    console.log('Error starting server: ', error)
  }
}
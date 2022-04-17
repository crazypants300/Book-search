import { gql } from '@apollo/client'

export const QUERY_GET_ME = gql`
    query me($username: String) {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;
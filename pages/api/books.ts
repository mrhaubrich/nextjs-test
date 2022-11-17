import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    books: Array<{
        id: number,
        title: string,
        author: string,
        description: string,
    }>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    books: [
        {
            id: 1,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            description: 'The Hobbit is a children\'s fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children\'s literature.',
        },
        {
            id: 2,
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            description: 'The Lord of [...]'
        },
    ]
  })
}
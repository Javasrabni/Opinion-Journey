import React from 'react'
interface Props {
    content: string,
}

export default function ArticleContentClient({ content }: Props) {
    return (
        <p className='whitespace-pre-wrap text-justify'>{content}</p>
    )
}


'use client'
import React from 'react'

interface Props {
    content: string
}

const ArticleContentClient = ({ content }: Props) => {
    return (
        <p className='whitespace-pre-wrap text-justify'>{content}</p>
    )
}

export default ArticleContentClient

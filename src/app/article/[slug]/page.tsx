import React from 'react'
import { notFound } from 'next/navigation'
import { DataArticle } from '@/lib/articles'
import ArticleContentClient from './ArticleContentClient'
import Script from 'next/script'
import { Metadata } from 'next'

interface Props {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;

    const id = slug.split("-")[0];
    const article = DataArticle.find((i) => i.no === id);

    if (!article) {
        return {
            title: "Artikel tidak ditemukan - Opinion Journey",
            description: "Artikel yang Anda cari tidak tersedia.",
        };
    }

    const canonicalUrl = `https://opinion-journey.vercel.app/article/${article.no}-${article.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`;

    return {
        title: `${article.title} - Opinion Journey`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: "article",
            url: canonicalUrl,
            siteName: "Opinion Journey"
        },
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

export default async function ArticlePage({ params }: Props) {
    // await new Promise(resolve => setTimeout(resolve, 200)) //Loading buatan
    const { slug } = params
    if (!slug) return notFound()

    const id = slug.split('-')[0]
    const article = DataArticle.find(i => i.no === id)
    if (!article) return notFound()

    return (
        <div className='sm:p-8 lg:p-16 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold font-[inte] text-center'>{article.title}</h1>
            <span className='flex justify-between items-center'>
                {/* <h1 className='text-2xl font-medium'>{article.title}</h1> */}

                {/* <p className='select-none'>---</p> */}
                {/* <p className='text-gray-400 text-sm'>{new Date(article.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })}</p> */}
            </span>
            <ArticleContentClient content={article.content} />

            <div className='mt-16'>
                <p>{article.date}</p>
            </div>


            {/* SEO */}
            <Script id='article-schema' type='application/ld+json'>
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: article.title,
                    description: article.excerpt,
                    datePublished: article.date,
                    dateModified: article.date,
                    author: {
                        "@type": "Person",
                        name: 'Javas Anggaraksa Rabbani'
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "Opinion Journey",
                        // logo: {
                        //     "@type": "ImageObject",
                        //     url: "https://example.com/logo.png",
                        // },
                    },
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": `https://opinion-journey.vercel.app/article/${article.no}-${article.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`,
                    },
                })}
            </Script>
        </div>
    )
}


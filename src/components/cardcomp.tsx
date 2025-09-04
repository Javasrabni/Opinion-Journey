import React from 'react'

interface CardProps {
    Heading?: string,
    fileSource: string,
    titleCard: string,
    description?: string | React.ReactNode,
    linkOnClick?: string,
    shortCard: boolean
}

const Cardcomp = ({ Heading, fileSource, titleCard, description, linkOnClick, shortCard }: CardProps) => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className='text-xl font-bold font-[news]'>{Heading}</h1>

            <div className={`${shortCard && 'flex flex-col w-full max-w-[264px]'} rounded-lg flex  gap-4 flex-wrap lg:flex-nowrap`}>
                <div className={`${shortCard ? 'w-full min-w-[264px] max-w-[264px]' : 'lg:max-w-[40%]'} w-full  flex`}>
                    <iframe
                        className="rounded-lg"
                        src={fileSource}
                        title="Claude Artifact"
                        width="100%"
                        height="100%"
                    />
                </div>
                <span className="flex flex-col gap-2 grow-1">
                    <h1 className='text-xl font-[inte]'>{titleCard}</h1>
                    {typeof description === "string" ? (
                        <p className="text-gray-500">{description}</p>
                    ) : (
                        <>
                            {description}
                        </>
                    )}
                    <a className="underline " href={fileSource} target="_blank">{linkOnClick}</a>
                </span>
            </div>


        </div>
    )
}

export default Cardcomp

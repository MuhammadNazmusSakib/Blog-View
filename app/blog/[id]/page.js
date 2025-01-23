import getPostDetails from '@/app/lib/getPostDetails'
import React from 'react'

export default async function page({ params }) {
    const { id } = await params
    const post = await getPostDetails(id)

    return (
        <div className="bg-slate-100">
            <div className='max-w-5xl mx-auto h-screen py-10 px-3 sm:px-8'>
                <div className="bg-white shadow-md rounded p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
                    <p className="text-gray-700 leading-relaxed">{post.body}</p>
                </div>
            </div>
        </div>
    )
}

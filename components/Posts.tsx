import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import ListItem from './ListItem'

export default function Posts() {
	const posts = getSortedPostsData()
	return (
		<section className='w-1/2 mx-auto bg-slate-50 p-2 rounded prose'>
			<h1>📖 Blog</h1>
			<ul>
				{posts.map(post => (
					<ListItem post={post} key={post.id} />
				))}
			</ul>
		</section >

	)
}

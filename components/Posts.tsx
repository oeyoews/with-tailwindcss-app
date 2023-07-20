import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import ListItem from './ListItem'

export default function Posts() {
	const posts = getSortedPostsData()
	return (
		<section className='w-1/2 mx-auto bg-neutral-100 p-8 rounded prose shadow'>
			<h1>📖 Blog</h1>
			<ul className='list-none'>
				{posts.map(post => (
					<ListItem post={post} key={post.id} />
				))}
			</ul>
		</section >

	)
}

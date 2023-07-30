import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import ListItem from './ListItem'

export default function Posts() {
	const posts = getSortedPostsData()
	return (
		<section className='mx-auto p-8 rounded prose'>
			<ul className='list-none'>
				{posts.map(post => (
					<ListItem post={post} key={post.id} />
				))}
			</ul>
		</section >

	)
}

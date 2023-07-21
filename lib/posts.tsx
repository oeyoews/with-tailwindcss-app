import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkgGfm from 'remark-gfm'

const postDirectory = path.join(process.cwd(), 'contents')

export function getSortedPostsData() {
	const filenames = fs.readdirSync(postDirectory)
	const allpostData = filenames.map(filename => {
		const id = filename.replace(/\.md$/, '')
		const fullPath = path.join(postDirectory, filename)
		const fileContents = fs.readFileSync(fullPath, 'utf8')
		const matterResult = matter(fileContents)

		const blogPost: BlogPost = {
			id,
			title: matterResult.data.title,
			date: matterResult.data.date,
		}
		return blogPost
	})
	return allpostData.sort((a, b) =>
		a.date < b.date ? 1 : -1
	)
}

export async function getPostData(id: string) {
	const fullPath = path.join(postDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	const matterResult = matter(fileContents)

	const processedContent = await remark()
		.use(remarkgGfm)
		.use(html)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();
	const blogPostWithHtml: BlogPost & { contentHtml: string } = {
		id, title: matterResult.data.title,
		date: matterResult.data.date,
		contentHtml,
	}
	return blogPostWithHtml;
}

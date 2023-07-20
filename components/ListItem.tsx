import getFormattedDate from "@/lib/getFormattedDate"
import Link from "next/link"
import Image from "next/image"


type Props = {
	post: BlogPost
}

const ListItem = ({ post }: Props) => {
	const { id, title, date } = post
	const formattedDate = getFormattedDate(date)
	return (
		// todo
		<li className="prose prose-indigo prose-a:no-underline prose-a:hover:underline">
			<Image src="https://www.gravatar.com/avatar/1de1d1f594efdf7906ce8dba84a8b73e" alt="unsplash" width={22} height={22} className="rounded-full mx-1 inline-flex" />
			<Link href={`/posts/${id}`}>
				{title}
			</Link>
			<br />
			<small>{formattedDate}</small>
		</li>
	)
}

export default ListItem;
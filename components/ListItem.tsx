import getFormattedDate from "@/lib/getFormattedDate"
import Link from "next/link"

type Props = {
	post: BlogPost
}

const ListItem = ({ post }: Props) => {
	const { id, title, date } = post
	const formattedDate = getFormattedDate(date)
	return (
		<li className="prose prose-indigo">
			<Link href={`/posts/${id}`}>
				{title}
			</Link>
			<br />
			<small>{formattedDate}</small>
		</li>
	)
}

export default ListItem;
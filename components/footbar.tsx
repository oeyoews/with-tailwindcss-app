// 'use client'
import Image from "next/image";

export default function FootBar() {
	return (<>
		<div className="p-2 text-gray-400 text-center text-sm">
			<Image src={"https://www.gravatar.com/avatar/1de1d1f594efdf7906ce8dba84a8b73e"} alt="unsplash" width={50} height={50} className="rounded-full shadow-md bottom-4 right-4 fixed" />
		</div>
	</>)
}
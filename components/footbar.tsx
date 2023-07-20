// 'use client'
import Image from "next/image";

export default function FootBar() {
	return (<>
		<div className="p-2 text-gray-400 text-center text-sm fixed bottom-0">
			Powered by @oeyoews
			<Image src={"https://www.gravatar.com/avatar/1de1d1f594efdf7906ce8dba84a8b73e"} alt="unsplash" width={22} height={22} className="rounded-full shadow-md bottom-4 inline ml-1 align-middle" />
		</div>
	</>)
}
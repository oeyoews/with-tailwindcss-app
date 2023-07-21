import React from "react";
import Link from "next/link";

export default function NavBar() {
	const links = ["Blog", "About", "Rss"];
	const linkClass = 'p-2 hover:underline';
	return (
		<div className="m-4 text-base font-semibold capitalize flex justify-end items-end print:hidden">
			<Link href="/">Home</Link>
			{links.map((link) => (
				<Link key={link} href={`/${link.toLowerCase()}`}>
					<span className={linkClass}>
						{link}
					</span>
				</Link>
			))}
		</div>
	);
}

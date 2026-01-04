import React from "react";
import Link from "next/link";

function page() {
	return (
		<div className="flex min-h-screen items-center justify-center flex-col gap-3">
			<Link
				href="/dashboard"
				className="bg-black px-4 py-2 text-white rounded-sm"
			>
				Go To Dashboard
			</Link>
		</div>
	);
}

export default page;

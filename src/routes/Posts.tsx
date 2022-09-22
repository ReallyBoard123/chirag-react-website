import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Post } from "../App";

export function Posts() {
	const { id } = useParams();
	const [post, setPost] = useState<Post | null>(null);

	useEffect(() => {
		fetch(`http://localhost:3000/posts/${id}`)
			.then((res) => res.json())
			.then((res) => setPost(res));
	}, []);

	if (!post) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="space-y-8">
				<div className="flex items-center justify-between gap-8">
					<h1 className="text-4xl font-bold">{post.title}</h1>
				</div>
				<div className="h-px bg-slate-700/20" />
				<p className="text-lg">{post.content}</p>
			</div>
		</>
	);
}

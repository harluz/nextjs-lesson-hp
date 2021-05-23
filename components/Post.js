import Link from "next/link";

const Post = ({ post }) => {
	return (
		<div>
			<span>{post.id}</span>
			{" : "}
			{/* 遷移先が動的に変わる場合の処理方法 */}
			<Link href={`/posts/${post.id}`}>
				<span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
					{post.title}
				</span>
			</Link>
		</div>
	);
};

export default Post;

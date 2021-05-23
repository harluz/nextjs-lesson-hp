import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostData } from "../lib/posts";

const Blog = ({ posts }) => {
	return (
		<Layout title="Blog">
			<ul className="m-10">
				{posts && posts.map((post) => <Post key={post.id} post={post} />)}
			</ul>
		</Layout>
	);
};

export default Blog;

// ビルド時に一回のみ実行される処理
export async function getStaticProps() {
	const posts = await getAllPostData();
	return {
		props: { posts },
	};
}

import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostData() {
	const res = await fetch(new URL(apiUrl));
	const posts = await res.json();
	return posts;
}

export async function getAllPostIds() {
	// fetchで指定のURLにアクセスしてデータを取得する
	const res = await fetch(new URL(apiUrl));
	// 取得したデータからさらに必要な要素のみを変数に格納する
	const posts = await res.json();

	// idの要素のみを取得する
	return posts.map((post) => {
		return {
			params: {
				id: String(post.id),
			},
		};
	});
}

export async function getPostData(id) {
	const res = await fetch(new URL(`${apiUrl}/${id}`));
	const post = await res.json();

	return post;
}

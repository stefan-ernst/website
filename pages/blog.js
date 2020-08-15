import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
import matter from "gray-matter";

export default function Blog({posts}) {

    return (
        <>
            <Header />
            <div className='grid-container '>
                <Nav />

                <main className='Main'>
                    <div className='Hero'>
                        We are at the blog!
                    </div>
                    <br/>
                    <div className='Document'>
                        {!posts && <div>No posts!</div>}
                        <ul>
                            {posts &&
                            posts.map((post) => {
                                return (
                                    <li key={post.slug}>
                                        <img src={post.coverImage} />
                                        <Link href={`/posts/${post.slug}`}><a>{post.title}</a></Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </main>

                <Footer />
            </div>
        </>
);
}

export async function getStaticProps(context) {

    const posts = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)

        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            const value = values[index]
            const document = matter(value.default)

            return {
                slug: slug.replace('.',''),
                ...document.data
            }
        })
        return data
    })(require.context('../_posts/blog', true, /\.mdx$/))

    return {
        props: {
            posts
        },
    }
}
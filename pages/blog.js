import Header from "../components/header";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import Link from "next/link";
import matter from "gray-matter";
import BlogStyle from "../components/Blog/style";

export default function Blog({posts}) {

    return (
        <>

            <Header description="Realigned Technologies Blog - learn about all things Atlassian" />
            <BlogStyle />
            <div className='grid-container '>
                <Navigation />
                <main className='Main'>
                    <div className={'Content FullPage'}>

                        <div className={'Flex'}>
                    {!posts && <div>No posts!</div>}
                    {posts &&
                    posts.map((post, index) => {
                        return (
                                <div className={'Container'} key={index}>
                                    <Link href={`/posts/${post.slug}`}><a><div style={{backgroundImage:`url(${post.coverImage})`}} className='CoverImage'></div></a></Link>
                                    <div className='Excerpt'>
                                        <Link href={`/posts/${post.slug}`}><a><h2>{post.title}</h2></a></Link>
                                        <span>{post.excerpt}</span><br /><br />
                                        <Link href={`/posts/${post.slug}`}><a>Continue reading</a></Link>
                                    </div>
                                </div>

                        )
                    })}
                        </div>
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
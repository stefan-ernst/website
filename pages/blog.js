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
                    <br/>
                    <div className={'Content'}>

                        <div style={{flexDirection:'column',justifyContent:'center'}}>
                    {!posts && <div>No posts!</div>}
                    {posts &&
                    posts.map((post, index) => {
                        return (
                                <div className={'flex container top'}>
                                    <div className={'half image'}> <img src={post.coverImage} style={{width:'100%'}} /></div>
                                    <div className={'half'}>
                                        <span className={'Subtext'}><Link href={`/posts/${post.slug}`}><a>{post.title}</a></Link></span><br />
                                        <small>{post.excerpt}</small></div>
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
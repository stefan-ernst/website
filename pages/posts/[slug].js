import { useRouter } from 'next/router'
import Header from '../../components/header'
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import BlogStyle from "../../components/Blog/style";
import Link from "next/link";


export default function Post({ frontMatter, markdownBody }) {

    return (
        <>
            <Header title={frontMatter.title} description={frontMatter.excerpt} />
            <BlogStyle />
            <style jsx global>
                {`
                .text img {
                    width: 85%;
                    margin: 2rem 0 2rem 0;
                    border: 1px solid lightgrey;
                    border-radius: 5px;
                    box-shadow: 0 0 1px 0 rgba(0,0,0,0.08), 0 1px 1px 0 rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.08);

                }
                img[src$="box"] {
                    width: 50%;
                    margin: 1.5rem 0 1.5rem 0;
                }
                `}
            </style>
            <div className='grid-container'>
                <Navigation />

                <main className='Main'>
                    <p className='Content FullPage' style={{paddingTop:50}}>
                        <div className={'flex text blog blog_content'}>
                            <Link href="/blog"><a>All Posts</a></Link><br />
                            <h2 className={'title'}>{frontMatter.title}</h2><br />
                            <div style={{marginBottom:20}}>By {frontMatter.author.name}</div>

                            <div className={'CoverImage'} style={{marginBottom:20,backgroundImage:`url(${frontMatter.coverImage})`}}>

                            </div>
                            <span>
                            <ReactMarkdown source={markdownBody} />
                            </span>
                        </div>
                    </p>
                </main>

                <Footer />
            </div>
        </>
    )
}

export async function getStaticProps({...ctx}) {

    const { slug } = ctx.params;

    const content = await import(`../../_posts/blog/${slug}.mdx`)
    const data = matter(content.default)

    return {props: {
        frontMatter: data.data,
        markdownBody: data.content
    }};
}


const getSlugs = (context) => {
    const keys = context.keys()

    const data = keys.map((key, index) => {
        let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

        return slug.replace('.','')
    })
    return data
}

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        return getSlugs(context)
    })(require.context('../../_posts/blog', true, /\.mdx$/))

    const paths = blogSlugs.map((slug) => `/posts/${slug}`)

    return {
        paths, // An array of path names, and any params
        fallback: false, // so that 404s properly appear if something's not matching
    }
}
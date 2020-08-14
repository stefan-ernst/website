import remark from 'remark'
import remark2react from 'remark-react'

export default async function markdownToHtml(markdown) {
    const result = await remark().use(remark2react).process(markdown)
    return result
}
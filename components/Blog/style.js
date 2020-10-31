export default function BlogStyle() {

    return (
        <style jsx>
            {`
                .Container {
                    margin: 1rem;
                    display: block;
                    width: auto;
                    border: 1px solid lightgrey;
                    border-radius: 10px;
                    min-width: 300px;
                    background-color: white;
                    box-shadow: 0 0 1px 0 rgba(0,0,0,0.08), 0 1px 1px 0 rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.08);
                }
                 .Flex {
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                }
                .CoverImage {
                    height: 250px;
                    background-position: center;
                    background-size: cover;
                }
                .Excerpt {
                    padding: 2rem;
                    font-weight: 300;
                }
                h2 {
                    font-weight: 500;
                    margin-bottom: 10px;
                }
                h2.title {
                    font-weight: 500;
                }
                a {
                    color: #013373;
                    text-decoration: none;
                    display: inline;
                }
                 a:hover {
                    color: rgb(10, 198, 255);
                    text-decoration: none;
                }
                h3 {
                  margin-bottom: 1rem;
                }
                ul {
                  margin-bottom: 1rem;
                }
                `}
        </style>
    )
}
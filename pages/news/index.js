import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from "react"


const Index = () => {
    const [title, setTitle] = useState([]);
    const [url, setUrl] = useState([]);
    const [content, setContent] = useState([]);
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        const response = await fetch("/api/news");
        const data = await response.json();
        console.log(data);
        setNews(data);
    };

    const submitNews = async () => {
        const response = await fetch("/api/news", {
          method: "POST",
          body: JSON.stringify({
            title,
            url,
            content
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
      };

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <div>
            <Head>
                <title>News - Icube Latihan</title>
                <meta name="description" content="Halaman news icube" />
                <link rel="icon" href="/dummy.png" />
            </Head>

            <div className="add-news">
                <h3>Add News</h3>
                <div className="form-group">
                    <div className="form-wrapper">
                        <label> Title : </label> <br />
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-wrapper">
                        <label> Url : </label> <br />
                        <input
                            type="text"
                            name="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="form-wrapper">
                        <label> Content : </label> <br />
                        <input
                            type="text"
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className="form-wrapper">
                        <button onClick={submitNews}>Submit News</button>
                    </div>
                    <div className="form-wrapper">
                        <button onClick={fetchNews}>Refresh</button>
                    </div>
                </div>
            </div>

            <div className="list-news">
                <h3>List News</h3>
                {
                    news.map((item) => (
                        <li key={item.id}>
                            <Link 
                                href={{
                                    pathname: `/news/${item.url}`,
                                    query: { 
                                        title: item.title,
                                        content: item.content,
                                        image: item.image
                                    }
                                }}
                                as={`/news/${item.url}`}
                            >
                                { item.title }
                            </Link>
                        </li>
                    ))
                }
            </div>
            <style jsx>
                {`
                    .add-news {
                        max-width: 600px;
                        margin: 20px auto;
                        border: 1px solid #ddd;
                        padding: 20px;
                    }  
                    .list-news {
                        max-width: 600px;
                        margin: 0 auto;
                        border: 1px solid #ddd;
                        padding: 20px;
                    }
                    .form-group {
                        display: flex;
                        flex-direction: column;
                    } 
                    .form-wrapper {
                        margin-bottom: 20px;
                    }
                `}
            </style>
        </div>
    );
}

export default Index;
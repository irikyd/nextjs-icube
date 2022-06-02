import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Detail.module.css'

const Detail = () => {
    const router = useRouter()
    const query = router.query

    console.log(query)

    return (
        <div>
            <Head>
                <title>News Detail - Icube Latihan</title>
                <meta name="description" content="Halaman news icube" />
                <link rel="icon" href="/dummy.png" />
            </Head>
            Detail Berita: 
            <h2 className={styles.heading}>{ query.title }</h2>
            <p>{ query.content }</p>
            <Image src={ query.image } alt={query.title} width={400} height={400} />

            <style jsx>
                {`
                div {
                    text-align: center;
                }
                p {
                    font-size: 12px;
                    color: #222;
                    text-decoration: underline;
                }
                `}
            </style>
        </div>
    );
}

export default Detail;
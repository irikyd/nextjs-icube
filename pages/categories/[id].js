import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES_BY_ID } from '@/schema';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Detail = () => {
    const { query } = useRouter();
    const { loading, error, data } = useQuery(GET_CATEGORIES_BY_ID, {
        variables: {
            categoryId: query.id
        }
    });

    if (loading) return (
        <main>
            <Container maxWidth="lg">
                <Box sx={{ height: '100vh', padding: '60px 0' }}>
                    <Typography variant="h2" component="h1" align="center" gutterBottom>
                        <Skeleton animation="wave" />
                    </Typography>
                    <div className="grid">
                        {
                            Array.from(new Array(16)).map((index) =>(
                                <div key={index}>
                                    <Card sx={{ padding: '10px 20px', minHeight: '150px' }} style={{backgroundColor: "ghostwhite"}}>
                                        <CardContent>
                                            <Skeleton variant="rectangular" width={200} height={240} />
                                            <Typography variant="h6" component="h1" gutterBottom>
                                                <Skeleton animation="wave" />
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Skeleton width="40%" height="46px" />    
                                        </CardActions>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </Box>
            </Container>
        </main>
    );


    if (error) return `Error! ${error}`;

    return (
        <main>
            <Container maxWidth="lg">
                <Box sx={{ height: '100vh', margin: '60px 0' }}>
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        List of `{ data.category.name }` Category
                    </Typography>
                    {
                        data.category && data.category.products.items.length > 0 ? (
                            <div className="grid">
                                {
                                    data.category.products.items.map((item, index) => (
                                        <div key={index}> 
                                            <Card sx={{ padding: '10px 20px', minHeight: '150px' }} style={{backgroundColor: "ghostwhite"}}>
                                                <CardContent>
                                                    <Image
                                                        width={233}
                                                        height={291}
                                                        alt={item.name}
                                                        src={item.image.url}
                                                    />
                                                    <Typography variant="h6" component="h1" gutterBottom dangerouslySetInnerHTML={{ __html: item.name }} />
                                                </CardContent>
                                                <CardActions>
                                                    <Link href={`/categories/detail/${item.sku}`} >
                                                        <a>
                                                            <Button size="small" variant="contained">View Detail</Button>
                                                        </a>
                                                    </Link>    
                                                </CardActions>
                                            </Card>
                                        </div>
                                    ))
                                }
                            </div>
                                
                        ) : (
                            <div style={{ display: 'flex', height: '20vh'}}>
                                <div style={{
                                    background: 'ghostwhite',
                                    border: '1px solid #dddddd',
                                    padding: '20px',
                                    borderRadius: '12px',
                                    width: '100%',
                                    textAlign: 'center',
                                    margin: 'auto'
                                }}>
                                    <Typography variant="h6" component="h6" gutterBottom>
                                        No Result Data for category &apos;<b>{ data.category.name }</b>&apos;
                                    </Typography>
                                    <Link href='/'>
                                        <a>
                                            Back to Home
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </Box>
            </Container>
        </main>
    );
}

export default Detail;
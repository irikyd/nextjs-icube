import * as React from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { useQuery } from '@apollo/client';
import { GET_DETAIL_PRODUCT_BY_SKU } from '@/schema';
import { useRouter } from 'next/router';
import Flexrow from '@/components/flexrow';
import Form from '@/components/formSubmit/form';

const Detail = () => {
    const { query } = useRouter();
    const { loading, error, data } = useQuery(GET_DETAIL_PRODUCT_BY_SKU, {
        variables: {
            sku: query.slug
        }
    });

    if (loading) return (
        <main>
            <Container maxWidth="lg">
                <Box sx={{ height: '100vh', padding: '60px 0' }}>
                    <Card style={{backgroundColor: "ghostwhite", margin: 'auto'}}>
                        <CardContent>
                            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                                <div style={{ padding: '20px 80px', width: '100%' }}>
                                    <Typography variant="h2" component="h1" align="center" gutterBottom >
                                        <Skeleton animation="wave" />
                                    </Typography>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '-20px'}}>
                                        <div style={{ paddingLeft: '20px', width: '25%' }}>
                                        <Skeleton variant="rectangular" width={225} height={281} />
                                        </div>
                                        <div style={{ paddingLeft: '20px', textAlign: 'left', width: '65%' }}>
                                            <div style={{ marginBottom: '20px'}}>
                                                <Typography variant="h5" component="h5" gutterBottom>
                                                    <Skeleton width="150px" animation="wave" />
                                                </Typography>
                                                <Skeleton animation="wave" />
                                                <Skeleton animation="wave" />
                                                <Skeleton animation="wave" />
                                                <Skeleton animation="wave" />
                                                <Skeleton animation="wave" />
                                                <Skeleton animation="wave" />
                                                <Skeleton animation="wave" />
                                                <Skeleton animation="wave" />
                                                <Skeleton animation="wave" />
                                            </div>
                                            <div style={{ marginBottom: '20px'}}>
                                                <Typography variant="h5" component="h5" gutterBottom>
                                                    <Skeleton width="225px" animation="wave" />
                                                </Typography>
                                                <Skeleton animation="wave" />
                                            </div>
                                            <div style={{ marginBottom: '20px'}}>
                                                <Typography variant="h5" component="h5" gutterBottom>
                                                    <Skeleton width="150px" animation="wave" />
                                                </Typography>
                                                <Skeleton animation="wave" />
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </main>
    );


    if (error) return `Error! ${error}`;

    return (
        <main>
            <Container maxWidth="lg">
                <Box sx={{ height: '100vh', display: 'flex' }}>
                    <Card style={{backgroundColor: "ghostwhite", margin: 'auto'}}>
                        <CardContent>
                            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                                {
                                    data.products.items.map(item => (
                                        <div key={item.id} style={{ padding: '20px 80px' }}>
                                            <Typography variant="h2" component="h1" align="center" gutterBottom dangerouslySetInnerHTML={{ __html: item.name }} />
                                            <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '-20px'}}>
                                                <div style={{ paddingLeft: '20px', width: '25%' }}>
                                                    <img 
                                                        alt={item.name}
                                                        src={item.image.url}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto'
                                                        }}
                                                    />
                                                </div>
                                                <div style={{ paddingLeft: '20px', textAlign: 'left', width: '65%' }}>
                                                    <Flexrow title={'Description'}>
                                                        <div dangerouslySetInnerHTML={{ __html: item.description.html }} />
                                                    </Flexrow>
                                                    <Flexrow title={'Regular Price Range'}>
                                                        <div>{ item.price_range.minimum_price.regular_price.currency}. { item.price_range.minimum_price.regular_price.value } -  { item.price_range.maximum_price.regular_price.currency}. { item.price_range.maximum_price.regular_price.value }</div>
                                                    </Flexrow>
                                                    <Flexrow title={'Subscribe'}>
                                                        <Form />
                                                    </Flexrow>
                                                </div>
                                            </div>
                                        </div>    
                                    ))
                                }
                            </div>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </main>
    );
}

export default Detail;
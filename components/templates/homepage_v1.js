import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Skeleton from '@mui/material/Skeleton';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '@/schema';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("md")]: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: 'white',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        background: 'gray',
        color: 'white',
        border: 0,
        borderRadius: 4,
        height: 46,
    },
}));

const Homepage = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return (
        <main>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
                Category List
            </Typography>
            <div className="grid">
                {
                    Array.from(new Array(16)).map((item) =>(
                        <div key={item}>
                            <Card sx={{ padding: '4px 8px', minHeight: '150px' }} style={{backgroundColor: "ghostwhite"}}>
                                <CardContent>
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
        </main>
    );


    if (error) return `Error! ${error}`;

    return (
        <main>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
                Category List
            </Typography>
            <div className="grid">
                {
                    data.categories.items.map((item, index) => (
                        <div key={index}>
                            <Card sx={{ padding: '4px 8px', minHeight: '150px' }} style={{backgroundColor: "ghostwhite"}}>
                                <CardContent>
                                    <Typography variant="h6" component="h1" gutterBottom>
                                        {item.name}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={`/categories/${item.id}`} >
                                        <a>
                                            <Button className={classes.root}>View More</Button>
                                        </a>
                                    </Link>    
                                </CardActions>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </main>
    );
}

export default Homepage;
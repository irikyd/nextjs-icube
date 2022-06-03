import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { GET_CATEGORIES } from './schema';


const Index = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error}`;

    console.log(data);

    return (
        <div>
            {
                data.categories.items.map(item => (
                    <Link key={item.id} href={`/categories/${item.id}`} >
                        <a>
                            <p>{item.name}</p>
                        </a>
                    </Link>    
                ))
            }
        </div>
    );
}

export default Index;
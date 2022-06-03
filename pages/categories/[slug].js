import { useLazyQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@/schema";

const Detail = () => {
    const [loadCategory, { called, loading, data }] = useLazyQuery(GET_CATEGORIES);
    
    if (called && loading) return <p>Loading ...</p>
    
    if (!called) {
        return <button onClick={() => loadCategory()}>Load Category</button>
    }

    console.log(data)

    return null
}

export default Detail;
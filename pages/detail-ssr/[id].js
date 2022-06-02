import dynamic from 'next/dynamic'

const DetailComponent = dynamic(() => import('@/components/detail'))

function Detail({ detailMeals }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            {
                detailMeals.map(meal => (
                    <DetailComponent key={meal.idMeal} meal={meal} />    
                ))
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const id = context.params.id
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await res.json()

    return { 
        props: { 
            detailMeals: data.meals
        } 
    }
}

export default Detail
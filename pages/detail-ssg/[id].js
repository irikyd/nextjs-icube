function Detail({ detailMeals }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            {
                detailMeals.map(meal => (
                    <div key={meal.idMeal} style={{ padding: '0 80px' }}>
                        <h1 style={{ fontWeight: '700' }}>{meal.strMeal}</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '-20px'}}>
                            <div style={{ paddingLeft: '20px', width: '25%' }}>
                                <img 
                                    alt={meal.strMeal}
                                    src={meal.strMealThumb}
                                    style={{
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </div>
                            <div style={{ paddingLeft: '20px', textAlign: 'left', width: '65%' }}>
                                <div style={{ marginBottom: '20px'}}>
                                    <h3>Area</h3>
                                    <p>{ meal.strArea}</p>
                                </div>
                                <div style={{ marginBottom: '20px'}}>
                                    <h3>Category</h3>
                                    <p>{ meal.strCategory}</p>
                                </div>
                                <div style={{ marginBottom: '20px'}}>
                                    <h3>Incredient</h3>
                                    <ul style={{ columnCount: '2'}}>
                                        <li style={{ display: 'flex', alignItems: 'center'}}>
                                            <img
                                                src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png`}
                                                alt={ meal.strIngredient1}
                                                style={{ width: '60px', paddingRight: '10px', height: 'auto'}}
                                            />
                                            { meal.strIngredient1 } <sub>({ meal.strMeasure1 })</sub>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center'}}>
                                            <img
                                                src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient2}.png`}
                                                alt={ meal.strIngredient2}
                                                style={{ width: '60px', paddingRight: '10px', height: 'auto'}}
                                            />
                                            { meal.strIngredient2 } <sub>({ meal.strMeasure2 })</sub>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center'}}>
                                            <img
                                                src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient3}.png`}
                                                alt={ meal.strIngredient3}
                                                style={{ width: '60px', paddingRight: '10px', height: 'auto'}}
                                            />
                                            { meal.strIngredient3 } <sub>({ meal.strMeasure3 })</sub>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center'}}>
                                            <img
                                                src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient4}.png`}
                                                alt={ meal.strIngredient4}
                                                style={{ width: '60px', paddingRight: '10px', height: 'auto'}}
                                            />
                                            { meal.strIngredient4 } <sub>({ meal.strMeasure4 })</sub>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center'}}>
                                            <img
                                                src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient5}.png`}
                                                alt={ meal.strIngredient5}
                                                style={{ width: '60px', paddingRight: '10px', height: 'auto'}}
                                            />
                                            { meal.strIngredient5 } <sub>({ meal.strMeasure5 })</sub>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center'}}>
                                            <img
                                                src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient6}.png`}
                                                alt={ meal.strIngredient6}
                                                style={{ width: '60px', paddingRight: '10px', height: 'auto'}}
                                            />
                                            { meal.strIngredient6 } <sub>({ meal.strMeasure6 })</sub>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center'}}>
                                            <img
                                                src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient7}.png`}
                                                alt={ meal.strIngredient7}
                                                style={{ width: '60px', paddingRight: '10px', height: 'auto'}}
                                            />
                                            { meal.strIngredient7 } <sub>({ meal.strMeasure7 })</sub>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center'}}>
                                            <img
                                                src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient8}.png`}
                                                alt={ meal.strIngredient8}
                                                style={{ width: '60px', paddingRight: '10px', height: 'auto'}}
                                            />
                                            { meal.strIngredient8 } <sub>({ meal.strMeasure8 })</sub>
                                        </li>
                                    </ul>
                                </div>
                                <div style={{ marginBottom: '20px'}}>
                                    <h3>Intruction</h3>
                                    <code>{ meal.strInstructions}</code>
                                </div>
                            </div>
                        </div>
                    </div>    
                ))
            }
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const data = await res.json()
    const result = data.meals
    const paths = result.map((item) => {
        return {
            params: { 
                id: item.idMeal.toString()
            }
        }
    })

    return { 
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
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
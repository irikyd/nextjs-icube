import React, { useState, useEffect } from 'react'

function Csr() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        const data = await response.json();
        console.log(data);
        setData(data.meals);
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '60px'}}>
            <h1 style={{ textAlign: 'center' }}>Csr</h1>
            {
                data && data.length > 0 ? (
                    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                        {
                            data.map(item => (
                                <div key={item.idMeal} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', textDecoration: 'none', color: 'black', fontWeight: '700'}}>
                                    <img 
                                        alt={item.strMeal}
                                        src={item.strMealThumb}
                                        style={{
                                            width: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                    <p>{item.strMeal}</p>
                                </div>    
                            ))
                        }
                    </div>
                ) : (
                    <div style={{ margin: 'auto'}}>Loading....</div>
                )
            }
        </div>
    );
}

export default Csr;
import React from 'react'


const ProductionCompanies = ({ productionCompanies }) => {
    const displayProductionCompany = () => {
        return !productionCompanies.length ? '' : productionCompanies.map(({ logo_path, name, origin_country }) => {
            const displayImage = logo_path !== null ? `https://image.tmdb.org/t/p/w500${logo_path}` : 'Placeholder.png'
            return (<div key={logo_path} style={{ marginTop: 20, marginLeft: 20, border: '5px solid #9A9A9A', borderRadius: 10 }}>
                <img src={displayImage} alt="" style={{ width: '70%', height: '80%', padding: 20 }} />
                <hr />
                <ul>
                    <li>
                        Name: {name}
                    </li>
                    <li>
                        Country: {origin_country ? origin_country : 'N/A'}
                    </li>
                </ul>
            </div>)
        })
    }
    return (
        <div>
            <h2> {`Production Companies found: ${productionCompanies.length}`} </h2>
            {displayProductionCompany()}
        </div>

    )
}



export default ProductionCompanies

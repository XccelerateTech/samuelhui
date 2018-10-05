var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

asia.countries.India.Mumbai.population // Mumbai’s population
asia.countries.China.Beijing.population // Beijing’s population
asia.countries.China["Hong Kong"].population// Hong Kong’s population
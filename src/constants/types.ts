export type WeatherData = {
    location: {
        country: string,
        name: string,
        region: string
    }
    current: {
        condition: {
            text: string,
            icon: string
        }
        temp_c: number,
        temp_f:number

    }
}
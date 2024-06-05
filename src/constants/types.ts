export interface WeatherData {
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
        wind_kph: number,
        wind_mph: number
    }
}

export interface Position {
    latitude: number | null,
    longitude: number | null
}

export type TempType = 'celcius' | 'farenheit'
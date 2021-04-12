export interface City {
    id: number,
    name: string,
    state: string,
    country: string,
    coord: {
        "type": "object",
        "properties": {
            "lat": { "type": number },
            "lon": { "type": number }
        }
    }
}
# OpenWeatherApp

This is Open weather App

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Structure

```
app
  |____ data
          |____ schema
          |____ service
                   |____ data
                           |____ data.json ( Contains predefined 5 favourite cities data )
                   |____ weather-service ( Fetches the favourite cities and forecast data )
  |____ layout
  |____ modules
          |____ dashboard
                    |____ grid-item ( Displays the grid view in the dashboard )
          |____ forecast-modal ( Displays the forecast data for a favourite city inside a modal )
  |____ app-component
  |____ app-module
  |____ app-routing

```



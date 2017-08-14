# README

### [Live](https://map-search.herokuapp.com/#/)

# MapSearch

Search Google Maps by keyword, store name, or service. The map begins orientated around San Francisco and any relevant queries will be based there. To query stores/sites/restaurants in a different location, first search for the city/country, then search for your desired location. Search results will be displayed as markers on the map.

Built on React/Redux and Ruby on Rails. Uses a PostgreSQL database for users.

## Features

- Utilizes Google Map's built-in SearchBox.
- User Authentication with Rails and BCrypt.
- Guest login option available on Login menu.

## User Validations

- Usernames must be unique, password must be at least 8 characters long.

## Location Details

- Location details supplied by Google Maps API.

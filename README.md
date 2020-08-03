# Leagueside technical exercise

### Description

This app allows the user to input a radius, a latitude, a longitude, and a budget for donations
to a sportsleague. It returns the maximum number of results within the specified radius within
the specified budget.

For calculating distance, a function from https://www.geodatasource.com/developers/javascript was borrowed. This URL contains additional documentation. However, it is important to note that east longitudes are positive (so west are negative), and south longitudes are negative (so north longitudes are positive).

Included is a JSON file with 5 sample amounts based on the information provided with the challenge. Latitudes and longitudes have been added within the near geographic proximity of Seattle, WA as sample data. The JSON data contains 5 properties: id, name, latitude, longitude, budget.

### Software dependencies

Dependecies:

- React.js
- npm

### Project setup

To start:  
download the entire project and store locally.  
Open a terminal windown in the leagueside-technical-exercise folder.  
Run the following commands:

```
npm install
npm start
```

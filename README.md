## Wavespy

This is meant to be an exploration of wave data from NOAA buoys.

### NOAA
The data here is pulled from NOAA and their repoistory of buoy data.
https://www.ndbc.noaa.gov/data/realtime2/1801583.drift

#### Explanations of Fields
Explanations of what each field means can be found here: https://www.ndbc.noaa.gov/faq/measdes.shtml


### Hourly Data
#### Wave height status (Hourly)
This one tabular query provides the wave height statuses for a given region of buoys (hourly data). The example below uses Southern California: https://www.ndbc.noaa.gov/data/hourly2/hour_08.spec


### Buoy-Based Data
#### Wave Height
This tabular query provides a view of buoy data in for the current hour as well as historical data: https://www.ndbc.noaa.gov/data/realtime2/46222.spec



## GUIDE
Use terminal to navigate to the directory of the wavespy project. from there, run the local server at http-server -p 8000. To access the server from there, navigate to http://localhost:8000 to access the server!
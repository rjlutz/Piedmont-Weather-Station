import https from 'https';

const apiKey = 'XXXX';
const apiSecret = 'XXXX';
const stationId = 'XXXX';
const apiUrl = `https://api.weatherlink.com/v2/current/${stationId}?api-key=${apiKey}`;

const options = {
  method: 'GET',
  headers: {
    'X-Api-Secret': apiSecret,
  },
};

export const handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    const req = https.request(apiUrl, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const weatherData = JSON.parse(data);

            console.log('Successfully fetched weather data:', weatherData);

            const htmlResponse = `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Vollkorn" />
                <title>Weather Data</title>
                <style>
                  body {
                    background-color: #FFFFFF; /* White */
                    color: #144734; /* Piedmont Green */
                    font-family: Vollkorn, sans-serif;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    border: 20px solid #144734; /* Green border */
                    box-sizing: border-box;
                    padding: 20px;
                  }
                  #weather-container {
                    text-align: center;
                  }
                  h1 {
                    font-size: 2em;
                    color: #B5A268; /* Yohanian Gold */
                    background-color: #144734; /* Piedmont Green */
                    display: inline-block;
                    padding: 10px;
                    border-radius: 10px;
                  }
                  p {
                    font-size: 1.3em;
                    color: #144734; /* Piedmont Green */
                  }
                </style>
              </head>
              <body>
                <div id="weather-container">
                  <h1>Weather Data</h1>
                  <p>Temperature: ${weatherData.sensors[2].data[0].temp}°F</p>
                  <p>Humidity: ${weatherData.sensors[2].data[0].hum}%</p>
                  <p>Wind Speed: ${weatherData.sensors[2].data[0].wind_speed_avg_last_10_min} mph</p>
                  <p>Wind Gusting: ${weatherData.sensors[2].data[0].wind_speed_hi_last_2_min} mph</p>
                  <p>Rainfall (15 Min): ${weatherData.sensors[2].data[0].rainfall_last_15_min_in} inches</p>
                  <p>Rainfall (24 Hrs): ${weatherData.sensors[2].data[0].rainfall_last_24_hr_in} inches</p>
                  <p>Timestamp: ${new Date(weatherData.sensors[2].data[0].ts * 1000).toLocaleString()} Zulu</p>
                  <!-- Add more data points here -->
                </div>
              </body>
              </html>
            `;

            resolve({
              statusCode: 200,
              headers: {
                'Content-Type': 'text/html; charset=UTF-8',
              },
              body: htmlResponse,
            });
          } catch (error) {
            console.error('Error parsing weather data:', error);
            reject({
              statusCode: 500,
              body: 'Error parsing weather data. Check CloudWatch logs for more details.',
            });
          }
        } else {
          console.error('Failed to fetch weather data. Status code:', res.statusCode);
          reject({
            statusCode: res.statusCode,
            body: 'Failed to fetch weather data. Check CloudWatch logs for more details.',
          });
        }
      });
    });

    req.on('error', (error) => {
      console.error('Error making the request:', error);
      reject({
        statusCode: 500,
        body: 'Error making the request. Check CloudWatch logs for more details.',
      });
    });

    req.end();
  });
};

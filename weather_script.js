const https = require('https');

/**
 * Fetch weather data from OpenWeatherMap API.
 * @param {number} lat - Latitude of the location.
 * @param {number} lon - Longitude of the location.
 * @param {string} exclude - Data to exclude (e.g., "minutely,hourly").
 * @param {string} apiKey - Your OpenWeatherMap API key.
 * @returns {Promise<object>} - A promise that resolves to the weather data.
 */
function fetchWeatherData(lat, lon, exclude, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}`;
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';

            // Collect data chunks
            res.on('data', (chunk) => {
                data += chunk;
            });

            // Resolve the promise when the response ends
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData);
                } catch (error) {
                    reject(new Error('Error parsing JSON response'));
                }
            });
        }).on('error', (err) => {
            reject(new Error(`HTTP request failed: ${err.message}`));
        });
    });
}

// Example usage
// Replace with your actual API key
const apiKey = 'afd6e84d8de3479f0d031ab0a786fc61';
fetchWeatherData(35.6895, 139.6917, 'minutely,hourly', apiKey)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

module.exports = fetchWeatherData;
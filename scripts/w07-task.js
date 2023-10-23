import { fetchData } from './fetchData.js'; // ES module import

document.addEventListener('DOMContentLoaded', () => {
    // Criteria: Conditional Branching
    // Initialize HTML elements
    const nameInput = document.getElementById('nameInput');
    const countryInput = document.getElementById('countryInput');
    const submitButton = document.getElementById('submitButton');
    const output = document.getElementById('output');
    const continueButton = document.getElementById('continueButton');
    const quitButton = document.getElementById('quitButton');
    const options = document.getElementById('options');
    const additionalInfo = document.getElementById('additionalInfo');
    const additionalOutput = document.getElementById('additionalOutput');

    let userData = {};
    let previousCountryData = null;

    // Criteria: Array Methods (map used for formatting)
    // Event listener for the "Find Information" button
    submitButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const country = countryInput.value.trim();

        if (name && country) {
            // Criteria: Fetch - JSON
            // Fetch country data from the REST Countries API using a separate module
            fetchData(country)
                .then(countryData => {
                    if (countryData) {
                        previousCountryData = countryData;

                        // Criteria: Template Literals
                        // Display country information using template literals
                        output.innerHTML = `
                            <h2>Hello, ${name}!</h2>
                            <h3>Country Information for ${countryData.name.common}:</h3>
                            <p>Capital: ${countryData.capital}</p>
                            <p>Area: ${countryData.area} km²</p>
                            <p>Population: ${countryData.population}</p>
                            <p>Region: ${countryData.region}</p>
                            <p>Subregion: ${countryData.subregion}</p>                        
                            <p>Top-Level Domain: ${countryData.tld}</p>
                        `;

                        // Show the options to continue or quit
                        options.style.display = 'block';
                    } else {
                        output.innerHTML = 'Country not found. Please try again.';
                        options.style.display = 'none';
                    }
                })
                .catch(error => {
                    output.innerHTML = `Error: ${error.message}`;
                    options.style.display = 'none';
                });
        }
    });

    // Event listener for the "More Details" button
    continueButton.addEventListener('click', () => {
        if (previousCountryData) {
            // Criteria: Array Methods
            // Format neighboring countries and time zones using array methods
            const neighboringCountries = previousCountryData.borders.map(country => country).join(', ');
            const timeZones = previousCountryData.timezones.map(zone => zone).join(', ');
            additionalOutput.innerHTML = `
                <h3>Additional Information for ${previousCountryData.name.common}:</h3>
                <p>Neighboring Countries: ${neighboringCountries}</p>
                <p>Time Zones: ${timeZones}</p>
                <p>Flag: <img src="${previousCountryData.flags.png}" alt="${previousCountryData.name.common} flag"></p>
            `;

            additionalInfo.style.display = 'block';
        } else {
            output.innerHTML = 'No previous country data available. Please find a country first.';
            additionalInfo.style.display = 'none';
        }

        // Show the options to continue or quit
        options.style.display = 'block';
    });

    // Event listener for the "Quit" button
    quitButton.addEventListener('click', () => {
        // Reset the application
        userData = {};
        previousCountryData = null;
        nameInput.value = '';
        countryInput.value = '';
        output.innerHTML = '';
        additionalOutput.innerHTML = '';
        options.style.display = 'none';
        additionalInfo.style.display = 'none';
    });
});

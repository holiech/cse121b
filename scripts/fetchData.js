// ES module export for fetching data
export async function fetchData(countryName) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if (!response.ok) {
            throw new Error('Country not found or API error.');
        }
        const data = await response.json();
        return data[0];
    } catch (error) {
        throw error;
    }
}

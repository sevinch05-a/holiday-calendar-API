const apiKey = 'https://calendarific.com/api/v2'; 

export async function getCountries() {
    const response = await fetch(`https://calendarific.com/api/v2/countries`);
    const data = await response.json();
    return data.response.countries;
}

export async function getHolidays(countryCode, year) {
    const response = await fetch(`https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${countryCode}&year=${year}`);
    const data = await response.json();
    return data.response.holidays;
}

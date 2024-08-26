import { getCountries, getHolidays } from './api.mjs';
import { displayCalendar } from './calendar.mjs';

document.addEventListener('DOMContentLoaded', async () => {
    const countrySelect = document.getElementById('country');
    const loader = document.getElementById('loader');  // Ensure the loader element exists

    try {
        // Fetch and populate countries
        const countries = await getCountries();
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country['iso-3166'];
            option.textContent = country.country_name;
            countrySelect.appendChild(option);
        });

        // Handle country selection
        countrySelect.addEventListener('change', async () => {
            const countryCode = countrySelect.value;

            if (countryCode) {
                try {
                    loader.style.display = 'block';
                
                    const holidays = await getHolidays(countryCode, 2025);
                    displayCalendar(holidays);
                } catch (error) {
                    console.error('Error loading holidays:', error);
                } finally {
                    loader.style.display = 'none';
                }
            }
        });
    } catch (error) {
        console.error('Error loading countries:', error);
        loader.style.display = 'none';
    }
});
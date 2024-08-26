import { getCountries, getHolidays } from './api.mjs';
import { displayCalendar } from './calendar.mjs';

document.addEventListener('DOMContentLoaded', async () => {
    const countrySelect = document.getElementById('country');

    try {
        
        const countries = await getCountries();

        
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country['iso-3166'];
            option.textContent = country.country_name;
            countrySelect.appendChild(option);
        });

       
        countrySelect.addEventListener('change', async () => {
            const countryCode = countrySelect.value;


            if (countryCode) {
                try {
                    loader.style.display = 'block';
                
                const holidays = await getHolidays(countryCode, 2025);
                displayCalendar(holidays);
                loader.style.displey = 'none';
            } catch (error) {
                console.error('Error loading holidays:',error);
                loader.style.display = 'none';
            }

            }
        });
    } catch (error) {
        console.error('Error loading countries :', error);
        loader.style.display = 'none';
    }
});
export function displayCalendar(holidays) {
    const tableBody = document.querySelector('#holidayTable tbody');
    tableBody.innerHTML = ''; 
    holidays.forEach(holiday => {
        const row = document.createElement('tr');

        const date = new Date(holiday.date.iso);
        const dateString = date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
        });

        const weekday = date.toLocaleDateString('en-US', {
            weekday: 'long'
        });

        row.innerHTML = `
            <td>${dateString}</td>
            <td>${weekday}</td>
            <td>${holiday.name}</td>
            <td>${holiday.description || ''}</td>
        `;

        tableBody.appendChild(row);
    });
}
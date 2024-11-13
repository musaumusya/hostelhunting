function filterHostels() {
    const input = document.getElementById('location').value.toLowerCase();
    const hostels = document.querySelectorAll('.hostel');

    hostels.forEach(hostel => {
        const location = hostel.getAttribute('data-location').toLowerCase();
        if (location.includes(input)) {
            hostel.style.display = 'block';
        } else {
            hostel.style.display = 'none';
        }
    });
}

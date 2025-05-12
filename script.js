const apiKey = 'SIZNING_API_KALITINGIZ'; // Bu yerga o'zingizning API kalitingizni yozing

function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (city === '') {
        alert('Iltimos, shahar nomini kiriting!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uz`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('Shahar topilmadi yoki xatolik yuz berdi!');
                return;
            }

            document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').innerText = `Harorat: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Holat: ${data.weather[0].description}`;
            document.getElementById('humidity').innerText = `Namlik: ${data.main.humidity}%`;
            document.getElementById('wind').innerText = `Shamol: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            alert('Tarmoqda xatolik yuz berdi!');
            console.error(error);
        });
}

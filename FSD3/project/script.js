$(document).ready(function() {

    let searchedCities = [];
    let mainPlaces = [];

    // ---------------- Button Effects ----------------
    $('button').hover(
        function() { $(this).css('background-color', '#00506b'); },
        function() { 
            if($(this).hasClass('clicked')) $(this).css('background-color', '#00695c'); 
            else {
                if($(this).attr('id') === 'removeFirstBtn' || $(this).attr('id') === 'removeLastBtn') $(this).css('background-color', '#fbc02d');
                else $(this).css('background-color', '#00897b'); 
            }
        }
    );

    // ---------------- Weather Buttons ----------------
    $('#fetchWeatherBtn').click(function() {
        $(this).addClass('clicked');
        setTimeout(() => $(this).removeClass('clicked'), 200);
        fetchWeather();
    });

    $('#clearWeatherBtn').click(function() {
        $('#weather').fadeOut(300, function() { $(this).html('').show(); });
    });

    $('#removeFirstBtn').click(function() {
        $('#weather .weather-card:first').fadeOut(300, function() { $(this).remove(); });
    });

    $('#removeLastBtn').click(function() {
        $('#weather .weather-card:last').fadeOut(300, function() { $(this).remove(); });
    });

    $('#clearHistoryBtn').click(function() {
        $('#weatherHistory').html('');
        searchedCities = [];
    });

    // ---------------- Tesla News Buttons ----------------
    $('#fetchNewsBtn').click(function() {
        $(this).addClass('clicked');
        setTimeout(() => $(this).removeClass('clicked'), 200);
        fetchNews();
    });

    $('#clearNewsBtn').click(function() {
        $('#news').fadeOut(300, function() { $(this).html('').show(); });
    });

    // ---------------- Double Click & Key ----------------
    $(document).on('dblclick', '.weather-card', function() {
        $(this).fadeOut(300, function() { $(this).remove(); });
    });

    $('#news').dblclick(function() {
        $(this).html('<p><em>News section reset on double-click.</em></p>');
    });

    $('#cityInput').keydown(function(e) {
        if(e.key === 'Enter') fetchWeather();
    });

    // ---------------- Search History ----------------
    $(document).on('click', '#weatherHistory li', function() {
        const city = $(this).text();
        $('#cityInput').val(city);
        fetchWeather();
    });

    // ---------------- Main Places ----------------
    $('#addMainPlaceBtn').click(function() {
        const city = $('#mainPlaceInput').val().trim();
        if(city === '' || mainPlaces.includes(city)) return;

        mainPlaces.push(city);

        $('#mainPlacesList').append(`
            <li>
                <span class="placeName">${city}</span>
                <button class="completeBtn">View Completed</button>
            </li>
        `);

        $('#mainPlaceInput').val('');
    });

    $('#removeMainPlaceBtn').click(function() {
        const city = $('#mainPlaceInput').val().trim();
        if(city === '') return;
        const index = mainPlaces.indexOf(city);
        if(index !== -1) {
            mainPlaces.splice(index, 1);
            $('#mainPlacesList li').filter(function() { return $(this).find('.placeName').text() === city; }).remove();
        }
        $('#mainPlaceInput').val('');
    });

    // Click place to fetch weather
    $(document).on('click', '#mainPlacesList .placeName', function() {
        const city = $(this).text();
        $('#cityInput').val(city);
        fetchWeather();
    });

    // View Completed button removes place
    $(document).on('click', '.completeBtn', function() {
        const li = $(this).parent();
        const city = li.find('.placeName').text();
        const index = mainPlaces.indexOf(city);
        if(index !== -1) mainPlaces.splice(index, 1);
        li.fadeOut(200, function() { $(this).remove(); });
    });

    // Optional: double-click main place to remove quickly
    $(document).on('dblclick', '#mainPlacesList li', function() {
        const city = $(this).find('.placeName').text();
        const index = mainPlaces.indexOf(city);
        if(index !== -1) mainPlaces.splice(index, 1);
        $(this).fadeOut(200, function() { $(this).remove(); });
    });

    // ---------------- Functions ----------------
    function fetchWeather() {
        const city = $('#cityInput').val().trim();
        const apiKey = '4ba33d312ebebdc6b6ef3efc56f8573b';

        if(city === '') { 
            alert('Please enter a city name.');
            return;
        }

        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        $.ajax({
            url: weatherURL,
            method: 'GET',
            success: function(data) {
                if(data.cod === 200) {
                    // Add weather card
                    $('#weather').prepend(`
                        <div class="weather-card">
                            <h3>${data.name}</h3>
                            <p>Temperature: ${data.main.temp}°C</p>
                            <p>Weather: ${data.weather[0].description}</p>
                            <p>Humidity: ${data.main.humidity}%</p>
                            <p>Wind Speed: ${data.wind.speed} m/s</p>
                        </div>
                    `);

                    // Add to search history
                    if(!searchedCities.includes(city)) {
                        searchedCities.push(city);
                        $('#weatherHistory').append(`<li>${city}</li>`);
                    }

                } else {
                    alert('Error: ' + data.message);
                }
            },
            error: function() {
                alert('Error fetching weather data.');
            }
        });
    }

    function fetchNews() {
        const apiKey = 'd87ea646a9074fbfbc759645c488d692'; // updated key
        const newsURL = `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${apiKey}`;

        $.ajax({
            url: newsURL,
            method: 'GET',
            success: function(data) {
                if(data.status === 'ok') {
                    let html = '';
                    data.articles.slice(0, 5).forEach(article => {
                        html += `
                            <div class="news-card">
                                <a href="${article.url}" target="_blank"><strong>${article.title}</strong></a>
                                <p>${article.description || ''}</p>
                                <small>Source: ${article.source.name}</small>
                            </div>
                        `;
                    });
                    $('#news').html(html);
                } else {
                    alert('Error fetching news.');
                }
            },
            error: function() {
                alert('Error fetching news data.');
            }
        });
    }

});

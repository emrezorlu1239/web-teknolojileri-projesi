const API_KEY = '9be1d067a7b440da8def96f6558efb4a';
const BASE_URL = 'https://api.rawg.io/api/games';

const gamesContainer = document.getElementById('gamesContainer');
const spinner = document.getElementById('spinner');
const errorMsg = document.getElementById('errorMsg');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function showSpinner() {
    spinner.classList.remove('d-none');
    gamesContainer.innerHTML = '';
    errorMsg.classList.add('d-none');
}

function hideSpinner() {
    spinner.classList.add('d-none');
}

function showError() {
    hideSpinner();
    errorMsg.classList.remove('d-none');
}

function getPlatforms(game) {
    if (!game.platforms || game.platforms.length === 0) return 'Bilinmiyor';
    return game.platforms.map(p => p.platform.name).join(', ');
}

function createGameCard(game) {
    const image = game.background_image || 'https://via.placeholder.com/400x200?text=Gorsel+Yok';
    const rating = game.rating ? game.rating.toFixed(1) : 'N/A';
    const released = game.released || 'Bilinmiyor';
    const platforms = getPlatforms(game);

    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${image}" class="card-img-top" alt="${game.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${game.name}</h5>
                    <p class="card-text mb-1">
                        <i class="bi bi-star-fill text-warning"></i> <strong>Puan:</strong> ${rating}
                    </p>
                    <p class="card-text mb-1">
                        <i class="bi bi-calendar-event"></i> <strong>Cikis:</strong> ${released}
                    </p>
                    <p class="card-text text-muted small mt-auto">
                        <i class="bi bi-controller"></i> ${platforms}
                    </p>
                </div>
            </div>
        </div>
    `;
}

async function fetchGames(url) {
    showSpinner();
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API hatasi');
        const data = await response.json();
        hideSpinner();
        if (data.results && data.results.length > 0) {
            gamesContainer.innerHTML = data.results.map(createGameCard).join('');
        } else {
            gamesContainer.innerHTML = '<div class="col-12 text-center text-muted">Sonuc bulunamadi.</div>';
        }
    } catch (error) {
        showError();
    }
}

function searchGames() {
    const query = searchInput.value.trim();
    if (query) {
        const url = `${BASE_URL}?key=${API_KEY}&page_size=12&search=${encodeURIComponent(query)}`;
        fetchGames(url);
    }
}

searchBtn.addEventListener('click', searchGames);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchGames();
});

fetchGames(`${BASE_URL}?key=${API_KEY}&page_size=12&ordering=-rating`);

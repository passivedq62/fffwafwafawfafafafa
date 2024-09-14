document.getElementById('search').addEventListener('input', async function(event) {
    const query = event.target.value;
    const response = await fetch(`/search?q=${query}`);
    const results = await response.json();
    displayResults(results);
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = results.map(result => `
        <div>
            <h2>${result.name}</h2>
            <p>${result.description}</p>
        </div>
    `).join('');
}

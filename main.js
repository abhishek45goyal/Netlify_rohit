// JavaScript for Career Stats Table (Sample Data)
const careerStats = [
    { format: "Test", matches: 50, runs: 4150, centuries: 12 },
    { format: "ODI", matches: 200, runs: 9200, centuries: 29 },
    { format: "T20I", matches: 110, runs: 2600, centuries: 4 },
    // Add more career stats data here
];

function populateCareerStatsTable() {
    const tableBody = document.getElementById("career-stats-table-body");

    careerStats.forEach((stat) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${stat.format}</td><td>${stat.matches}</td><td>${stat.runs}</td><td>${stat.centuries}</td>`;
        tableBody.appendChild(row);
    });
}

// Initialize the career stats table
populateCareerStatsTable();

document.addEventListener("DOMContentLoaded", function() {
    showAll();
});

function showAll() {
    const tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear existing content
    showData([...inventars, ...vielas]);
}

function showVielas() {
    const tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear existing content
    showData(vielas);
}

function showInventars() {
    const tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear existing content
    showData(inventars);
}

function showData(data) {
    const tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];

    data.forEach(item => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.nosaukums;
        row.insertCell(2).textContent = item.tips;
        row.insertCell(3).textContent = item.apakstips;
        row.insertCell(4).textContent = item.skaits;
        row.insertCell(5).textContent = item.daudzums ? `${item.daudzums} ${item.mervienibas}` : '-';
        row.insertCell(6).textContent = item.komentari;
    });
}
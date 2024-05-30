document.addEventListener("DOMContentLoaded", () => {
   
    const attendanceData = [
        { timestamp: "2024-05-30 08:00:00", stop_id: 1, passenger_count: 5 },
        { timestamp: "2024-05-30 08:15:00", stop_id: 1, passenger_count: 8 },
        { timestamp: "2024-05-30 08:30:00", stop_id: 2, passenger_count: 12 },
        { timestamp: "2024-05-30 08:45:00", stop_id: 2, passenger_count: 7 }
    ];

    const dataList = document.getElementById("data-list");

    attendanceData.forEach(data => {
        const listItem = document.createElement("li");
        listItem.textContent = `${data.timestamp}: Stop ${data.stop_id} - ${data.passenger_count} passengers`;
        dataList.appendChild(listItem);
    });
});
function trackAttendance() {
    for (let day = 1; day <= 30; day++) {
        let status = (day <= 26) ? "Present" : "Leave";
        console.log(`Day ${day}: ${status}`);
    }
}

trackAttendance();

class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();

        setInterval(() => {
            this.update();
        }, 1000);
    }

    // Method to update HTML 
    update () {
        const parts = this.getTimeParts();
        // Add in '0' character 
        const secondFormatted = parts.second.toString().padStart(2, '0');
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}:${secondFormatted}`;
        // If isAm = true then print AM if not print PM 
        const amPm = parts.isAM ? "AM" : "PM";

        this.element.querySelector('.clock-time').textContent = timeFormatted;
        this.element.querySelector('.clock-ampm').textContent = amPm;
    }

    // Method to get the time 
    getTimeParts () {
        const now = new Date(); 

        return {
            second: now.getSeconds(),
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAM: now.getHours() < 12
        };
    }
}
const clock = document.querySelector('.clock');
const clockObject = new DigitalClock(clock);

clockObject.start();
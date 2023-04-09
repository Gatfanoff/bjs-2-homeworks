class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.intervalId = null
    }
    addClock (time, callback) { // добавление нового будильника
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if(this.alarmCollection.some(el => el.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({callback: callback, time: time, canCall: true})
    }

    removeClock (time) {    //удаление будильника по времени
        this.alarmCollection = this.alarmCollection.filter(el => (el.time !== time));
    }

    getCurrentFormattedTime() { // получение текущего времени в формате
        const now = new Date();
        const hour = now.getHours().toString().padStart(2, 0);
        
        const minute = now.getMinutes().toString().padStart(2, 0);
        return `${hour}:${minute}`
    }

    start() {   // запускает будильник
        if(this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(el => {
                if(el.time === this.getCurrentFormattedTime() && el.canCall === true) {
                    el.canCall = false;
                    el.callback();
                }
            })
        }, 1000)};

        stop () {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        resetAllCalls () {
            this.alarmCollection.forEach(el => el.canCall = true);
        }
        clearAlarms () {
            this.stop();
            this.alarmCollection = [];
        }
}

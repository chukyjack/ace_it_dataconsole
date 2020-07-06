export class Appointment {
    constructor(data) {
        this.requested_user = data.requested_user;
        this.start_time = this.formatDateTime(data.date + ':' + data.start_time);
        this.subject = data.subject;
    }
    requested_user: number;
    subject: number;
    start_time: string;

    formatDateTime(date: string) {
        console.log(date);
        const newdate = date.replace(/-/gi, ':');
        console.log(newdate);
        return newdate;
    }
}

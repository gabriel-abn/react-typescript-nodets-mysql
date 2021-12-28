import { User } from "./user";

export interface BasicSchedule {
    scheduleID: number;
}

export interface Schedule extends BasicSchedule {
    scheduleDate: string;
    scheduleTime: string;
    scheduleClientID: number;
    scheduleEmployeeID: number;
}

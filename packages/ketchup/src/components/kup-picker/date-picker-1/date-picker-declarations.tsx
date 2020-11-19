export interface STATE {
    year?: number;
    month?: number;
    selectedDay?: number;
    monthDetails?: any[];
}

export interface DAY_OF_MONTH {
    index: number;
    numberOfDays: number;
    firstDay: number;
    year: number;
    month: number;
}

export interface DAY {
    date: number;
    day: number;
    month: number;
    timestamp: number;
    dayString: string;
}

export interface User {
    userID: number;
    userLogin: string;
    userPassword: string;
    userRecEmail: string;
    userType: number;
}

export interface Client extends User {
    clientName: string;
    clientPayment?: string;
}

export interface Employee extends User {
    employeeName: string;
    employeeRep: number;
}

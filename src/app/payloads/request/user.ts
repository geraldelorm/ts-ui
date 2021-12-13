export class User {

    firstName: string
    lastName: string
    email: string
    password: string
    userRole:string

    constructor({ firstName, lastName, email, password, userRole }: { firstName: string; lastName: string; email: string; password: string; userRole: string; }) {
            this.userRole="Client"
    }
}
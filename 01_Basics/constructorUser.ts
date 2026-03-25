 //teha constructor
class UserCode {
    name: string = ''

    constructor(name: string) {
        this.name = name;
    }
}

type G = ConstructorParameters<typeof userCode>

let usrName = new UserCode("Sergei")
console.log(usrName.name)
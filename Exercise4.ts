class Person {
    _firstName: string = "";
    set firstName(value: string) {
        this._firstName = value.toUpperCase();
    }
    get firstName() {
        return this._firstName;
    }
}

var obj = new Person();
obj.firstName = "Asaad";
console.log(obj.firstName);

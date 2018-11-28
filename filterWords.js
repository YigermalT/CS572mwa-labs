window.onload = function () {

    String.prototype.filter = function (erase) {
        let input = this.toString();
        for (let val of erase) {
            input = input.replace(val, "***")
        }
        return input;
    }

    console.log(("This House is nice!").filter(["House", "nice"]));

}
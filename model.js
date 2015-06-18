var model = function (fields) {

    this.fields = ["index"];
    this.data = {};

    /* Generic Setter Method */
    this.set = function (key, value) {
        this.data[key] = value;
        return this;
    }

    /* Generic Getter Method */
    this.get = function (key) {
        return (this.data[key] ? this.data[key] : undefined);
    }

    /* Returns the Object as JSON Object */
    this.asObject = function () {
        return this.data;
    };

    /* Array Walk. Create for each "field" in "fields" Setter & Getter */
    for (var index = 0; index < this.fields.length; index++) {

        /* Upper Case First */
        var method = (this.fields[index].charAt(0).toUpperCase() + this.fields[index].slice(1)).toLowerCase();

        /* Create Setter Method */
        this[("set" + method)] = function (value) {
            this.set(this.fields[index], value);
            return this;
        };

        /* Create Getter Method */
        this[("get" + method)] = function () {
            return this.get(this.fields[index]);
        }
    }
};
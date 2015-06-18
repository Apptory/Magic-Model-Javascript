# Magic Model Javascript

Easy Starting Point for OOP Development. 

**Usage Example:**

1. Copy The Model and Change the Fields Property to Your Required Structure.
```
var Person = function() {

  this.fields = ["id", "name", "email", "phone"];
  this.data = {};

...
```

2. Initialize the Model.
```
var myClient = new Person();
```

3. Fill Your New Awesome Model with Data.
```
myClient.setId(10);
myClient.setName("Jimi Hendrix");
myClient.setEmail("jimi@gmail.com");

console.log("Hi " + myClient.getName() + "!");
```
Or just chain it up..!
```
myClient.setId(10).setName("Jimi Page").setEmail("jimi.p@gmail.com");

console.log("Hi " + myClient.getName() + "!");
```

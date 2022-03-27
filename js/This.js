//This keyword
var mob_maker = "Apple"
var mob_model = "11pro"
var price = 6000;
function wireless_charging(){
    document.write("It supports wireless charging.");
    //in this case the problem will be raised when we have to storee hundred different mobile. in that situation we have to use the same property again and again for fhiundred different mobile.We can copy and paste the same piece of code repeatedly to change the valus of these property for a particular mobileand this is an inefficient way for tackling such kind of problems. Here the concept of objects come into the picture. This objects help us to bundle these properties or attributes into a single identity
    
}
var mobile = {
    mob_maker:"Apple",
    mob_model:"11pro",
    price: 60000,
    wireless_charging: function(){
        document.write(" ")
    }
 //Here all the properties and function are coupled in a single variable called mobile. This mobile variable is called an object
}
    // thiskeyword point to a particular object 
    //new is used to allocate a new memory space for a new object in order to store the value against the properties and function

    var myVar = 100;
    function wholeThis(){
        var myVar = 200;
        alert (myVar);//200
        alert(this.myVar);//100

    }
     //WholsThis();infered as window.WholsThis()
     alert(obj.myVar) 


    

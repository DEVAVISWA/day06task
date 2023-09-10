//1
// class Movie {

//     constructor(title,studio,rating){
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating || "PG"
//     }
//     getPG (movies){
//         let arr=[]
//         for(let i=0;i<movies.length;i++) {
//             if(movies[i].rating == "PG"){
//                 arr.push(movies[i])
//             }
//         }
//         return arr;
//     }
    
// }
// const CR= new Movie("Casino Royale","Eon Productions","PG13")
// // console.log(CR)
// const JB = new Movie("JB","Eioio")
// // console.log(JB);
// const data = new Movie("Matrix", "WB", "PG16");
// const datum = new Movie("Matrix 2", "WB", "PG")
// let array = [];
// array.push(JB);
// array.push(CR);
// array.push(data);
// array.push(datum);
// console.log(array)
// console.log(JB.getPG(array))

//2
// class Circle {
//     constructor(radius, color){
//         this.radius = radius || 1.0;
//         this.color = color || "red";
//     }
//     getRadius(){
//         return this.radius;
//     }
//     setRadius(radius) {
//         this.radius = radius;
//     }
//     getColor() {
//         return this.color;
//     }
//     setColor(color) {
//         this.color=color
//     }
//     toString(){
//         return "Circle[radius="+this.radius+",color="+this.color+"]"
//     }
//     getArea() {
//         return Math.PI * this.radius * this.radius;
//     }
//     getCircumference() {
//         return Math.PI * 2 * this.radius;
//     }
// }

// var circle1 = new Circle();
// var circle2 = new Circle(3.0);
// var circle3 = new Circle(6.0, "blue")
// // var circle4 = new Circle("")

// console.log(circle1.toString())
// console.log(circle2.toString())
// console.log(circle3.toString())
// // console.log(circle4.toString())
// console.log(circle2.getRadius())
// circle2.setRadius(2.0)
// circle2.color="pink"
// console.log(circle2.toString())
// circle2.setColor("green")
// console.log(circle2.toString())

//3
// class Person {
//     constructor (name,age,height,weight) {
//         this.name=name
//         this.age=age
//         this.height=height
//         this.weight=weight
//     }
//     getDetails (){
//         console.log(`
//         the name of the person is ${this.name}
//         the age of ${this.name} is ${this.age}`)
//     }
//     getPhysique (){
//         console.log(`
//         the height of ${this.name} is ${this.height}cm
//         and his weight is ${this.weight} kg`)
//     }
// }
// const person1=new Person("JamesBond",54,183,86)
// console.log(person1)
// person1.getDetails()
// person1.getPhysique()

//4
// class Uber {
//     constructor(distance,modeofTransport) {
//         this.distance=distance
//         this.modeofTransport=modeofTransport
//     }
//     getUberPrice(){
//         let margin;
//         if (this.modeofTransport=="bike"){
//             margin=10
//         }else if (this.modeofTransport=="auto"){
//             margin=15
//         }else if (this.modeofTransport=="car"){
//             margin=20
//         }
//         this.price=this.distance * margin
//         console.log(`the cost for your ride is ${this.price} Rs`)

//     }
// }
// const ride1 = new Uber (15,"bike")
// ride1.getUberPrice()
// const ride2 = new Uber(15, "car")
// ride2.getUberPrice()
// const ride3 = new Uber (15,"auto")
// ride3.getUberPrice()
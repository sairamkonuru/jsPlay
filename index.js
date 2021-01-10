console.log("hello");

//factory functions
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("radius " + this.radius);
    },
  };
}

console.clear();
const circle = new createCircle(3);
//circle.draw();

//factory class
class Circle {
  constructor(radius) {
    const pi = 3.14;
    this.radius = radius;
    let perimeter = 0;
    let area = 0;

    let calculatePerimeter = function () {
      perimeter = 2 * pi * radius;
    };

    let calculateArea = function () {
      area = pi * Math.pow(radius, 2);
    };

    // this.getPerimeter = function () {
    //   return perimeter;
    // };

    this.getArea = function () {
      return area;
    };

    this.print = function () {
      calculateArea();
      calculatePerimeter();

      console.log("Radius : ", radius);
      console.log("Area : ", area);
      console.log("Perimeter : ", perimeter);
    };

    Object.defineProperty(this, "Perimeter", {
      get: function () {
        return perimeter;
      },
      // set: function (value) {
      //   perimeter = value;
      // },
    });
  }
}

const anotherCircle = new Circle(3.6);
anotherCircle.print();
console.log(anotherCircle.Perimeter);

anotherCircle.Perimeter = 45;

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

    // Object.defineProperty(this, "Perimeter", {
    //   get: function () {
    //     return perimeter;
    //   },
    //   // set: function (value) {
    //   //   perimeter = value;
    //   // },
    // });

    // Object.defineProperty(this, "Area", {
    //   set: function (value) {
    //     if (!value || isNaN(value)) throw Error("Invalid val");
    //     area = value;
    //   },
    // });

    // define object Properties
    Object.defineProperties(this, {
      Area: {
        set: function (value) {
          if (!value || isNaN(value)) throw Error("Invalid val");
          area = value;
        },
        get: function () {
          return area;
        },
      },
      Perimeter: {
        get: function () {
          return perimeter;
        },
        // set: function (value) {
        //   perimeter = value;
        // },
      },
    });
  }
}

const anotherCircle = new Circle(3.6);
anotherCircle.print();

//es 2019 implementation
class MyClass {
  // private property
  #x = 9;
  z = 2;

  // private method (can only be called within the class)
  #incX() {
    this.#x++;
  }

  incrementX() {
    this.#incX();
  }

  // private setter (can only be used within the class)
  set #setX(x) {
    this.#x = x;
  }

  // private getter (can only be used within the class)
  get getX() {
    return this.#x;
  }
}

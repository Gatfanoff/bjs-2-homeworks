const parseCount = (num) => { 
    let parse = Number.parseFloat(num);
    if(isNaN(parse)) { 
        throw new Error("Невалидное значение");
    }
    return parse;
}
const validateCount = (num) => {
    try {
      return parseCount(num);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor (one, two, three) {
        if(one + two <= three || one + three <= two || two + three <= one) {
            throw new Error("Треугольник с такими сторонами не существует"); 
        }
        this.one = one,
        this.two = two,
        this.three = three

    }
    
    get perimeter() {
        return this.one + this.two + this.three;
    }
    get area() {
        let p = (this.one + this.two + this.three) / 2;
        let area = +(Math.sqrt(p * (p - this.one) * (p - this.two) * (p - this.three))).toFixed(3);
        return area;
    }
}
function getTriangle(one, two, three) {
    try {
      return new Triangle(one, two, three);
    } catch {
        return {
            get perimeter() {
              return 'Ошибка! Треугольник не существует';
            },
            get area() {
              return 'Ошибка! Треугольник не существует';
            }
        }
    }
}
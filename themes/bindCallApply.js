const func = function() {
    console.log(this)
};

func.call(5)
// Можно ещё так
const obj = 5
func.call(obj)

function checkFun(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const obj = [1, 2, 3]

checkFun.call(obj, 1, 2, 3)

const person = {
    name : "Jack",
    prop : {
        name : "Daniel",
        getName : function() {
            return this.name;
        }
    }
}

const name1 = person.prop.getName.call(person)
console.log(name1);

const name2 = person.prop.getName(person.prop)
console.log(name2);


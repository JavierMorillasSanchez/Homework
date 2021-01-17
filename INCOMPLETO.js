// There are 12 people on an island. One person weighs less than the others, 11 people weigh exactly the same. 
// There is a seesaw that can be used to weigh the people.

// Design an algorithm to find the person who weighs less.
// The seesaw can only be used max 4 times; what does your algorithm look like?
// The seesaw can only be used max 3 times; what does your algorithm look like?

var people12=[2,2,2,2,2,2,2,2,2,2,2,1]

function firstBalance(){
    var W1 = function weight1(){
        var peopleRow1 = people12.slice(0,6)
        var weightPeopleRow1 = peopleRow1.reduce(function (x,y){
        return x+y
        })
        return W1
        }
        
    var W2 = function weight2(){
        var peopleRow2 = people12.slice(6,12)
        var weightPeopleRow2 = peopleRow2.reduce(function (z,t){
        return z+t
        })
        return W2
        }

    if(W1<W2){
    var balance1 = W1
    } else {
    var balance1 = W2
    }
    return balance1
    }

// el codigo no funciona y esta a la mitad, hay que hacer 3 calculos y solo esta hecho uno.
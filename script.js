/*

var firstName = 'John';

var lastName = 'Smith';

var age = '28';

var fullAge = true;

console.log(firstName, lastName, age, fullAge);

var job;
console.log(job);
/*

// testing git
job = 'teacher and mother ofc';
console.log(job);

*/
// Type coercion

/*
var firstName = 'John';
var age = '28';
console.log(firstName + ' ' + age);

var job, isMarrried;
job = 'teacher';
isMarried = 'false';

console.log(firstName + ' is a ' + age + ' year old ' + job  + '. is he married? ' + isMarried);

// Variable mutation
age  = 'twenty eight';
job = 'driver and hustler';

alert(firstName + ' is a ' + age + ' year old ' + job  + '. is he married? ' + isMarried);

var lastName = prompt('what is his last name?');
console.log(lastName);
*/

/************************ *
// Basic Operators
*************************/

// Math operators

/*
var now, yearJohn, yearMark;
now = 2018;

ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);


console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

//operator precedence

/*
var now, yearJohn, fullAge, isFullAge, ageJohn, ageMark, average;
now = 2018;
yearJohn = 1989;
fullAge = 18;


isFullAge = (now - yearJohn) >= fullAge;

console.log(isFullAge);

// grouping
ageJohn = now - yearJohn;
ageMark = 35;
average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments
*/

/*
var x, y;

x = y = (3 + 5) * 4 - 6; //26
console.log(x, y);


// more operators

x *= 2;

console.log(x, y);
x += 10;
console.log(x, y);

x ++;
console.log(x, y);
*/

// coding challenge

/*
var markHeight, markMass, johnHeight, johnMass, markBMI, johnBMI, markFatter;

markHeight = 1.69; //meters
markMass = 78;  //kg

johnHeight = 1.95;
johnMass = 112;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

markFatter = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log('Is Mark\'s BMI higher than John\'s? ' + markFatter);

if (markFatter)
{
console.log('Mark is fatter than john');
}
else 
{console.log('John is fatter than Mark');}


/**************************** *
 *   If/ else statements
 */
/*
 var firstName = 'john';
 var civilStatus = 'single';

 if (civilStatus === 'married')
 {
console.log(firstName + ' is married!');
 }
 else 
 {console.log(firstName + ' is single!');}

 var isMarried = true;
 if (isMarried)
 {
console.log(firstName + ' is married!');
 }
 else 
 {
     console.log(firstName + ' is single!');
}
*/

//boolean logic

/*
var firstName = 'John';
var age = 112;

if (age < 13)
{
    console.log(firstName + ' is a boy.');
} 
else if (age >=13 && age < 20)
 {
 console.log(firstName + ' is a teenager');
}
else 
{
    console.log(firstName + ' is a man ');
}
*/

// ternary operator and switch statements

/*
var firstName = 'John';
var age = 22;

age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer'
: 'juice';

console.log(drink);

var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + 'teaches kids how to code.');
        break;
    case 'driver':
            console.log(firstName + 'drives ppl');
            break;
    case 'designer':
            console.log(firstName + 'designs beautiful websites');
            break;
    default:
            console.log(firstName + 'john does something else');
    
}
*/
/*
var firstName = 'John';
var age = 112;

switch (true)
{
case age < 13:
console.log(firstName + ' is a boy');
break;
case age >=13 && age <20:
        console.log(firstName + ' is a teenager');
break;
case age >=20 && age <30:
        console.log(firstName + ' is a young man');
break;
case age >=30:
        console.log(firstName + ' is an adult');

}

console.log(firstName + ' is an adult');
/*
if (age < 13)
{
    console.log(firstName + ' is a boy.');
} 
else if (age >=13 && age < 20)
 {
 console.log(firstName + ' is a teenager');
}
else 
{
    console.log(firstName + ' is a man ');
}
*/
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('variable is defined');
}

else {
    console.log('variable hasnt been defined');
}

//equality operators 

if (height == '23') {
console.log('The  == operator does type coercion!');
}
else if (height === 23 ) {
    console.log('the numbers are exactly the same');
    }
    else 
    {
        console.log('numbers arent similar');
        }
*/
/*
var johnGame1, johnGame2, johnGame3, mikeGame1, mikeGame2, mikeGame3, johnAverage
, mikeAverage, johnTotalGames, mikeTotalGames, maryGame1, maryGame2, maryGame3, maryTotalGames, maryAverage;

johnGame1 = 116;
johnGame2 = 94;
johnGame3 = 123;
mikeGame1 = 1;
mikeGame2 = 1;
mikeGame3 = 1;
johnTotalGames = 3;
mikeTotalGames = 3;
maryGame1 = 1;
maryGame2 = 1;
maryGame3 = 1;
maryTotalGames = 3;

johnAverage = (johnGame1 + johnGame2 + johnGame3)/johnTotalGames;
mikeAverage = (mikeGame1 + mikeGame2 + mikeGame3)/mikeTotalGames;
maryAverage = (maryGame1 + maryGame2 + maryGame3)/maryTotalGames;


switch (true) {
case johnAverage > mikeAverage && johnAverage > maryAverage:
    console.log('john winsxx');
    break;
case mikeAverage > johnAverage && mikeAverage > maryAverage:
    console.log('mike wins');
    break;
case maryAverage > johnAverage && maryAverage > mikeAverage:
    console.log('mary wins');
    break;
case maryAverage == johnAverage && maryAverage == mikeAverage:
    console.log('3 way tie');
    break;
case maryAverage == johnAverage && maryAverage > mikeAverage:
    console.log('Mary and john tie and also beat mike');
    break;
case maryAverage == mikeAverage && maryAverage > johnAverage:
    console.log('Mary and mike tie and also beat john');
    break;
case mikeAverage == johnAverage && mikeAverage > maryAverage:
    console.log('john and mike tie and also beat mary');
}
*/

// Functions
/*
function calculateAge (birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);



console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);


function yearsUntilRetire (year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years');
    }
    else {
        console.log('this person is already retired');
    }
}


yearsUntilRetire (1990, 'John');
yearsUntilRetire (1948, 'Mike');
yearsUntilRetire (1969, 'Jane');

*/

// function statements and expressions
//function declaration
/*
function whatDoYouDo(job, firstName) {

}
*/

//function expression

/*
var whatDoYouDo = function(job, firstName) {
switch (job) {
    case 'teacher' :
        return firstName + ' teaches kids how to code'
    case 'driver' :
        return firstName + ' drives people about'
    case 'designer' :
        return firstName + ' makes lovely websites'
    default :
        return firstName + ' does something else'
}
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

//initialize new array
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// mutate array data
names[names.length] = 'Mary';

console.log(names.length);
console.log(names[1]);

names[1] = 'Ben';
console.log(names);
*/

// different data types
/*
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr');

console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'john is a designer'

console.log(isDesigner);
*/
/*
var billTips = [];
var billFinal = [];


function theTip(bill){

    /*
    if (bill <=50) {
        billTips.push(bill*0.20);
    }
    else if (bill >50 && bill <=200) {
        billTips.push(bill*0.15);
    }
    else {
        billTips.push(bill*0.10);
    }
   
  switch (true) {
  case (bill <= 50) : billTips.push(bill*0.20);
  billFinal.push(bill*0.20+bill)
  break;
  case (bill >50 && bill <=200) : billTips.push(bill*0.15);
  billFinal.push(bill*0.15+bill)
  break;
  case (bill >200) : billTips.push(bill*0.10);
  billFinal.push(bill*0.10+bill)     
  }
}

var mealOne = 124;
var mealTwo = 48;
var mealThree = 268;
theTip(mealOne);
theTip(mealTwo);
theTip(mealThree);

console.log(billTips);
console.log(billFinal);

*/

// objects and properties

// object literal
/*
var john = {
firstName: 'John',
lastName: 'Smith',
birthYear: '1990',
family: ['Jane','Mark','Bob','Emily'],
job: 'teacher',
isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

// new object

var jane = new Object();

jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);
*/
/*
var currentYear = '2018';

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1992',
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = currentYear - this.birthYear;
    }
    };

  

   john.calcAge();

   console.log(john);
 
*/
/*
var john = {
firstName: 'John',
lastName: 'Smith',
mass: 92,
height: 1.95,
calcBMI: function() {
    this.johnBMI = this.mass / (this.height*this.height);
    return this.johnBMI;
}
}


console.log(john);

var mark = {
    firstName: 'Mark',
    lastName: 'Dodson',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.markBMI = this.mass / (this.height*this.height);
        return this.markBMI;
    }
    }
    ;
    
    console.log(mark);


if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.firstName + ' ' + mark.lastName + '\'s' + ' BMI is higher than ' + john.firstName + ' ' + john.lastName + '\'s');
}
else if (john.johnBMI > mark.markBMI) {
    console.log(john.firstName + ' ' + john.lastName + '\'' + ' BMI is higher than ' + mark.firstName + ' ' + mark.lastName + '\'s');
}
else {
    console.log('their bmi is the same');
}
*/

// loops and iteration
/*
for (var i = 1; i < 20; i +=2) {
    console.log(i);
}
*/
// i = 0, 0 < 10 true, log i to console, update counter, i = 1, i < 10 true, log i to console, i++


//for loop
/*
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++)
{
    console.log(john[i]);
}

//while loop
/*
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/

//continue and break statements

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

/*
for (var i = 0; i < john.length; i++)
{
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++)
{
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
*/

//looping backwards
/*
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

var billValues = {
    billTip: [],
    billTotal: [],
    billPrices: [124, 48, 268, 180, 42],
    calcTip: function() {
for (i = 0; i < this.billPrices.length; i++) {
    if (this.billPrices[i] < 50){
        this.billTip[i] = this.billPrices[i]*0.20;
        this.billTotal[i] = this.billTip[i] + this.billPrices[i];
    }
    else if (this.billPrices[i] >=50 && this.billPrices[i] < 200) {
        this.billTip[i] = this.billPrices[i]*0.15;
        this.billTotal[i] = this.billTip[i] + this.billPrices[i];
    }
    else 
    this.billTip[i] = this.billPrices[i]*0.10;
    this.billTotal[i] = this.billTip[i] + this.billPrices[i];
}
    }    
};
billValues.calcTip();

var markValues = {
    markTip: [],
    markTotal: [],
    markPrices: [77, 475, 110, 45],
    calcTip: function() {
for (i = 0; i < this.markPrices.length; i++) {
    if (this.markPrices[i] < 100){
        this.markTip[i] = this.markPrices[i]*0.20;
        this.markTotal[i] = this.markTip[i] + this.markPrices[i];
    }
    else if (this.markPrices[i] >=100 && this.markPrices[i] <=300) {
        this.markTip[i] = this.markPrices[i]*0.10;
        this.markTotal[i] = this.markTip[i] + this.markPrices[i];
    }
    else 
    this.markTip[i] = this.markPrices[i]*0.25;
    this.markTotal[i] = this.markTip[i] + this.markPrices[i];
}
    }    
};
markValues.calcTip();





avgTips = function(tips) {
    var markTotalTips = 0;
for (i = 0; i < tips.length; i++) {
    
   markTotalTips = markTotalTips + tips[i];
}
return markTotalTips/tips.length;

}

avgTips(markValues.markTip);
avgTips(billValues.billTip);

markValues.average = avgTips(markValues.markTip);
billValues.average = avgTips(billValues.billTip);

console.log(billValues, markValues);

// Write a code which can give grades to students according to theirs marks using Conditionals


let mark=50     
if ( mark>=80)
{
    console.log('distintion')
}

else if (60<=mark && mark<=79)
{
    console.log('first class')
}
else if(50<=mark && mark<=59)
{
    console.log('second class')
}
else if(35<=mark && mark<=49)
{
    console.log('pass')
}
else
{
    console.log('fail')
}


// Get user input using prompt(“Enter your age:”). 
// if the user is 18 years or older than 18 years allow him to vote,
//  else infrom him how many more years he needs to become a voter.
let age=prompt('enter age')
if (age>=18){
    console.log('your eligible to vote')
}
else{
    console.log('wait until your age to become 18 years')
}
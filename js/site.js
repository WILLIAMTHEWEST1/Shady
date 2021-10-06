//Get starting values from the screen
//Controlling function
function getUserString() {
    //get the user's input
    let userString = document.getElementById("userString").value
    //reverse the user's input- separate function
    let revString = reverseStringA(userString)

    //compare original input and reversed input - separate function
    let results = compareStrings(userString, revString)

    //output results- separate function
    displayString(results);
};

    //This is REWIND'S JS 
    function reverseStringA(userString) {
        let startValue = userString.length - 1;
        let endValue = 0;

        let revString = "";


        for (let index = startValue; index >= endValue; index--) {
            revString += userString[index];
        };

        return revString


    };

    function reverseStringB(userString){

        return userString.split('').reverse().join("");

    }
    //This we create
    //A != a
    //Normalize the case
    //Extra credit- "A man, a plan, a canal; Panama" - is a palinddrome
    //RedEx is used for this- Google it.
    function compareStrings(userString, revString) {
        let user = userString.toLowerCase()
        let rev = revString.toLowerCase()

        if(user == rev){
         return "That's a Palindrome!";
        } else{
            return "That's not a Palindrome";
        }

    };

    //We want to output three things
    //1. The original input.
    //2.The reversed input.
    //3. Was it a palindrome?
    function displayString(result) {
        let output = document.getElementById("results");
        output.innerText = `${result}`;

    };
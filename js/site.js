//Get starting values from the screen
//Controlling function
function getUserString() {
    //get the user's input
    let userstring = document.getElementById("userString")
    //reverse the user's input- separate function
    let revString = reverseString(userString)

    //compare original input and reversed input - separate function
    let result = compareStrings(userString, revString)

    //output results- separate function
    displayString(result);
};

    //This is REWIND'S JS 
    function reverseString(userString) {
        let startValue = userString.length - 1;
        let endValue = 0;
        let revString = "";


        for (let index = startValue; index >= endValue; index--) {
            revString += userString[index];
        };

        return revString


    };
    //This we create
    //A != a
    //Normalize the case
    //Extra credit- "A man, a plan, a canal; Panama" - is a palinddrome
    //RedEx is used for this- Google it.
    function compareStrings(userString, revString) {
        let user = userString.toLowerCase()
        let rev = revString.toLowerCase()

    };

    //We want to output three things
    //1. The original input.
    //2.The reversed input.
    //3. Was it a palindrome?
    function displayString(revString) {
        let output = document.getElementById("results");
        output.innerHTML = revString;

    };
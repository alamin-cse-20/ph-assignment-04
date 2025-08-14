function  onlyCharacter( str ) {
    // You have to write your code here
    if (typeof str === 'string' && str.length > 0) {
        let noSpaceStr = str.replaceAll(" ", "");
        let capitalizedStr = noSpaceStr.toUpperCase();
        return capitalizedStr;

    }
    else return "Invalid";
}
console.log(onlyCharacter(" SUST CSE 2020, hello babe! ummah "));


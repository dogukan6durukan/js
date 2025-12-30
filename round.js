/*   
    Parse after the floating part    
    E.g
    12.5 -> 13
    24.6 -> 25
    17.3 -> 17        

*/

let num = 44 / 8.1;

function round(num) {

    const regex = /(\d+)\.(\d+)|(\d+)/;

    let match = String(num).match(regex);
    let isNotFloat = Number.isInteger(parseFloat(match[0]));

    if(isNotFloat) {
        return match[0];
    } else {
        let floatingPart = match[2][0];
        let num = Number(match[1]);
        if(floatingPart >= 5) {
            num = num + 1;
            return num;
        } else {
            return match[1];           
        }
    }

}

console.log(round(num));

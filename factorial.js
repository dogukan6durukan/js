function factorial(num) {

    if(Number(num)) {
        
        let number = Math.round(num);

        let i = 1;
        let result = 1;

        while(num >= i) {
            result *= num--;
        }

        console.log(result);
        return result;
    } else {
        console.error("Not a number!");
    }
}


factorial(4.5)


function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        if (n == 1) {
            return [0]
        }else if (n == 2) {
            return [0,1]
        }else {
            startingNumbers = [0, 1]
           for(i = 3; i <= n; i++) {  
               var computedNumber = startingNumbers[startingNumbers.length - 2] + startingNumbers[startingNumbers.length - 1]
               startingNumbers.push(computedNumber)
               } 
            return startingNumbers
    }
        
        
    
        
            
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    alert(fibonacciGenerator(prompt("Enter number for fibonacci: ")))
    
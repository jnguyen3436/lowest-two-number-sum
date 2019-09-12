function sumTwoSmallestNumbers(numbers) {  

 
  
for ( i = 0; i < numbers.length; i++)   
        {  
            for ( j = i + 1; j < numbers.length; j++)   
            {  
                if (numbers[i] > numbers[j])   
                {  
                    temp = numbers[i];  
                    numbers[i] = numbers[j];  
                    numbers[j] = temp;  
                }  
            }  
        } 
 

 
  
  return(numbers[0]+numbers[1])

}

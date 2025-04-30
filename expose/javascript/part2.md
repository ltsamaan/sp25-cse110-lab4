# Part 2. More of a challenge:

1. 3 will get printed out because the for loop increments i until it gets to the length of the input array prices which is 3. 
2. 150 will be printed out because discountedPrice gets recalculated for each item in the array, and since console.log() is outside of the for loop, it will show the output for the last calculated item price which is prices[2] = 300. Then when plugged in it calculates 300 * (1 - discount) with discount being 0.5 as shown in the input. This is equal to 150. 
3. 150 will be printed out because since console.log() is outside of the for loop, it returns the last calculated finalPrice which would be for the last price in prices (300). This is similar to the last question and uses the 150 calculated from discountedPrice. It does Math.round(150 * 100) / 100 which is 150. 
4. [50, 100, 150] will be returned in discounted but first, console.log() needs to be used around the calling of the function with the inputs. The reason this gets returned is because the for loop runs for each index/price in prices, and plugs the inputs into the equations. Discounted was first initialized to an empty array. Then the for loop starts with the first price 100 at index i = 0. discountedPrice = 100 * (1 - 0.5) = 50 and finalPrice = Math.round(50 * 100) / 100 = 50. Then this finalPrice value is pushed into the discounted array. The same process occurs for the rest of the indices in prices so the discounted array holds all of the new discounted prices for each original price. 
5. There will be a ReferenceError: i is not defined because i is declared with let inside of the for loop block so it cant be accessed outside of this block. The console.log(i) statement is outside of the for loop and let keeps it restricted to being used inside of the for loop block. 
6. There will be a ReferenceError: discountedPrices is not defined because discountedPrices is declared with let inside of the for loop block and can't be accessed outside of this block due to using "let". 
7. This will print 150 because finalPrice was initialized outside of the for loop block with let. It's within the same function/scope so after all of the calculations are done inside of the for loop, finalPrice can still be accessed because of its initialization with let on line 4. Line 4 and 14 are within the same scope of the function discountPrices. 
8. [50, 100, 150] will be returned. This function goes through the same process of calculating the discounts for each price in prices and pushing them to the discounted array. The reason this works using "let" is because dicounted is initialized on line 3 with the same scope as return discounted; This means that it is accessible throughout the entire function. The values get pushed into discounted on line 9 since its initialized outside of it and still within the scope. Then it gets returned which doesn't result in any errors.
9. There will be a ReferenceError: i is not defined because i is initialized with let within the for loop block. It can't be accessed outside of this block so its not within the same scope as line 11. 
10. 3 will be printed because length is initialied on line 4 with const. It is set as the length of the input array prices which is 3. Length isn't changed in any way so there is no errors and const is used correctly. This is able to successfully print the length on line 12. 
11. [50, 100, 150] will be printed out. This is because although the discounted array is initialized with const on line 3, const declared arrays are still mutable. Prices can be pushed into discounted on line 8 with no issues. An example of something that would result in an error is doing discounted = [50, 100] which is attempting to change the array as a whole. 

# Data Types

12.  
    - A: student.name
    - B: student['Grad Year']
    - C: student.greeting()
    - D: student.['Favorite Teacher'].name
    - E: student.courseLoad[0]

# Basic Operators & Type Conversion

13. Arithmetic
    - A: '32' because 3 is a string (concatenation)
    - B: 1 because - converts them to numbers
    - C: 3 because null is 0
    - D: '3null' because + just concatenates them as string, no data conversion
    - E: 4 because true = 1
    - F: 0 because false = 0
    - G: '3undefined' because + doesnt convert datatype
    - H: NaN because undefined is not a number

14. Comparison
    - A: true because converts 2 to number
    - B: false because of lexicographic order
    - C: true because converts '2' to number
    - D: false because types are different
    - E: false because true is 1
    - F: true because boolean(2) = true

15. The difference between == and === operators is that === also checks if the type is the same while == doesnt. For example, 2 == '2' would be true since they are both 2 and '2' gets converted to a number, but 2 === '2' is false because they arent the same type. One is an integer and the other is a string. == is loose equality and === is strict equality. 

16. Output: 
```
21
45
5
2
```

17. The result is [2, 4, 6]. I arrived at this result by first going through the for loop. At index 0 is the value 1. Then it calls callback(array[i]) which is the doSomething function parameter. This function multiplies the 1 by 2 which is 2 and pushes this to the newArr array. Then it does the same for index 1 which is 2. It goes into doSomething to do 2 * 2 which is 4 and that gets added to newArr. Finally, it does the same for the last index 3 and gets 3 * 2 = 6 for a final array of [2, 4, 6]. 

18. Output Example:
```
7:59:20 PM
7:59:21 PM
7:59:22 PM
7:59:23 PM
7:59:24 PM
```

19. Output:
```
1
4
3
2
```
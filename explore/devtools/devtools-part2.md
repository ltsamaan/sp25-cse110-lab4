1. The bug was the data type. num1 and num2 had to be Number data types for this to work. They were just getting concatenated as strings rather than added as number types. 

2. I fixed it by converting them both to a number using Number() around both num1 and num2. 
# Part 1. A Quick Intro:

1. values added: 20
2. final result: 20
3. You should not use var because it has a function scope, not a block scope. Using var to declare variables led to naming conflicts and scoping issues. 
4. values added: 20
5. Line 13 returns an error because there is an issue with scope. let result = 0 is inside of the if block so it only exists in there and can't be accessed outside of this block. 
```
/Users/loreensamaan/sp25-cse110-lab4/test.js:21
    console.log('final result: ', result);
                                  ^

ReferenceError: result is not defined
    at sumValues (/Users/loreensamaan/sp25-cse110-lab4/test.js:21:35)
    at Object.<anonymous> (/Users/loreensamaan/sp25-cse110-lab4/test.js:23:1)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49
```
6. Line 9 never runs and an error comes before it because const prevents result from being reassigned on line 7.
7. Line 13 also never runs because of the error on line 7 since const prevents result from being reassigned. 
```
/Users/loreensamaan/sp25-cse110-lab4/test.js:30
        result = num1 + num2;
               ^

TypeError: Assignment to constant variable.
    at sumValues (/Users/loreensamaan/sp25-cse110-lab4/test.js:30:16)
    at Object.<anonymous> (/Users/loreensamaan/sp25-cse110-lab4/test.js:35:1)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49
```
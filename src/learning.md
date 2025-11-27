#for fetching all arrow function
```
grep "=[ ,(a-zA-z)]\+=>" src/rover.js | grep -o "const [a-zA-Z]\+" | cut -d" " -f2
```

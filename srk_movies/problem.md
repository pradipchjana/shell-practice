1. How many films has Shah Rukh Khan acted in?
//grep -c -i "actor" finalSrk.csv

2. The year where SRK acted in the most number of movies and the number of movies he acted in that year.
//cut -d"," -f2 finalSrk.csv | uniq -c |sort -n| tail -n1 

3. List in alphabetical order all the directors that SRK has acted with.
//grep -i "actor" finalSrk.csv | grep -o "[^,\!]\+$" | sort -u | grep -v "Various"

4. List all directors that SRK has worked for more than once
//grep -o '[^,!]\+$' finalSrk.csv| sort |uniq -d 

5. Which is the most popular letter that SRK films begin with? Provide a command that gives both the count and the letter?
//grep -o "^." finalSrk.csv| sort| uniq -c| sort -n | tail -n1

6. List all the Shah Rukh Khan movies in the order of the year in which they were released. If a year has more than one movie, then it should be listed in reverse alphabetical order?
//grep -o "^.\+\d" finalSrk.csv |sort -r| sort -st"," -nk2 

7. Which director has SRK worked the most with?
//grep -o "[^,\!]\+$" finalSrk.csv| sort | uniq -c|sort -n|tail -n1

8. What is the most frequently occurring first word amongst all the movie titles in which SRK has acted
//grep -i "actor" finalSrk.csv |cut -d" " -f1 finalSrk.csv| sort| uniq -c| sort -n | tail -n2

9. Most frequently occurring word in SRK titles. Amongst ALL the words
//cut -d"," -f1 finalSrk.csv | grep -o "\b[a-zA-Z]\+\b" | tr "A-Z" "a-z"| sort|uniq -cd| sort -n|tail -n1
//cut -d"," -f1 finalSrk.csv | tr "A-Z " "a-z\n"| sort | uniq -cd | sort -n|tail -n1
//cut -d"," -f1 finalSrk.csv | tr " " "\n"| sort -i | uniq -cid | sort -n|tail -n1
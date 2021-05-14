# Invictus Assignment based on ReactJS

## Summary of work
- Created header component to give heading to the project
- Created a fetchapi module which fetch the raw data from the website
- Used fetch method to grab the data from the website in the form of text and covert the raw text into string 
- Remove all spaces and special characters from the string using split() and replace() function
- Used for loop to calculate the frequency of each distinct words 
- Used react hook to store the raw data in form of text 
- Used little bit Css to give a good look to the webpage
- Used table to store the words and frequency in tabular format 
- Used map function to print the words and frequency

## Heroku link of the project
[app link](https://invictus-wordsfreq-ranking.herokuapp.com/)

# test-case 1:
* input n=5

![](https://github.com/dorjee515/react-invictus-assigment/blob/master/test%20outputs/test1.png)

* output: [
       and : 10
       the : 9 
       in : 7
       to : 7
       with : 6
        ]
      
# test-case 2:
* input n=10 

![](https://github.com/dorjee515/react-invictus-assigment/blob/master/test%20outputs/test2.png)
* output: [
        and : 10
        the : 9
        in : 7
        to : 7
        of : 5
        with : 6
        a:5
        amazon : 5
        invictus : 4
        safety: 4
        ]
 # test-case 3:
 * input n=17

![](https://github.com/dorjee515/react-invictus-assigment/blob/master/test%20outputs/test3.png)
 * output:[
        and : 10
        the : 9
        in : 7
        to : 7
        with : 6
        of : 5
        a:5
        amazon : 5
        invictus : 4
        safety: 4
        is : 3
        compliance:3
        as : 3
        are : 3
        on : 3
        using : 3
        technologies:3
        ]

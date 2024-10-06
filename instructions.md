Here's a recap coding exercise on variables, template literals, console.log, and the prompt function:

**Objective:** Create a simple program that prompts the user to input their name, age, and favorite color, then outputs a custom message using template literals.

## Steps

1. Prompt the user to enter their name and assign the input to a variable named `userName`.
2. Prompt the user to enter their age and assign the input to a variable named `userAge`.
3. Prompt the user to enter their favorite color and assign the input to a variable named `favoriteColor`.
4. Create a template literal using the variables `userName`, `userAge`, and `favoriteColor` that outputs the following message:

```
Hello {userName}, you are {userAge} years old and your favorite color is {favoriteColor}.
```

5. Use `console.log` to print the custom message to the console.

<details>
<summary>Answer</summary>

```javascript
const userName = prompt('Enter your name:');
const userAge = prompt('Enter your age:');
const favoriteColor = prompt('Enter your favorite color:');

const customMessage = `Hello ${userName}, you are ${userAge} years old and your favorite color is ${favoriteColor}.`;
console.log(customMessage);
```

</details>

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A.

<i>I do not understand (greetign type mistake or trick you guys added) but I somehow answer with my broken english. We declare the greeting variable , create the greetign variable, assign an empty object to it, and then log the greetign variable to the console .Thats why this will give empty object.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>1 is number "2" is string.It will attempt to perform type coercion and convert the types if possible. If we want sum of them it will convert the number 1 to a string and then concatenate the two strings together, rather than performing numeric addition.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Because there is no connection with info.favouriteFood .Change the value of info.favoriteFood to "🍝". This means that info.favoriteFood is no longer a reference to the first element of the food array but is now a separate string containing "🍝".The food array remains unchanged by the reassignment of info.favoriteFood.
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>sayHi function have 'name' parameter whwn we call sayHi() function without provide argument of 'name' then name parameter return undefined.Inside the function, we use a template string to create a greeting message by concatenating the "Hi there, " string with the name variable. Since name is undefined in this case, the greeting message ends up being "Hi there, undefined" when we call sayHi() without an argument.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>We use forEach loop on nums array and give an condition if num value is truthy value count will be increse by 1 .In JavaScript, any number other than 0 is considered truthy, so this condition will be true for all elements except 0.In this case therer are three truthy value so count will be 3. </i>

</p>
</details>

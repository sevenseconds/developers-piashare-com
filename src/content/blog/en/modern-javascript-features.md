---
title: "Modern JavaScript Features You Should Know"
subtitle: "Explore the latest JavaScript features that will improve your development workflow and code quality."
author: "Maria Rodriguez"
date: 2024-12-05
readTime: "6 min read"
tags: ["JavaScript", "ES2024", "Modern Web"]
image: "https://via.placeholder.com/800x400"
description: "Explore the latest JavaScript features that will improve your development workflow and code quality."
lang: "en"
---

# Modern JavaScript Features You Should Know

## Optional Chaining

Safely access nested object properties:

```javascript
const user = {
  profile: {
    social: {
      twitter: '@johndoe'
    }
  }
};

// Before
const twitter = user && user.profile && user.profile.social && user.profile.social.twitter;

// After
const twitter = user?.profile?.social?.twitter;
```

## Nullish Coalescing

Provide fallback values for null/undefined:

```javascript
const config = {
  timeout: 0,
  retries: null
};

// Using || (problematic with falsy values)
const timeout = config.timeout || 5000; // Returns 5000 (incorrect!)

// Using ?? (only null/undefined)
const timeout = config.timeout ?? 5000; // Returns 0 (correct!)
const retries = config.retries ?? 3; // Returns 3 (correct!)
```

## Array Methods

New powerful array manipulation methods:

```javascript
const numbers = [1, 2, 3, 4, 5];

// findLast() - find from the end
const lastEven = numbers.findLast(n => n % 2 === 0); // 4

// toReversed() - non-mutating reverse
const reversed = numbers.toReversed(); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)

// groupBy() - group array elements
const words = ['apple', 'banana', 'apricot', 'blueberry'];
const grouped = Object.groupBy(words, word => word[0]);
// { a: ['apple', 'apricot'], b: ['banana', 'blueberry'] }
```

## Top-Level Await

Use await directly in modules:

```javascript
// fetch-data.js
const response = await fetch('/api/config');
const config = await response.json();

export default config;
```

## Private Class Fields

True privacy in JavaScript classes:

```javascript
class BankAccount {
  #balance = 0;
  #accountNumber;

  constructor(accountNumber) {
    this.#accountNumber = accountNumber;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }

  // Private method
  #validateTransaction(amount) {
    return amount > 0 && amount <= this.#balance;
  }
}

const account = new BankAccount('123456');
account.deposit(100);
console.log(account.balance); // 100
// console.log(account.#balance); // SyntaxError!
```

## Pattern Matching (Proposal)

Coming soon to JavaScript:

```javascript
// Future JavaScript
const result = match (value) {
  when Number if value > 0 -> 'positive'
  when Number if value < 0 -> 'negative'
  when 0 -> 'zero'
  when String -> 'text'
  when _ -> 'unknown'
}
```

These features make JavaScript more powerful, expressive, and safer. Start incorporating them into your projects today!
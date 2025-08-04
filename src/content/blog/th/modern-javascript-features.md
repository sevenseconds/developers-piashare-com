---
title: "ฟีเจอร์ JavaScript สมัยใหม่ที่คุณควรรู้"
subtitle: "สำรวจฟีเจอร์ JavaScript ล่าสุดที่จะปรับปรุงขั้นตอนการพัฒนาและคุณภาพโค้ดของคุณ"
date: 2025-08-03
readTime: "6 นาที"
tags: ["JavaScript", "ES2024", "เว็บสมัยใหม่"]
image: "https://via.placeholder.com/800x400"
description: "สำรวจฟีเจอร์ JavaScript ล่าสุดที่จะปรับปรุงขั้นตอนการพัฒนาและคุณภาพโค้ดของคุณ"
lang: "th"
---

# ฟีเจอร์ JavaScript สมัยใหม่ที่คุณควรรู้

## Optional Chaining

เข้าถึง properties ที่ซ้อนกันอย่างปลอดภัย:

```javascript
const user = {
  profile: {
    social: {
      twitter: '@johndoe'
    }
  }
};

// ก่อนหน้า
const twitter = user && user.profile && user.profile.social && user.profile.social.twitter;

// หลังจาก
const twitter = user?.profile?.social?.twitter;
```

## Nullish Coalescing

ให้ค่าสำรองสำหรับ null/undefined:

```javascript
const config = {
  timeout: 0,
  retries: null
};

// ใช้ || (มีปัญหากับค่า falsy)
const timeout = config.timeout || 5000; // ส่งคืน 5000 (ไม่ถูกต้อง!)

// ใช้ ?? (เฉพาะ null/undefined)
const timeout = config.timeout ?? 5000; // ส่งคืน 0 (ถูกต้อง!)
const retries = config.retries ?? 3; // ส่งคืน 3 (ถูกต้อง!)
```

## Array Methods

เมธอดจัดการ array ที่ทรงพลังใหม่:

```javascript
const numbers = [1, 2, 3, 4, 5];

// findLast() - ค้นหาจากปลาย
const lastEven = numbers.findLast(n => n % 2 === 0); // 4

// toReversed() - กลับลำดับแบบไม่เปลี่ยนต้นฉบับ
const reversed = numbers.toReversed(); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5] (ไม่เปลี่ยน)

// groupBy() - จัดกลุ่มองค์ประกอบ array
const words = ['apple', 'banana', 'apricot', 'blueberry'];
const grouped = Object.groupBy(words, word => word[0]);
// { a: ['apple', 'apricot'], b: ['banana', 'blueberry'] }
```

## Top-Level Await

ใช้ await โดยตรงใน modules:

```javascript
// fetch-data.js
const response = await fetch('/api/config');
const config = await response.json();

export default config;
```

## Private Class Fields

ความเป็นส่วนตัวที่แท้จริงใน JavaScript classes:

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

## Pattern Matching (ข้อเสนอ)

กำลังจะมาใน JavaScript:

```javascript
// JavaScript ในอนาคต
const result = match (value) {
  when Number if value > 0 -> 'positive'
  when Number if value < 0 -> 'negative'
  when 0 -> 'zero'
  when String -> 'text'
  when _ -> 'unknown'
}
```

ฟีเจอร์เหล่านี้ทำให้ JavaScript มีพลังมากขึ้น แสดงออกได้มากขึ้น และปลอดภัยขึ้น เริ่มนำไปใช้ในโปรเจ็กต์ของคุณวันนี้!
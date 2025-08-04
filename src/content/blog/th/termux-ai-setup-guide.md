---
title: "การติดตั้ง Termux พร้อมเครื่องมือ AI"
subtitle: "เรียนรู้วิธีติดตั้ง Termux จาก F-Droid และตั้งค่า Google Gemini CLI กับ Claude Code เพื่อพัฒนา AI บน Android"
date: 2025-08-03
readTime: "12 นาที"
tags: ["Termux", "Android", "Claude", "Gemini", "AI", "CLI", "คู่มือติดตั้ง"]
image: "https://via.placeholder.com/800x400"
description: "การตอนการติดตั้ง Termux จาก F-Droid และตั้งค่า Google Gemini CLI และ Claude Code สำหรับพัฒนา AI บนอุปกรณ์ Android"
lang: "th"
---

# การติดตั้ง Termux ไว้ใช้งาน Gemini CLI และ Claude Code

ถ้าคุณเป็นนักพัฒนาที่อยากใช้พลัง AI ตรงๆ บนมือถือหรือแท็บเล็ต Android คู่มือนี้เหมาะกับคุณมาก เราจะมาติดตั้ง Termux, Google Gemini CLI และ Claude Code กัน - เปลี่ยนมือถือ Android เป็นเครื่องมือพัฒนาระบบหรือแอพด้วย AI

## สารบัญ

1. [ทำไมต้องติดตั้ง Termux จาก F-Droid?](#ทำไมต้องติดตั้ง-termux-จาก-f-droid)
2. [ขั้นตอนที่ 1: ติดตั้ง Termux จาก F-Droid](#ขั้นตอนที่-1-ติดตั้ง-termux-จาก-f-droid)
   - [ดาวน์โหลด F-Droid](#ดาวน์โหลด-f-droid)
   - [ติดตั้ง Termux](#ติดตั้ง-termux)
3. [ขั้นตอนที่ 2: ตั้งค่า Google Gemini CLI](#ขั้นตอนที่-2-ตั้งค่า-google-gemini-cli)
   - [ติดตั้ง Node.js และ Gemini CLI](#ติดตั้ง-nodejs-และ-gemini-cli)
   - [กระบวนการยืนยันตัวตน Gemini](#กระบวนการยืนยันตัวตน-gemini)
   - [ตั้งค่าให้เสร็จสิ้น](#ตั้งค่าให้เสร็จสิ้น)
4. [ขั้นตอนที่ 3: ติดตั้ง Claude Code](#ขั้นตอนที่-3-ติดตั้ง-claude-code)
   - [ติดตั้ง Claude Code](#ติดตั้ง-claude-code)
   - [ตัวเลือกการยืนยันตัวตน](#ตัวเลือกการยืนยันตัวตน)
   - [เริ่มต้นใช้งาน](#เริ่มต้นใช้งาน)
   - [การใช้งานพื้นฐาน](#การใช้งานพื้นฐาน)
5. [การตั้งค่า Termux ที่จำเป็น](#การตั้งค่า-termux-ที่จำเป็น)
   - [ตั้งค่า Storage](#ตั้งค่า-storage)
   - [ตั้งค่าสภาพแวดล้อม Shell](#ตั้งค่าสภาพแวดล้อม-shell)
6. [เทคนิคการใช้งาน & Workflow](#เทคนิคการใช้งาน--workflow)
   - [ปรึกษา AI แบบเร็ว](#ปรึกษา-ai-แบบเร็ว)
   - [Workflow การพัฒนา](#workflow-การพัฒนา)
7. [แก้ไขปัญหาที่พบบ่อย](#แก้ไขปัญหาที่พบบ่อย)
   - [สิทธิ์ Termux](#สิทธิ์-termux)
   - [การยืนยันตัวตน Gemini ล้มเหลว](#การยืนยันตัวตน-gemini-ล้มเหลว)
   - [Claude Code เชื่อมต่อไม่ได้](#claude-code-เชื่อมต่อไม่ได้)

## ทำไมต้องติดตั้ง Termux จาก F-Droid?

> **ระบบรักษาความปลอดภัยบน Android**: Google ได้เข้มงวดนโยบายความปลอดภัยมากขึ้นเรื่อยๆ ตั้งแต่ Android 10 ซึ่งดีสำหรับผู้ใช้ทั่วไป แต่ก็เพิ่มความยุ่งยากสำหรับนักพัฒนาอย่างเราๆ
>
> **ข้อบังคับของ Play Store (ข้อบังคับ Android 10+):**
> - **ข้อกำหนด Target API** - แอปต้องรองรับ Android เวอร์ชั่นใหม่ๆ
> - **ข้อจำกัด Scoped storage** - จำกัดการเข้าถึงไฟล์ในระบบ
> - **ข้อจำกัดการทำงานเบื้องหลัง** - จำกัดกระบวนการที่ทำงานนาน
> - **นโยบายความปลอดภัยเครือข่าย** - บังคับใช้ HTTPS อย่างเข้มงวด
>
> **สรุป**: นักพัฒนา Termux ก็เลยไม่อัพเดตเวอร์ชั่น Termux ใน Google Play Store แล้ว เพราะถ้าจะอัพเวอร์ชั่นใหม่ก็ต้องไปแก้ตามขอกำหนดใหม่ของ Play Store เรื่อยๆ
>
> **F-Droid คืออะไร:**
> - **App store อิสระ** ที่ไม่บังคับใช้นโยบายเข้มงวดของ Google ส่วนใหญ่เป็นแอปโอเพนซอร์ส หรือแอปสำหรับนักพัฒนา
> - **อนุญาตการเข้าถึงระบบที่กว้างขึ้น** สำหรับเครื่องมือนักพัฒนา
> - **อัพเดต Termux เวอร์ชั่นล่าสุด** อย่างสม่ำเสมอ
>
> **สรุป**: F-Droid เป็นแหล่งเดียวที่เชื่อถือได้สำหรับการติดตั้ง Termux ที่ใช้งานได้จริงและทันสมัยบนอุปกรณ์ Android ปัจจุบัน

## ขั้นตอนที่ 1: ติดตั้ง Termux จาก F-Droid

### ดาวน์โหลด F-Droid

1. **เปิดเบราว์เซอร์** ไปที่ [f-droid.org](https://f-droid.org)
2. **ดาวน์โหลด F-Droid APK** (ประมาณ 10MB)
3. **เปิด "ติดตั้งจากแหล่งที่ไม่รู้จัก"** ในการตั้งค่า Android
4. **ติดตั้ง F-Droid** - ประตูสู่เครื่องมือนักพัฒนา

### ติดตั้ง Termux

1. **เปิด F-Droid** แล้วค้นหา "Termux"
2. **ติดตั้งแอป Termux หลัก** (อย่าลงจาก Play Store นะครับ มันเวอร์ชั่นเก่า)
3. **ติดตั้ง Termux:API เพิ่ม** (ไม่บังคับ แต่ลงแล้วจะสะดวกขึ้น โดยเฉพาะเวลา login Google account ของ Gemini CLI) - อันนี้เอาไว้เขียนสคริปต์ที่ใช้ API ของ Android เช่น การส่ง SMS หรือเข้าถึงกล้อง
4. **อนุญาตสิทธิ์ที่ Termux ขอ** โดยปกติจะขอสิทธิ์แบบเข้าถึงเกือบทุกอย่างที่จำเป็นสำหรับการพัฒนา

**หมายเหตุ:** จริงๆ ลงแอป Termux หลักเพียงอย่างเดียวก็พอแล้ว ส่วน Termux:API เป็นตัวเลือกเสริมที่ให้ฟีเจอร์เชื่อมต่อ Android เพิ่มเติมถ้าต้องการใช้ภายหลัง

## ขั้นตอนที่ 2: ตั้งค่า Google Gemini CLI

Gemini AI ของ Google แต่การ login ด้วย Google Account บน Termux อาจจะยุ่งยากนิดหน่อย

### ติดตั้ง Node.js และ Gemini CLI

```bash
# อัปเดตแพ็กเกจ
pkg update && pkg upgrade

# ติดตั้ง Node.js จะลง Node.js LTS (Long Term Support) หรือเวอร์ชั่นล่าสุดก็ได้
pkg install nodejs-lts

# ติดตั้ง Google Gemini CLI แบบ global
npm install -g @google/gemini-cli
```

### กระบวนการยืนยันตัวตน Gemini

ล็อกอินครั้งแรก Gemini CLI จะยุ่งยากนิดนิง ถ้าต้องการล็อกอินด้วย Google Account เวอร์ชั่นปัจจุบัน ในอนาคตอาจจะไม่ต้องทำตามนี้ก็ได้

#### วิธียืนยันตัวตนแบบง่าย

```bash
# เริ่ม Gemini ในโหมด debug
gemini --debug

# ที่ช่อง input ให้พิมพ์:
/auth

# Gemini จะแสดงตัวเลือกการยืนยันตัวตน 3 แบบ:
# 1. Login with Google Account
# 2. Use Gemini API Key  
# 3. Vertex AI
```

**Login with Google Account**
- Gemini จะแสดง URL ยืนยันตัวตนที่ยาว
- **คัดลอก URL นี้แล้วเปิดในเบราว์เซอร์ Android**
- ทำ OAuth flow ให้เสร็จแล้วกลับมาที่ terminal
- เหมาะสำหรับการใช้งานส่วนตัวและเริ่มต้นใช้งานแบบง่าย

**Use Gemini API Key**
- ไปขอ API key จาก [Google AI Studio](https://makersuite.google.com/app/apikey)
- ตั้งเป็น environment variable:
```bash
export GEMINI_API_KEY=your_key_here
```
- เพิ่มเข้า `.bashrc` เพื่อความคงทน:
```bash
echo 'export GEMINI_API_KEY=your_key_here' >> ~/.bashrc
```
- เหมาะสำหรับการทำ automation และ scripting

**Vertex AI**
- สำหรับผู้ใช้ Google Cloud Platform ที่มีสิทธิ์เข้าถึง Vertex AI
- ต้องตั้งค่า GCP project และการยืนยันตัวตน
- เหมาะสำหรับองค์กรและสภาพแวดล้อม production

### ตั้งค่าให้เสร็จสิ้น

```bash
# หลังยืนยันตัวตนแล้ว ทดสอบการตั้งค่า
# สามารถเริ่มคุยได้เลยใน session เดียวกัน
# หรือออกแล้วเริ่ม session ใหม่:
gemini

# ก็จะเห็น text box คล้ายๆ chat แสดงว่าพร้อมใช้งานแล้วครับ
```

## ขั้นตอนที่ 3: ติดตั้ง Claude Code

Claude Code อันนี้จะง่ายกว่านิดนึงเมื่อเทียบกับ Gemini CLI

### ติดตั้ง Claude Code

```bash
# ติดตั้งด้วย npm (ต้องมี Node.js 18+ ขึ้นไป)
npm install -g @anthropic-ai/claude-code

# ตรวจสอบการติดตั้งและความเข้ากันได้ของระบบ
claude doctor
```

### ตัวเลือกการยืนยันตัวตน

Claude Code มี**วิธียืนยันตัวตนหลายแบบ**:

1. **Anthropic Console** (แนะนำ)
   - เชื่อมต่อ OAuth กับบัญชีที่มีการเรียกเก็บเงิน
   - ง่ายสุดสำหรับการใช้ API

2. **Claude App Subscription**
   - ใช้แพ็กเกจ Claude Pro หรือ Max
   - เหมาะถ้ามี subscription อยู่แล้ว

3. **Enterprise Platforms**
   - Amazon Bedrock หรือ Google Vertex AI
   - สำหรับผู้ใช้องค์กร

### เริ่มต้นใช้งาน

```bash
# เริ่ม Claude Code (จะถามการยืนยันตัวตนในครั้งแรก)
claude

# เครื่องมือจะแนะนำขั้นตอนการยืนยันตัวตน
# ข้อมูลประจำตัวจะถูกเก็บอย่างปลอดภัยในระบบ
```

### การใช้งานพื้นฐาน

```bash
# โหมด interactive
claude

# งานครั้งเดียว
claude "อธิบายโค้ดนี้"

# ต่อการสนทนาล่าสุด
claude -c

# ทำงานกับ Git
claude commit
```

## การตั้งค่า Termux ที่จำเป็น

ตอนนี้เครื่องมือ AI พร้อมแล้ว มาทำให้สภาพแวดล้อม Termux สบายขึ้นกัน:

### ตั้งค่า Storage

```bash
# ให้ Termux เข้าถึง storage ของมือถือได้
termux-setup-storage

# จะสร้าง ~/storage พร้อม link ไปยังโฟลเดอร์ Android ต่างๆ
# แนะนำให้สร้างโฟลเดอร์สำหรับเวิร์กสเปซก่อน แล้วค่อยสร้างโปรเจ็กต์ข้างในนั้น
mkdir -p ~/storage/workspaces
```

### ตั้งค่าสภาพแวดล้อม Shell

```bash
# ติดตั้งเครื่องมือพัฒนาที่จำเป็น
pkg install git vim curl wget openssh
```

## เทคนิคการใช้งาน & Workflow

### ปรึกษา AI แบบเร็ว

```bash
# ถาม Gemini แบบเร็ว - เริ่ม interactive session
gemini
# แล้วพิมพ์คำถามในแชท

# ใช้ Claude Code สำหรับคำถามพัฒนา
claude "Review React component นี้ตาม best practices"
```

### Workflow การพัฒนา

```bash
# Clone โปรเจ็กต์
git clone https://github.com/yourproject/repo.git
cd repo

# ใช้ Claude Code review โค้ด
claude "review โค้ดในโฟลเดอร์ src/"

# ถาม Gemini เรื่องการปรับปรุงประสิทธิภาพ
gemini
# แล้วถาม: "ทำยังไงให้ Node.js app นี้เร็วขึ้น?"
```

## แก้ไขปัญหาที่พบบ่อย

### สิทธิ์ Termux
ถ้ามีปัญหาเรื่องสิทธิ์:
```bash
# Reset สิทธิ์ storage ของ Termux
termux-setup-storage
```

### การยืนยันตัวตน Gemini ล้มเหลว
```bash
# ลบ credential ที่เก็บไว้แล้วลองใหม่
rm -rf ~/.config/gemini
gemini --debug
# แล้วพิมพ์: /auth
```

### Claude Code เชื่อมต่อไม่ได้
```bash
# เช็คอินเทอร์เน็ตแล้วเริ่ม Claude Code ใหม่
claude
```

**ขอให้สนุกกับการเขียนโค้ดครับ!** 🚀
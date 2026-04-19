var e=`# 🔢 int — Integer

> 🏠 Parent: [[1.01_Variables]] · [[00_Index]]
> 📂 Section: Variables & Data Types
> 🔧 Methods: [[2.06_Int_Methods]]

---

## 📖 Beginner-Friendly Explanation

An **integer** (\`int\`) is a **whole number** — no decimal point, no fractions. It can be positive, negative, or zero.

### What is it?

Integers represent countable, exact quantities. Unlike [[1.04_Float]], they have no decimal part.

### Why does it exist?

Many things in real life are whole numbers — your age, the number of students in a class, or the number of lives in a game. Python needs a way to store these exactly.

### Why does it matter in real life?

- Counting items in a shopping cart
- Keeping score in a game
- Tracking the number of followers on social media
- Page numbers in a book

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["🔢 int — Integer"] --> B["Stores whole numbers"]
    B --> C["Positive: 1, 42, 1000"]
    B --> D["Negative: -5, -100"]
    B --> E["Zero: 0"]
    A --> F["🔧 Has 11 Methods"]
    F --> G["[[Int Methods]]"]
    A --> H["Properties"]
    H --> I["Immutable — value cannot change"]
    H --> J["Unlimited size — Python handles big numbers"]
    H --> K["Can convert to [[float]], [[str]], [[bool]]"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
age = 15                →  Create an integer variable
count = -3              →  Negative integers are valid
big = 1_000_000         →  Underscores for readability (still 1000000)
zero = 0                →  Zero is an integer

type(age)               →  <class 'int'>
int("42")               →  Convert string to integer: 42
int(3.9)                →  Convert float to integer: 3 (rounds DOWN)
int(True)               →  Convert bool to integer: 1
\`\`\`

### How Python interprets it:

\`\`\`text
score = 100
 ↑       ↑
name    value (stored as int in memory)
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You're tracking your study hours for the week.

\`\`\`python
# Study tracker
monday = 3
tuesday = 2
wednesday = 4
thursday = 1
friday = 5

# Total hours (using arithmetic operators)
total = monday + tuesday + wednesday + thursday + friday
print(total)            # 15

# Average (this becomes a float!)
average = total / 5
print(average)          # 3.0 → now it's a float!
print(type(average))    # <class 'float'>

# Integer division (stays int)
average_int = total // 5
print(average_int)      # 3 → stays an integer!
\`\`\`

**Step-by-step:**
1. Each day's hours is stored as an \`int\` — whole numbers
2. \`+\` [[3.01_Arithmetic|operator]] adds them: \`3 + 2 + 4 + 1 + 5 = 15\`
3. \`/\` division **always** returns a [[1.04_Float]], even if the answer is whole
4. \`//\` floor division gives you an \`int\` result (rounds down)

### 🧒 10-year-old beginner

**Scenario:** You're counting your **sticker collection** ⭐

\`\`\`python
# Sticker collection
star_stickers = 12
heart_stickers = 8
total_stickers = star_stickers + heart_stickers

print(total_stickers)    # 20

# You gave 3 stickers to your friend
gave_away = 3
remaining = total_stickers - gave_away
print(remaining)         # 17
\`\`\`

**Step-by-step:**
1. \`star_stickers = 12\` → You have 12 star stickers (a whole number!)
2. \`heart_stickers = 8\` → You have 8 heart stickers
3. \`12 + 8 = 20\` → Python adds them together like you would
4. \`20 - 3 = 17\` → You gave 3 away, Python subtracts

You can't have **half a sticker** — that's why we use integers for counting!

---

## 🔗 Related Concepts

- **Parent:** [[1.01_Variables]]
- **Methods:** [[2.06_Int_Methods]] (11 methods)
- **Related types:** [[1.04_Float]] (decimal version), [[1.05_Bool]] (True=1, False=0), [[1.02_String]] (convert with \`str()\`)
- **Operators:** [[3.01_Arithmetic]] (math), [[3.04_Comparison]] (compare numbers), [[3.02_Assignment]] (update values), [[3.07_Bitwise]] (binary operations)
- **Key concept:** [[2.02_Mutability_vs_Immutability]] — integers are **immutable**
`;export{e as default};
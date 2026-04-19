var e=`# ➕ Arithmetic Operators

> 🏠 Parent: [[00_Index]]
> 📂 Section: Operators

---

## 📖 Beginner-Friendly Explanation

**Arithmetic operators** are the **math symbols** in Python. They let you add, subtract, multiply, divide, and more — just like math class, but the computer does the calculating.

### What is it?

Arithmetic operators perform mathematical operations on numbers ([[1.03_Interger]], [[1.04_Float]]).

### Why does it exist?

Programs need to calculate things! From simple addition to complex formulas, arithmetic operators are the building blocks of all computation.

### Why does it matter in real life?

- Calculating totals in a shopping cart
- Splitting a bill among friends
- Converting temperatures
- Game physics and scoring

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR  
	A[Arithmetic Operators] --> B[Addition +]  
	A --> C[Subtraction -]  
	A --> D[Multiplication *]  
	A --> E[Division /]  
	A --> F[Floor Division //]  
	A --> G[Modulus %]  
	A --> H[Exponentiation **]  
	  
	B --> I[Example: 5 + 3 = 8]  
	E --> J[Result: float]  
	F --> K[Result: integer]  
	G --> L[Result: remainder]  
	H --> M[Result: power]
\`\`\`



---

## ⚙️ Syntax Breakdown

| Operator | Name           | Example   | Result     | Notes                             |
| -------- | -------------- | --------- | ---------- | --------------------------------- |
| \`+\`      | Addition       | \`5 + 3\`   | \`8\`        | Also joins [[1.02_String]] and [[1.07_list]]   |
| \`-\`      | Subtraction    | \`10 - 4\`  | \`6\`        |                                   |
| \`*\`      | Multiplication | \`3 * 4\`   | \`12\`       | Also repeats [[1.02_String]] and [[1.07_list]] |
| \`/\`      | Division       | \`10 / 3\`  | \`3.333...\` | **Always** returns [[1.04_Float]]      |
| \`//\`     | Floor Division | \`10 // 3\` | \`3\`        | Rounds DOWN to nearest [[1.03_Interger]]    |
| \`%\`      | Modulus        | \`10 % 3\`  | \`1\`        | Returns the **remainder**         |
| \`**\`     | Exponentiation | \`2 ** 3\`  | \`8\`        | 2 to the power of 3               |

\`\`\`text
# Division always returns float:
10 / 5    →  2.0 (not 2!)
10 / 3    →  3.3333333333333335

# Floor division rounds DOWN:
10 // 3   →  3
-10 // 3  →  -4 (rounds toward negative infinity!)

# Modulus gives the remainder:
10 % 3    →  1 (because 10 = 3×3 + 1)
15 % 5    →  0 (perfectly divisible — no remainder)

# Exponentiation:
2 ** 10   →  1024
9 ** 0.5  →  3.0 (square root!)
\`\`\`

### String and list tricks:

\`\`\`text
# + concatenates (joins):
"Hello" + " " + "World"   →  "Hello World"
[1, 2] + [3, 4]           →  [1, 2, 3, 4]

# * repeats:
"Ha" * 3                   →  "HaHaHa"
[0] * 5                    →  [0, 0, 0, 0, 0]
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Calculating your monthly budget.

\`\`\`python
# Monthly income
salary = 1200.00
bonus = 200.00
total_income = salary + bonus         # 1400.00

# Expenses
rent = 500.00
food = 300.00
transport = 150.00
total_expenses = rent + food + transport  # 950.00

# Savings
savings = total_income - total_expenses   # 450.00
savings_percent = (savings / total_income) * 100
print(f"Savings: \${savings:.2f} ({savings_percent:.1f}%)")
# Savings: $450.00 (32.1%)

# How many months to save $5000?
target = 5000
months = target // int(savings)       # 11 (floor division)
remaining = target % int(savings)     # 50 (remainder)
print(f"{months} months + \${remaining} left")
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Running a **lemonade stand** 🍋

\`\`\`python
# Lemonade stand math!
price_per_cup = 2          # $2 per cup
cups_sold = 15

# Total money
total = price_per_cup * cups_sold    # 30
print(f"I made \${total}!")           # I made $30!

# Share with your friend equally
each_gets = total / 2                # 15.0
print(f"We each get: \${each_gets}")

# If 3 friends share 10 candies
candies = 10
friends = 3
each = candies // friends    # 3 (floor division — whole candies only!)
leftover = candies % friends # 1 (one candy left over!)
print(f"Each gets {each}, with {leftover} left over")
\`\`\`

---

## 🔗 Related Concepts

- **Store results:** [[3.02_Assignment]] (\`+=\`, \`-=\`, etc.)
- **Compare results:** [[3.04_Comparison]] (\`==\`, \`>\`, \`<\`)
- **Data types used:** [[1.03_Interger]] · [[1.04_Float]] · [[1.02_String]] · [[1.07_list]]
- **Parent:** [[00_Index]]
`;export{e as default};
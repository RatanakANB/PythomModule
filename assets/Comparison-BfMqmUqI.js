var e=`# ⚖️ Comparison Operators

> 🏠 Parent: [[00_Index]]
> 📂 Section: Operators

---

## 📖 Beginner-Friendly Explanation

**Comparison operators** compare two values and return a [[bool]] — either \`True\` or \`False\`. They answer questions like: "Are these equal?", "Is this bigger?", "Is this smaller?"

### What is it?

Comparison operators test the relationship between two values. The result is always a boolean.

### Why does it exist?

Programs constantly need to make decisions: "Is the password correct?", "Is the student passing?", "Is the item in stock?" Comparisons power **every** if-statement.

### Why does it matter in real life?

- Checking if a password matches
- Verifying age requirements
- Sorting items by price
- Filtering search results

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A[Comparison Operators]

    A --> B[Return True or False]

    B --> C["Equal (==)"]
    B --> D["Not Equal (!=)"]
    B --> E["Greater Than (>)"]
    B --> F["Less Than (<)"]
    B --> G["Greater or Equal (>=)"]
    B --> H["Less or Equal (<=)"]

    A --> I[Used In]
    I --> J[If Statements]
    I --> K[While Loops]
    I --> L[Logical Operators]
\`\`\`

---

## ⚙️ Syntax Breakdown

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| \`==\` | Equal to | \`5 == 5\` | \`True\` |
| \`!=\` | Not equal to | \`5 != 3\` | \`True\` |
| \`>\` | Greater than | \`10 > 5\` | \`True\` |
| \`<\` | Less than | \`3 < 7\` | \`True\` |
| \`>=\` | Greater or equal | \`5 >= 5\` | \`True\` |
| \`<=\` | Less or equal | \`4 <= 3\` | \`False\` |

\`\`\`text
# ⚠️ Common mistake: = vs ==
x = 5      →  ASSIGNMENT (store 5 in x)
x == 5     →  COMPARISON (is x equal to 5? → True)

# Comparing different types:
5 == 5.0         →  True (int and float can be compared)
"5" == 5         →  False (string and int are different types!)
True == 1        →  True (bool True is secretly 1)

# Chaining comparisons:
1 < 5 < 10       →  True (Python checks both!)
1 < 5 > 3        →  True (1 < 5 AND 5 > 3)
\`\`\`

### Works with strings too:

\`\`\`text
"apple" < "banana"    →  True (alphabetical order: a comes before b)
"abc" == "ABC"        →  False (case-sensitive!)
"abc" == "abc"        →  True
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Building a grade checker.

\`\`\`python
# Grade checker
score = 85

# Comparison results
print(score >= 90)    # False — not an A
print(score >= 80)    # True — at least a B
print(score == 100)   # False — not perfect
print(score != 0)     # True — didn't score zero

# Using in if-statement
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score {score} = Grade {grade}")  # Score 85 = Grade B
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** **Who has more candy?** 🍬

\`\`\`python
my_candy = 12
friend_candy = 8

# Who has more?
print(my_candy > friend_candy)   # True — I have more!
print(my_candy == friend_candy)  # False — not the same
print(my_candy < friend_candy)   # False — I have more, not less

# Can I ride the rollercoaster? (must be >= 10 years old)
my_age = 11
print(my_age >= 10)              # True — I can ride! 🎢
\`\`\`

---

## 🔗 Related Concepts

- **Results are:** [[bool]] (True/False)
- **Combine comparisons:** [[Logical]] (\`and\`, \`or\`, \`not\`)
- **Check same object:** [[Identity]] (\`is\`, \`is not\`)
- **Check contains:** [[Membership]] (\`in\`, \`not in\`)
- **Math before comparing:** [[Arithmetic]]
- **Parent:** [[00_Index]]
`;export{e as default};
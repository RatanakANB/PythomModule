var e=`# 🔢 float — Floating Point Number

> 🏠 Parent: [[Variables]] · [[00_Index]]
> 📂 Section: Variables & Data Types
> 🔧 Methods: [[Float_Methods]]

---

## 📖 Beginner-Friendly Explanation

A **float** is a **decimal number** — any number with a decimal point. Even \`3.0\` is a float, not an [[int]].

### What is it?

A float (short for "floating-point number") stores numbers that have a fractional part. The "floating point" refers to how the decimal point can "float" to different positions.

### Why does it exist?

Not everything is a whole number. Prices, measurements, percentages, and scientific data all need decimal precision.

### Why does it matter in real life?

- Prices: \`$4.99\`
- Temperature: \`36.6°C\`
- GPS coordinates: \`11.5564, 104.9282\`
- Battery percentage: \`87.5%\`

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["🔢 float — Decimal Number"] --> B["Stores decimal values"]
    B --> C["Positive: 3.14, 99.9"]
    B --> D["Negative: -2.5, -0.001"]
    B --> E["Zero: 0.0"]
    A --> F["🔧 Has 8 Methods"]
    F --> G["[[Float Methods]]"]
    A --> H["Properties"]
    H --> I["Immutable — value cannot change"]
    H --> J["Limited precision — tiny rounding errors possible"]
    H --> K["Can convert to [[int]], [[str]], [[bool]]"]
    A --> L["⚠️ Precision Warning"]
    L --> M["0.1 + 0.2 = 0.30000000000000004"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
price = 4.99            →  Create a float with a decimal point
temp = -10.5            →  Negative floats work too
whole = 3.0             →  Even 3.0 is a float, not an int!
tiny = 1e-5             →  Scientific notation: 0.00001

type(price)             →  <class 'float'>
float("3.14")           →  Convert string to float: 3.14
float(7)                →  Convert int to float: 7.0
int(4.99)               →  Convert float to int: 4 (truncates, not rounds!)
\`\`\`

### ⚠️ Floating-point precision:

\`\`\`text
print(0.1 + 0.2)       →  0.30000000000000004 (not exactly 0.3!)
# This happens because computers store decimals in binary
# For most beginner programs, this tiny error doesn't matter
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You're calculating your GPA and tracking expenses.

\`\`\`python
# GPA calculation
math_grade = 3.7
science_grade = 4.0
english_grade = 3.5

gpa = (math_grade + science_grade + english_grade) / 3
print(gpa)               # 3.7333333333333334
print(round(gpa, 2))     # 3.73 (rounded to 2 decimals)

# Shopping budget
budget = 50.00
coffee = 4.75
lunch = 12.50
remaining = budget - coffee - lunch
print(remaining)          # 32.75
\`\`\`

**Step-by-step:**
1. Each grade is a \`float\` — GPAs use decimals
2. \`/\` division returns a float with many decimal places
3. \`round(gpa, 2)\` rounds to 2 decimal places for a clean display
4. Money math uses floats — \`50.00 - 4.75 - 12.50 = 32.75\`

### 🧒 10-year-old beginner

**Scenario:** You're measuring ingredients for a **pizza recipe** 🍕

\`\`\`python
# Pizza recipe measurements
flour_cups = 2.5        # Two and a half cups of flour
water_cups = 1.25       # One and a quarter cups of water
salt_tsp = 0.5          # Half a teaspoon of salt

total_liquid = water_cups + salt_tsp
print(total_liquid)      # 1.75

# Double the recipe for more pizza!
double_flour = flour_cups * 2
print(double_flour)      # 5.0
\`\`\`

**Step-by-step:**
1. \`flour_cups = 2.5\` → You need 2 and a half cups — that's a decimal!
2. \`water_cups = 1.25\` → One and a quarter — another decimal
3. \`1.25 + 0.5 = 1.75\` → Python adds decimals like you do
4. \`2.5 * 2 = 5.0\` → Notice it's \`5.0\` not \`5\` — it stays a float!

---

## 🔗 Related Concepts

- **Parent:** [[Variables]]
- **Methods:** [[Float_Methods]] (8 methods)
- **Related types:** [[int]] (whole number version), [[str]] (convert with \`str()\`), [[bool]] (\`0.0\` is False, anything else is True)
- **Operators:** [[Arithmetic]] (math with decimals), [[Comparison]] (compare values)
- **Key concept:** [[Mutability_vs_Immutability]] — floats are **immutable**
`;export{e as default};
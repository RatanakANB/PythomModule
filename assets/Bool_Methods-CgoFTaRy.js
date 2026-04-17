var e=`# ✅ Bool Methods — All 11 Methods

> 🏠 Parent: [[bool]] · [[What_Are_Methods]]
> 📂 Section: Methods
> 🔑 Key concept: \`bool\` **inherits** from [[int]], so it shares all [[Int_Methods]]

---

## 📖 Beginner-Friendly Explanation

Booleans (\`True\` and \`False\`) are secretly a **subclass of integers** in Python. \`True\` is \`1\` and \`False\` is \`0\`. Because of this, booleans **inherit all 11 methods from [[int]]**.

You can call any [[Int_Methods]] on a boolean — though in practice, you rarely need to.

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["✅ bool"] -->|inherits from| B["🔢 [[int]]"]
    B --> C["All 11 int methods available"]
    C --> D["🔄 Conversion"]
    D --> D1["as_integer_ratio"]
    D --> D2["to_bytes"]
    D --> D3["from_bytes"]
    C --> E["🔧 Bit Operations"]
    E --> E1["bit_count"]
    E --> E2["bit_length"]
    C --> F["✅ Check"]
    F --> F1["is_integer"]
    C --> G["🔢 Complex Number"]
    G --> G1["conjugate"]
    G --> G2["imag"]
    G --> G3["real"]
    G --> G4["numerator"]
    G --> G5["denominator"]
    A --> H["True = 1, False = 0"]
\`\`\`

---

# 🔄 Conversion Methods (3)

## \`as_integer_ratio()\`

\`\`\`python
True.as_integer_ratio()    # (1, 1) → True = 1/1
False.as_integer_ratio()   # (0, 1) → False = 0/1
\`\`\`

---

## \`to_bytes(length, byteorder)\`

\`\`\`python
True.to_bytes(1, 'big')    # b'\\x01'
False.to_bytes(1, 'big')   # b'\\x00'
\`\`\`

---

## \`from_bytes(bytes, byteorder)\` *(class method)*

\`\`\`python
int.from_bytes(b'\\x01', 'big')   # 1
int.from_bytes(b'\\x00', 'big')   # 0
\`\`\`

---

# 🔧 Bit Operations (2)

## \`bit_length()\`

\`\`\`python
True.bit_length()          # 1 (binary: 1)
False.bit_length()         # 0 (binary: 0)
\`\`\`

---

## \`bit_count()\`

\`\`\`python
True.bit_count()           # 1 (one '1' in binary)
False.bit_count()          # 0 (zero '1's in binary)
\`\`\`

---

# ✅ Check Method (1)

## \`is_integer()\`

\`\`\`python
True.is_integer()          # True (1 is an integer)
False.is_integer()         # True (0 is an integer)
\`\`\`

---

# 🔢 Complex Number Attributes (5)

## \`conjugate()\`

\`\`\`python
True.conjugate()           # 1
False.conjugate()          # 0
\`\`\`

## \`real\`

\`\`\`python
True.real                  # 1
False.real                 # 0
\`\`\`

## \`imag\`

\`\`\`python
True.imag                  # 0
False.imag                 # 0
\`\`\`

## \`numerator\`

\`\`\`python
True.numerator             # 1
False.numerator            # 0
\`\`\`

## \`denominator\`

\`\`\`python
True.denominator           # 1
False.denominator          # 1
\`\`\`

---

# ⚙️ Syntax Breakdown

\`\`\`text
True  → internally stored as integer 1
False → internally stored as integer 0

# This is why math works with booleans:
True + True               →  2
True * 10                 →  10
False + 5                 →  5

# All int methods work because bool IS an int:
type(True)                →  <class 'bool'>
isinstance(True, int)     →  True  ← bool is a subclass of int!
\`\`\`

---

# 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Counting quiz answers.

\`\`\`python
# Quiz results: True = correct, False = wrong
answers = [True, True, False, True, False, True]

# Count correct answers (True = 1, False = 0)
correct = sum(answers)    # 4 (True + True + False + True + False + True)
total = len(answers)      # 6
percentage = (correct / total) * 100
print(f"Score: {correct}/{total} = {percentage}%")  # Score: 4/6 = 66.67%

# Bool methods (inherited from int)
result = True
print(result.bit_length())        # 1
print(result.as_integer_ratio())  # (1, 1)
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Counting **gold stars** ⭐ — True = you got a star!

\`\`\`python
# Did you get a gold star today?
monday = True     # ⭐ Yes!
tuesday = False   # ❌ No
wednesday = True  # ⭐ Yes!

# How many stars this week?
stars = monday + tuesday + wednesday
print(stars)      # 2 stars! (True=1, False=0, so 1+0+1=2)

# What's True's secret number?
print(True.real)          # 1 — True is secretly the number 1!
print(False.real)         # 0 — False is secretly the number 0!
\`\`\`

---

## 🔗 Related Concepts

- **Data type:** [[bool]]
- **Inherits from:** [[int]] → [[Int_Methods]]
- **Used by:** [[Comparison]] operators (return bools), [[Logical]] operators (\`and\`, \`or\`, \`not\`)
- **Call syntax:** [[Method_Call_Syntax]]
- **Overview:** [[Methods_Insight]]
`;export{e as default};
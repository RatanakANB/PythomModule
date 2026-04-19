var e=`# 🔢 Float Methods — All 8 Methods

> 🏠 Parent: [[1.4_float]] · [[2.01_What_Are_Methods]]
> 📂 Section: Methods
> 🔑 Key concept: Floats are [[2.02_Mutability_vs_Immutability|immutable]] — all methods return **new** values

---

## 📖 Beginner-Friendly Explanation

Floats have **8 methods** — for converting between formats, checking properties, and working with the complex number system. They're simpler than [[2.05_String_Methods]] but important for understanding how Python handles decimal numbers.

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
mindmap
  root(("🔢 Float Methods — 8"))
    🔄 Conversion (4)
      as_integer_ratio
      hex
      fromhex
      from_number
    ✅ Check (1)
      is_integer
    🔢 Complex Number (3)
      conjugate
      imag
      real
\`\`\`

---

# 🔄 Conversion Methods (4)

## \`as_integer_ratio()\`

Returns the float as an **exact fraction** (tuple of numerator and denominator).

\`\`\`python
f = 0.5
f.as_integer_ratio()     # (1, 2) → 1/2 = 0.5

f = 3.75
f.as_integer_ratio()     # (15, 4) → 15/4 = 3.75

f = 0.1
f.as_integer_ratio()     # (3602879701896397, 36028797018963968)
# ⚠️ 0.1 can't be exactly represented in binary!
\`\`\`

\`\`\`text
f.as_integer_ratio()  →  Express decimal as exact fraction → (numerator, denominator)
\`\`\`

---

## \`hex()\`

Returns a **hexadecimal string** representation of the float.

\`\`\`python
f = 3.14
f.hex()                  # '0x1.91eb851eb851fp+1'

f = 1.0
f.hex()                  # '0x1.0000000000000p+0'
\`\`\`

\`\`\`text
f.hex()  →  Convert to hexadecimal floating-point string
# Used for exact, platform-independent representation
\`\`\`

---

## \`fromhex(s)\` *(class method)*

Convert a **hexadecimal string** back to a float.

\`\`\`python
float.fromhex('0x1.91eb851eb851fp+1')   # 3.14
float.fromhex('0x1.0p+0')               # 1.0
\`\`\`

\`\`\`text
float.fromhex(hex_string)  →  Convert hex string back to float
# Called on the float class itself
\`\`\`

---

## \`from_number(x)\` *(class method)*

Create a float from a number. *(Python 3.14+)*

\`\`\`python
float.from_number(5)           # 5.0
float.from_number(True)        # 1.0
\`\`\`

\`\`\`text
float.from_number(x)  →  Create a float from any number type
\`\`\`

---

# ✅ Check Method (1)

## \`is_integer()\`

Returns \`True\` if the float has **no decimal part** (is a whole number).

\`\`\`python
(3.0).is_integer()        # True — 3.0 is a whole number
(3.5).is_integer()        # False — has a fractional part
(0.0).is_integer()        # True
(-4.0).is_integer()       # True
\`\`\`

\`\`\`text
f.is_integer()  →  Is this decimal actually a whole number? → True/False
# Very useful after division: (10 / 2).is_integer() → True
\`\`\`

---

# 🔢 Complex Number Attributes (3)

## \`conjugate()\`

Returns the complex conjugate. For regular floats, returns the float itself.

\`\`\`python
f = 3.14
f.conjugate()            # 3.14
\`\`\`

---

## \`real\`

The real part. For regular floats, it's the number itself.

\`\`\`python
f = 3.14
f.real                   # 3.14
\`\`\`

> ⚠️ Property (no parentheses).

---

## \`imag\`

The imaginary part. For regular floats, always \`0.0\`.

\`\`\`python
f = 3.14
f.imag                   # 0.0
\`\`\`

> ⚠️ Property (no parentheses).

---

# 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Checking if division results are whole numbers.

\`\`\`python
# Splitting a bill equally
total_bill = 150.00
num_people = 4

per_person = total_bill / num_people
print(per_person)                  # 37.5

# Is it an even split?
print(per_person.is_integer())     # False — someone needs to pay extra!

# Try with 3 people
per_person_3 = total_bill / 3
print(per_person_3)                # 50.0
print(per_person_3.is_integer())   # True — perfect split!

# Get exact fraction
print(per_person.as_integer_ratio())  # (75, 2) → 75/2 = 37.5
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Can you share cookies **equally**? 🍪

\`\`\`python
# Sharing cookies with friends
cookies = 10.0
friends = 3

each_gets = cookies / friends
print(each_gets)                   # 3.3333...

# Can everyone get the same WHOLE number?
print(each_gets.is_integer())      # False — someone gets crumbs! 😢

# Try with 2 friends
each_gets_2 = cookies / 2
print(each_gets_2)                 # 5.0
print(each_gets_2.is_integer())    # True — fair share! 😊
\`\`\`

---

## 🔗 Related Concepts

- **Data type:** [[1.4_float]]
- **Similar methods:** [[2.06_Int_Methods]] · [[2.08_Bool_Methods]]
- **Call syntax:** [[2.03_Method_Call_Syntax]]
- **Related operators:** [[3.1_Arithmetic]] · [[3.4_Comparison]]
- **Overview:** [[2.04_Methods_Insight]]
`;export{e as default};
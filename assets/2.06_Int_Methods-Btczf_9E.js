var e=`# 🔢 Int Methods — All 11 Methods

> 🏠 Parent: [[1.03_Interger]] · [[2.01_What_Are_Methods]]
> 📂 Section: Methods
> 🔑 Key concept: Integers are [[2.02_Mutability_vs_Immutability|immutable]] — all methods return **new** values

---

## 📖 Beginner-Friendly Explanation

Integers have **11 methods** — mostly for converting between number formats, checking bit-level properties, and working with complex number attributes. Most of these are advanced, but understanding they exist helps you see that **every data type has tools**.

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
mindmap
  root(("🔢 Int Methods — 11"))
    🔄 Conversion (3)
      as_integer_ratio
      to_bytes
      from_bytes
    🔧 Bit Operations (2)
      bit_count
      bit_length
    ✅ Check (1)
      is_integer
    🔢 Complex Number (5)
      conjugate
      imag
      real
      numerator
      denominator
\`\`\`

---

# 🔄 Conversion Methods (3)

## \`as_integer_ratio()\`

Returns the integer as a **fraction** (tuple of numerator and denominator).

\`\`\`python
n = 5
n.as_integer_ratio()     # (5, 1) → 5/1 = 5
n = -3
n.as_integer_ratio()     # (-3, 1)
\`\`\`

\`\`\`text
n.as_integer_ratio()  →  Express number as a fraction → (numerator, denominator)
\`\`\`

---

## \`to_bytes(length, byteorder)\`

Convert integer to a **bytes** object.

\`\`\`python
n = 255
n.to_bytes(2, 'big')      # b'\\x00\\xff'
n.to_bytes(2, 'little')   # b'\\xff\\x00'
(1024).to_bytes(2, 'big') # b'\\x04\\x00'
\`\`\`

\`\`\`text
n.to_bytes(length, byteorder)  →  Convert number to bytes for storage
# 'big' = most significant byte first
# 'little' = least significant byte first
\`\`\`

---

## \`from_bytes(bytes, byteorder)\` *(class method)*

Convert **bytes** back to an integer.

\`\`\`python
int.from_bytes(b'\\x00\\xff', 'big')    # 255
int.from_bytes(b'\\xff\\x00', 'little') # 255
\`\`\`

\`\`\`text
int.from_bytes(bytes, byteorder)  →  Convert bytes back to a number
# Called on the int class itself, not on a variable
\`\`\`

---

# 🔧 Bit Operations (2)

## \`bit_length()\`

Returns how many **bits** are needed to represent the number (excluding sign).

\`\`\`python
n = 255
n.bit_length()           # 8 (255 = 11111111 in binary)
(0).bit_length()         # 0
(1).bit_length()         # 1
(10).bit_length()        # 4 (10 = 1010 in binary)
\`\`\`

\`\`\`text
n.bit_length()  →  How many binary digits does this number need?
\`\`\`

---

## \`bit_count()\`

Returns the number of **ones** in the binary representation. *(Python 3.10+)*

\`\`\`python
n = 13                   # 13 = 1101 in binary
n.bit_count()            # 3 (three 1s)
(255).bit_count()        # 8 (11111111 — eight 1s)
(0).bit_count()          # 0
\`\`\`

\`\`\`text
n.bit_count()  →  How many 1-bits in the binary form?
\`\`\`

---

# ✅ Check Method (1)

## \`is_integer()\`

For [[1.03_Interger]], this **always** returns \`True\` (more useful on [[1.04_Float]]).

\`\`\`python
n = 5
n.is_integer()           # True (always True for int)
\`\`\`

\`\`\`text
n.is_integer()  →  Is this a whole number? → always True for int
# More useful for float: (3.0).is_integer() → True, (3.5).is_integer() → False
\`\`\`

---

# 🔢 Complex Number Attributes (5)

> These exist because Python's number hierarchy includes complex numbers. For beginners, just know they exist!

## \`conjugate()\`

Returns the **complex conjugate**. For integers, it just returns the number itself.

\`\`\`python
n = 5
n.conjugate()            # 5
\`\`\`

---

## \`real\`

The **real part** of the number. For integers, it's the number itself.

\`\`\`python
n = 5
n.real                   # 5
\`\`\`

> ⚠️ Note: \`real\` is a **property** (no parentheses), not a method call.

---

## \`imag\`

The **imaginary part**. For integers, it's always \`0\`.

\`\`\`python
n = 5
n.imag                   # 0
\`\`\`

> ⚠️ Note: \`imag\` is a **property** (no parentheses).

---

## \`numerator\`

The **numerator** of the fraction form. For integers, it's the number itself.

\`\`\`python
n = 5
n.numerator              # 5
\`\`\`

> ⚠️ Note: \`numerator\` is a **property** (no parentheses).

---

## \`denominator\`

The **denominator** of the fraction form. For integers, it's always \`1\`.

\`\`\`python
n = 5
n.denominator            # 1
\`\`\`

> ⚠️ Note: \`denominator\` is a **property** (no parentheses).

---

# 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Understanding file sizes and binary.

\`\`\`python
# File size in bytes
file_size = 2048

# How many bits needed to represent this?
print(file_size.bit_length())     # 12 bits

# Convert to bytes for network transmission
data = file_size.to_bytes(4, 'big')
print(data)                       # b'\\x00\\x00\\x08\\x00'

# Convert back from bytes
recovered = int.from_bytes(data, 'big')
print(recovered)                  # 2048

# Express as fraction
print(file_size.as_integer_ratio())   # (2048, 1)
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Your number has a **secret code** (binary)!

\`\`\`python
# Your lucky number
lucky = 13

# What's the secret code? (binary)
print(bin(lucky))              # 0b1101

# How many digits in the code?
print(lucky.bit_length())     # 4 digits!

# How many 1s in the code?
print(lucky.bit_count())      # 3 ones!

# 1101 → one-one-zero-one → three 1s!
\`\`\`

---

## 🔗 Related Concepts

- **Data type:** [[1.03_Interger]]
- **Similar methods:** [[2.07_Float_Methods]] · [[2.08_Bool_Methods]] (inherits int methods)
- **Call syntax:** [[2.03_Method_Call_Syntax]]
- **Related operators:** [[3.01_Arithmetic]] · [[3.07_Bitwise]]
- **Overview:** [[2.04_Methods_Insight]]
`;export{e as default};
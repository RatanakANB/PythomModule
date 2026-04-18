var e=`# 💻 Bitwise Operators

> 🏠 Parent: [[00_Index]]
> 📂 Section: Operators

---

## 📖 Beginner-Friendly Explanation

**Bitwise operators** work on numbers at the **binary level** — they manipulate individual bits (0s and 1s). These are advanced operators, but understanding the basics opens the door to how computers really work.

### What is it?

Computers store everything as binary (0s and 1s). Bitwise operators let you work directly with these bits — flipping, shifting, and combining them.

### Why does it exist?

Bitwise operations are incredibly fast and are used in:
- Low-level programming
- Permissions systems
- Graphics and game development
- Networking (IP addresses, subnet masks)

### Why does it matter in real life?

- File permissions (read/write/execute)
- Color manipulation (RGB values)
- Encryption algorithms
- Hardware control

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A[Bitwise Operators]

    A --> B[AND &]
    B --> B1[Both bits must be 1]

    A --> C[OR]
    C --> C1[At least one bit is 1]

    A --> D[XOR ^]
    D --> D1[Bits must be different]

    A --> E[NOT ~]
    E --> E1[Flip all bits]

    A --> F[Left Shift <<]
    F --> F1[Move bits left, add zeros]

    A --> G[Right Shift >>]
    G --> G1[Move bits right, drop bits]
\`\`\`

---

## ⚙️ Syntax Breakdown

| Operator | Name        | Example  | Result | Binary Explanation |
| -------- | ----------- | -------- | ------ | ------------------ |
| \`&\`      | AND         | \`5 & 3\`  | \`1\`    | \`101 & 011 = 001\`  |
| \`\\|\`     | OR          | \`5 \\| 3\` | \`7\`    | \`101 \\| 011 = 111\` |
| \`^\`      | XOR         | \`5 ^ 3\`  | \`6\`    | \`101 ^ 011 = 110\`  |
| \`~\`      | NOT         | \`~5\`     | \`-6\`   | Flips all bits     |
| \`<<\`     | Left Shift  | \`5 << 1\` | \`10\`   | \`101 → 1010\`       |
| \`>>\`     | Right Shift | \`5 >> 1\` | \`2\`    | \`101 → 10\`         |

### Detailed binary walkthrough:

\`\`\`text
# AND (&) — only 1 if BOTH bits are 1
  5 = 101
  3 = 011
  --------
  & = 001 = 1

# OR (|) — 1 if EITHER bit is 1
  5 = 101
  3 = 011
  --------
  | = 111 = 7

# XOR (^) — 1 if bits are DIFFERENT
  5 = 101
  3 = 011
  --------
  ^ = 110 = 6

# NOT (~) — flips all bits (uses two's complement)
  ~5 = -(5+1) = -6

# Left Shift (<<) — add zeros on the right (multiply by 2^n)
  5 << 1  →  101 → 1010 = 10   (5 × 2 = 10)
  5 << 2  →  101 → 10100 = 20  (5 × 4 = 20)

# Right Shift (>>) — remove bits from the right (divide by 2^n)
  5 >> 1  →  101 → 10 = 2      (5 ÷ 2 = 2, rounded down)
  20 >> 2 →  10100 → 101 = 5   (20 ÷ 4 = 5)
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Understanding file permissions (like Linux).

\`\`\`python
# File permissions using bits
READ = 0b100      # 4 in decimal
WRITE = 0b010     # 2 in decimal
EXECUTE = 0b001   # 1 in decimal

# Give read and write permission
user_perms = READ | WRITE      # 0b110 = 6
print(bin(user_perms))          # 0b110

# Check if user has read permission
has_read = (user_perms & READ) != 0
print(f"Can read: {has_read}")   # True

# Check if user has execute permission
has_exec = (user_perms & EXECUTE) != 0
print(f"Can execute: {has_exec}")  # False

# Add execute permission
user_perms = user_perms | EXECUTE   # 0b111 = 7
print(bin(user_perms))              # 0b111 — full permissions!

# Remove write permission
user_perms = user_perms & ~WRITE    # 0b101 = 5
print(bin(user_perms))              # 0b101 — read + execute only
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** **Light switches** 💡 — on and off!

\`\`\`python
# Imagine 3 light switches: Kitchen, Bedroom, Bathroom
# Each switch is a BIT: 1 = ON, 0 = OFF

# All lights: Kitchen | Bedroom | Bathroom
lights = 0b000    # All OFF

# Turn ON kitchen (leftmost bit)
lights = lights | 0b100    # 0b100 — kitchen ON!
print(bin(lights))          # 0b100

# Turn ON bathroom too
lights = lights | 0b001    # 0b101 — kitchen and bathroom ON!
print(bin(lights))          # 0b101

# Are the bedroom lights on?
bedroom_on = (lights & 0b010) != 0
print(f"Bedroom on: {bedroom_on}")  # False!

# Quick multiply: 3 × 2 using left shift
print(3 << 1)    # 6 (shift left = multiply by 2!)
print(3 << 2)    # 12 (shift left twice = multiply by 4!)
\`\`\`

---

## 🔗 Related Concepts

- **Binary methods:** [[2.6_Int_Methods]] (\`bit_length()\`, \`bit_count()\`)
- **Related operators:** [[3.1_Arithmetic]] (math), [[3.3_Logical]] (similar concept at boolean level)
- **Compound assignment:** [[3.2_Assignment]] (\`&=\`, \`|=\`, \`^=\`, \`<<=\`, \`>>=\`)
- **Data types used:** [[1.3_int]] · [[1.5_bool]]
- **Parent:** [[00_Index]]
`;export{e as default};
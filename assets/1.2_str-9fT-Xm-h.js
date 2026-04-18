var e=`# 🔤 str — String

> 🏠 Parent: [[1.1_Variables]] · [[00_Index]]
> 📂 Section: Variables & Data Types
> 🔧 Methods: [[2.5_String_Methods]]

---

## 📖 Beginner-Friendly Explanation

A **string** (\`str\`) is **text**. Any characters wrapped in quotes — letters, numbers, symbols, spaces, emojis — become a string.

### What is it?

A string is a **sequence of characters**. Python treats it as a single piece of data, but internally it's a chain of individual characters, each with a position (index).

### Why does it exist?

Computers naturally understand numbers, not words. Strings let us store and work with **human-readable text** — names, messages, addresses, passwords.

### Why does it matter in real life?

- Every text message you send is a string
- Every username and password is a string
- Every website URL is a string
- Every search query you type is a string

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["📦 str — String"] --> B["Stores text data"]
    B --> C["Created with quotes"]
    C --> D["'single quotes'"]
    C --> E["double quotes"]
    C --> F["'''triple quotes'''"]
    A --> G["🔧 Has 47 Methods"]
    G --> H["String Methods"]
    A --> I["Properties"]
    I --> J["Immutable — cannot change in place"]
    I --> K["Ordered — characters have positions"]
    I --> L["Iterable — can loop through characters"]

\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
name = "Alice"          →  Create a string with double quotes
greeting = 'Hello!'     →  Create a string with single quotes
story = """Once upon    →  Create a multi-line string with triple quotes
a time..."""

name[0]                 →  Access first character: 'A' (indexing starts at 0)
name[-1]                →  Access last character: 'e'
len(name)               →  Get the length: 5
"Ali" in name           →  Check if "Ali" is inside: True
\`\`\`

### How Python stores it in memory:

\`\`\`text
name = "Alice"

Index:   0    1    2    3    4
Value: ['A', 'l', 'i', 'c', 'e']
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You're building a simple contact list app.

\`\`\`python
# Contact information — all stored as strings
first_name = "Sophia"
last_name = "Chen"
email = "sophia.chen@school.edu"
phone = "012-345-6789"       # Even numbers can be strings!

# Combining strings (concatenation)
full_name = first_name + " " + last_name
print(full_name)             # Output: Sophia Chen

# String methods in action
print(email.upper())         # SOPHIA.CHEN@SCHOOL.EDU
print(phone.replace("-", ""))  # 0123456789
print(first_name.lower())   # sophia
\`\`\`

**Step-by-step:**
1. \`first_name = "Sophia"\` → Stores the text \`Sophia\` as a [[1.1_Variables|variable]]
2. \`full_name = first_name + " " + last_name\` → The \`+\` [[3.1_Arithmetic|operator]] joins strings together
3. \`.upper()\` → A [[2.5_String_Methods]] that returns ALL CAPS version
4. \`.replace("-", "")\` → Replaces all hyphens with nothing (removes them)
5. The original strings are **unchanged** — strings are **immutable** (see [[2.2_Mutability_vs_Immutability]])

### 🧒 10-year-old beginner

**Scenario:** You're making **friendship bracelets** with letter beads! 📿

Each bracelet is a string — a chain of letter beads in order.

\`\`\`python
# Making a friendship bracelet
bracelet = "BEST FRIENDS"
print(bracelet)          # BEST FRIENDS

# Count the beads
print(len(bracelet))     # 12 (spaces count too!)

# Look at one bead
print(bracelet[0])       # B (first bead)

# Make a lowercase bracelet
small_bracelet = bracelet.lower()
print(small_bracelet)    # best friends
\`\`\`

**Step-by-step:**
1. \`bracelet = "BEST FRIENDS"\` → You thread the beads B-E-S-T- -F-R-I-E-N-D-S
2. \`len(bracelet)\` → Count all the beads: 12 total
3. \`bracelet[0]\` → Look at the **first** bead: \`B\`
4. \`.lower()\` → Make a copy with all **tiny** letters — but your original bracelet stays the same!

---

## 🔗 Related Concepts

- **Parent:** [[1.1_Variables]]
- **Methods:** [[2.5_String_Methods]] (47 methods for working with text)
- **Related types:** [[1.3_int]] (convert with \`int()\`), [[1.4_float]] (convert with \`float()\`), [[1.7_list]] (convert with \`list()\`)
- **Operators:** [[3.1_Arithmetic]] (\`+\` joins strings), [[3.4_Comparison]] (\`==\` compares strings), [[3.5_Membership]] (\`in\` checks substring)
- **Key concept:** [[2.2_Mutability_vs_Immutability]] — strings are **immutable**
`;export{e as default};
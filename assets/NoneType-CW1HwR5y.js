var e=`# ❌ NoneType

> 🏠 Parent: [[Variables]] · [[00_Index]]
> 📂 Section: Variables & Data Types

---

## 📖 Beginner-Friendly Explanation

\`None\` is Python's way of saying **"nothing"** or **"no value"**. It's not zero, it's not empty text — it's truly **nothing at all**.

### What is it?

\`NoneType\` is a special data type that has only one possible value: \`None\`. It represents the **absence of data**.

### Why does it exist?

Sometimes you need to say "this variable exists but doesn't have a value yet" — like an empty parking spot. The spot exists, but no car is in it.

### Why does it matter in real life?

- A form field that hasn't been filled in yet
- A search that found no results
- A function that performs an action but doesn't return anything
- A user profile with no profile picture set

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["❌ NoneType"] --> B["Has only ONE value: None"]
    B --> C["Not zero → 0 is an [[int]]"]
    B --> D["Not empty string → '' is a [[str]]"]
    B --> E["Not False → False is a [[bool]]"]
    A --> F["Common uses"]
    F --> G["Default value for empty variables"]
    F --> H["Return value of functions with no return"]
    F --> I["Placeholder for missing data"]
    A --> J["Checking for None"]
    J --> K["Use 'is None' not '== None'"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
result = None               →  Create a variable with no value
print(result)               →  None
print(type(result))         →  <class 'NoneType'>

# Checking for None — use 'is', not '=='
result is None              →  True ✅ (correct way)
result == None              →  True (works but not recommended)

# None is falsy
bool(None)                  →  False

# Functions that don't return anything give None
x = print("hello")         →  print() displays text but returns None
print(x)                    →  None
\`\`\`

### None vs other "empty" values:

\`\`\`text
None        →  No value at all (NoneType)
0           →  A number with value zero (int)
""          →  An empty string (str)
[]          →  An empty list (list)
False       →  A boolean with value False (bool)
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You're building a user profile system.

\`\`\`python
# New user signs up — some fields aren't filled yet
username = "sophia_123"
email = "sophia@email.com"
phone = None              # Not provided yet
bio = None                # Not written yet
profile_pic = None        # Not uploaded yet

# Check what's missing
if phone is None:
    print("Phone number not provided")

if bio is None:
    print("Bio not written yet")

# Later, user adds their phone
phone = "012-345-6789"
print(phone is None)      # False — phone is no longer None!
\`\`\`

**Step-by-step:**
1. \`phone = None\` → The variable exists but has no value — like an empty form field
2. \`phone is None\` → Returns \`True\` because phone has no data yet
3. \`phone = "012-345-6789"\` → Now phone holds a [[str]] value
4. \`phone is None\` → Now returns \`False\` — it has a value!

### 🧒 10-year-old beginner

**Scenario:** You have a **treasure chest** 🧳 that's empty!

\`\`\`python
# Your treasure chest
treasure = None          # The chest exists, but nothing is inside!
print(treasure)          # None

# Did you find treasure?
if treasure is None:
    print("The chest is empty! Keep looking!")

# You found gold!
treasure = "gold coins"
print(treasure)          # gold coins

if treasure is None:
    print("Empty!")
else:
    print("I found something!")  # This prints!
\`\`\`

**Step-by-step:**
1. \`treasure = None\` → Your chest is there, but it's **empty** — nothing inside!
2. \`treasure is None\` → You peek inside: "Is it empty?" → YES (\`True\`)
3. \`treasure = "gold coins"\` → You put gold coins in the chest!
4. Now \`treasure is None\` → "Is it empty?" → NO (\`False\`) — there's gold!

---

## 🔗 Related Concepts

- **Parent:** [[Variables]]
- **Related types:** [[bool]] (\`bool(None)\` → \`False\`), [[str]] (\`str(None)\` → \`"None"\`)
- **Operators:** [[Identity]] (\`is None\` is the correct way to check), [[Logical]] (None is falsy in logic)
- **Key concept:** None has **no methods** — it's the simplest type
- **Compare with:** [[int]] (0), [[str]] (""), [[list]] ([]) — these are "empty" but NOT None
`;export{e as default};
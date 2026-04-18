var e=`# 🔍 Identity Operators

> 🏠 Parent: [[00_Index]]
> 📂 Section: Operators

---

## 📖 Beginner-Friendly Explanation

**Identity operators** check if two variables point to the **exact same object** in memory — not just the same value, but literally the SAME thing.

### What is it?

Python has 2 identity operators: \`is\` and \`is not\`. They check **identity** (same object), not **equality** (same value).

### Why does it exist?

Sometimes two variables can have the same value but be **different objects** in memory. \`==\` checks value; \`is\` checks identity. The most common use is checking for [[1.6_NoneType|None]]: \`if x is None\`.

### Why does it matter in real life?

- The most common use: checking if something is \`None\`
- Understanding why two lists with the same content might be different objects
- Debugging shared references

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["🔍 Identity Operators"] --> B["is"]
    A --> C["is not"]
    B --> D["Same object in memory?"]
    C --> E["Different objects in memory?"]
    A --> F["== vs is"]
    F --> G["== checks VALUE"]
    F --> H["is checks IDENTITY"]
    A --> I["Most common use"]
    I --> J["x is None"]
    I --> K["x is not None"]
\`\`\`

---

## ⚙️ Syntax Breakdown

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| \`is\` | Same object? | \`x is y\` | \`True\` if same object |
| \`is not\` | Different objects? | \`x is not y\` | \`True\` if different objects |

\`\`\`text
# == vs is — THE CRITICAL DIFFERENCE:
a = [1, 2, 3]
b = [1, 2, 3]
c = a

a == b        →  True  (same VALUE — both contain [1, 2, 3])
a is b        →  False (different OBJECTS — stored in different memory)
a is c        →  True  (SAME object — c points to the same list as a)

# With None — always use 'is':
x = None
x is None     →  True  ✅ (correct way)
x == None     →  True  (works, but not recommended)

# With small integers — Python caches them:
x = 5
y = 5
x is y        →  True  (Python reuses small integers -5 to 256)

x = 1000
y = 1000
x is y        →  May be False! (large numbers may be different objects)
\`\`\`

### Memory visualization:

\`\`\`text
a = [1, 2, 3]     →  Memory slot #100: [1, 2, 3]
b = [1, 2, 3]     →  Memory slot #200: [1, 2, 3]
c = a              →  Points to slot #100 (same as a!)

a == b  →  True  (values are equal)
a is b  →  False (slot #100 ≠ slot #200)
a is c  →  True  (both point to slot #100)
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Checking if a user profile has been set up.

\`\`\`python
# User profile
username = "sophia_123"
bio = None              # Not set up yet
profile_pic = None      # Not uploaded yet

# Check with 'is' (recommended for None)
if bio is None:
    print("Please add a bio!")

if profile_pic is not None:
    print("Profile pic loaded!")
else:
    print("No profile pic yet")

# Demonstrating is vs ==
list_a = [1, 2, 3]
list_b = [1, 2, 3]
list_c = list_a

print(list_a == list_b)     # True — same content
print(list_a is list_b)     # False — different objects!
print(list_a is list_c)     # True — same object!

# Prove it — change c, and a changes too!
list_c.append(4)
print(list_a)               # [1, 2, 3, 4] — both changed!
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Twins vs the **same person** 👯

\`\`\`python
# Twins look the same but are different people!
twin_a = [1, 2, 3]     # Twin A
twin_b = [1, 2, 3]     # Twin B (looks the same!)

# Do they LOOK the same?
print(twin_a == twin_b)   # True — they look identical!

# Are they the SAME person?
print(twin_a is twin_b)   # False — they're different people!

# Now, a nickname for Twin A:
nickname = twin_a        # "nickname" is the SAME person as twin_a

print(twin_a is nickname)  # True — same person, different name!

# Checking for "nothing":
treasure = None
print(treasure is None)    # True — the chest is empty!
\`\`\`

---

## 🔗 Related Concepts

- **Value comparison:** [[3.4_Comparison]] (\`==\` checks value, \`is\` checks identity)
- **Used with:** [[1.6_NoneType]] (\`x is None\` is the standard pattern)
- **Logical combinations:** [[3.3_Logical]] (\`and\`, \`or\`, \`not\`)
- **Results are:** [[1.5_bool]]
- **Parent:** [[00_Index]]
`;export{e as default};
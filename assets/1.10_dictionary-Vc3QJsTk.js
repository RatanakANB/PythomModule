var e=`# 📖 dict — Dictionary

> 🏠 Parent: [[1.01_Variables]] · [[00_Index]]
> 📂 Section: Variables & Data Types
> 🔧 Methods: [[2.12_Dict_Methods]]

---

## 📖 Beginner-Friendly Explanation

A **dictionary** (\`dict\`) stores data as **key-value pairs** — like a real dictionary where each word (key) has a definition (value).

### What is it?

A dictionary is a **mutable, unordered collection** of key-value pairs wrapped in curly braces \`{}\`. Each key is unique and maps to a value.

### Why does it exist?

Sometimes a [[1.07_list]] isn't enough — you don't just want items in order, you want to **label** each item. Dictionaries let you store data with meaningful names instead of just positions.

### Why does it matter in real life?

- Contact info: name → phone number
- Product catalog: item name → price
- Student records: student ID → grades
- App settings: setting name → value

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["📖 dict — Dictionary"] --> B["Stores key-value pairs"]
    B --> C["key → value"]
    B --> D["key must be unique"]
    B --> E["value can be anything"]
    A --> F["Properties"]
    F --> G["Mutable — CAN add/remove/change"]
    F --> H["Ordered — insertion order preserved in Python 3.7+"]
    F --> I["No duplicate keys"]
    F --> J["Uses curly braces: { key: value }"]
    A --> K["🔧 Has 11 Methods"]
    K --> L["[[Dict Methods]]"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
student = {"name": "Alice", "age": 15, "grade": "A"}

# Access values by KEY (not by index!)
student["name"]          →  "Alice"
student["age"]           →  15
student.get("grade")     →  "A" (safer way to access)

# Add a new key-value pair
student["school"] = "Riverside High"

# Change a value
student["age"] = 16

# Delete a key-value pair
del student["grade"]

# Check if a key exists
"name" in student        →  True
len(student)             →  3 (number of key-value pairs)
\`\`\`

### Structure visualization:

\`\`\`text
student = {"name": "Alice", "age": 15, "grade": "A"}

Key:    "name"  →  Value: "Alice"
Key:    "age"   →  Value: 15
Key:    "grade" →  Value: "A"
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You're building a simple social media profile.

\`\`\`python
# Social media profile
profile = {
    "username": "sophia_123",
    "display_name": "Sophia Chen",
    "followers": 842,
    "following": 156,
    "bio": "🎨 Art student | 📚 Book lover",
    "is_verified": False
}

# Access profile info
print(profile["display_name"])   # Sophia Chen
print(profile["followers"])      # 842

# Update follower count
profile["followers"] = 843
print(profile["followers"])      # 843

# Add a new field
profile["website"] = "sophia.art"

# Get all keys and values
print(profile.keys())     # dict_keys(['username', 'display_name', ...])
print(profile.values())   # dict_values(['sophia_123', 'Sophia Chen', ...])
\`\`\`

**Step-by-step:**
1. \`profile = { ... }\` → Create a dict with labeled data (key: value)
2. \`profile["display_name"]\` → Access value using the key name
3. \`profile["followers"] = 843\` → Change a value — dicts are **mutable** (see [[2.02_Mutability_vs_Immutability]])
4. \`.keys()\` and \`.values()\` → [[2.12_Dict_Methods]] to get all keys or all values

### 🧒 10-year-old beginner

**Scenario:** You're making an **ID card** for your pet! 🐕

\`\`\`python
# Pet ID card
my_pet = {
    "name": "Buddy",
    "animal": "dog",
    "age": 3,
    "color": "golden",
    "favorite_toy": "ball"
}

# What's your pet's name?
print(my_pet["name"])         # Buddy

# What's their favorite toy?
print(my_pet["favorite_toy"]) # ball

# Buddy got older!
my_pet["age"] = 4
print(my_pet["age"])          # 4
\`\`\`

**Step-by-step:**
1. \`my_pet = { ... }\` → Like filling out an ID card with **labels** and **answers**
2. \`my_pet["name"]\` → Look at the "name" label → Answer: \`"Buddy"\`
3. \`my_pet["age"] = 4\` → Cross out \`3\` and write \`4\` — Buddy had a birthday!

A dictionary is like an **ID card** — each field has a **label** (key) and an **answer** (value)!

---

## 🔗 Related Concepts

- **Parent:** [[1.01_Variables]]
- **Methods:** [[2.12_Dict_Methods]] (11 methods — get, keys, values, items, etc.)
- **Similar types:** [[1.07_list]] (ordered by index), [[1.08_set]] (also uses \`{}\` but no values)
- **Related types:** [[1.02_String]] (keys are often strings), [[1.03_Interger]] (values can be any type)
- **Operators:** [[3.05_Membership]] (\`in\` checks if a KEY exists), [[3.04_Comparison]] (compare dicts)
- **Key concept:** [[2.02_Mutability_vs_Immutability]] — dicts are **mutable**
`;export{e as default};
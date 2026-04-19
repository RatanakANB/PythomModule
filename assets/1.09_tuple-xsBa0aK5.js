var e=`# 📌 tuple — Tuple

> 🏠 Parent: [[1.01_Variables]] · [[00_Index]]
> 📂 Section: Variables & Data Types
> 🔧 Methods: [[2.11_Tuple_Methods]]

---

## 📖 Beginner-Friendly Explanation

A **tuple** is like a [[1.07_list]] that **cannot be changed** after creation. It's ordered, allows duplicates, but is **locked** — you can't add, remove, or modify items.

### What is it?

A tuple is an **immutable, ordered sequence** wrapped in parentheses \`()\`. Once created, its contents are permanent.

### Why does it exist?

Sometimes you need data that should **never change** — coordinates, RGB colors, days of the week. Tuples protect your data from accidental modification.

### Why does it matter in real life?

- GPS coordinates: \`(11.5564, 104.9282)\` — these shouldn't change
- RGB color: \`(255, 128, 0)\` — a specific color value
- Database records that must stay intact
- Return values from functions with multiple outputs

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["📌 tuple — Tuple"] --> B["Stores ordered items"]
    B --> C["Items have index positions"]
    A --> D["Properties"]
    D --> E["Immutable — CANNOT change after creation"]
    D --> F["Ordered — position matters"]
    D --> G["Allows duplicates"]
    D --> H["Uses parentheses: ( )"]
    A --> I["🔧 Has only 2 Methods"]
    I --> J["[[Tuple Methods]]"]
    A --> K["vs [[list]]"]
    K --> L["List: mutable, Tuple: immutable"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
coords = (11.5, 104.9)                →  Create a tuple with 2 items
colors = ("red", "green", "blue")     →  Create a tuple with 3 items
single = (42,)                         →  Single-item tuple NEEDS a comma!
no_parens = 1, 2, 3                   →  Parentheses are optional

# Accessing items (same as list)
colors[0]                →  "red" (first item)
colors[-1]               →  "blue" (last item)
colors[0:2]              →  ("red", "green") (slicing)

# CANNOT change items!
colors[0] = "yellow"     →  ❌ TypeError! Tuples are immutable

len(colors)              →  3
"red" in colors          →  True
\`\`\`

### List vs Tuple comparison:

\`\`\`text
List:   [1, 2, 3]   → Can change  → Use when data may change
Tuple:  (1, 2, 3)   → Cannot change → Use when data should stay fixed
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You're storing GPS coordinates for your favorite places.

\`\`\`python
# GPS coordinates (latitude, longitude) — should never change!
home = (11.5564, 104.9282)
school = (11.5721, 104.9198)
cafe = (11.5680, 104.9310)

# Access latitude and longitude
print(home[0])           # 11.5564 (latitude)
print(home[1])           # 104.9282 (longitude)

# Try to change it
# home[0] = 12.0         # ❌ TypeError! Can't change a tuple

# Store multiple places in a list of tuples
places = [home, school, cafe]
print(places[1])          # (11.5721, 104.9198) — school coordinates

# Unpacking a tuple
lat, lon = home
print(f"Latitude: {lat}, Longitude: {lon}")
\`\`\`

**Step-by-step:**
1. \`home = (11.5564, 104.9282)\` → GPS coordinates stored as a tuple — they shouldn't change!
2. \`home[0]\` → Access latitude by index (still works like a [[1.07_list]])
3. \`home[0] = 12.0\` → ❌ ERROR — tuples are **immutable** (see [[2.02_Mutability_vs_Immutability]])
4. \`lat, lon = home\` → **Unpacking** — assign each item to a separate variable

### 🧒 10-year-old beginner

**Scenario:** You're writing down your **birthday** 🎂 — it never changes!

\`\`\`python
# Your birthday — it can NEVER change
my_birthday = ("April", 15, 2015)
print(my_birthday)       # ('April', 15, 2015)

# What month?
print(my_birthday[0])    # April

# What year?
print(my_birthday[2])    # 2015

# Can you change your birthday?
# my_birthday[0] = "May"  # ❌ NO! You can't change when you were born!
\`\`\`

**Step-by-step:**
1. \`my_birthday = ("April", 15, 2015)\` → Your birthday is locked in! Month, day, year
2. \`my_birthday[0]\` → Look at the first part: \`"April"\`
3. You **can't change** your birthday — and Python agrees! Tuples can't be changed either

---

## 🔗 Related Concepts

- **Parent:** [[1.01_Variables]]
- **Methods:** [[2.11_Tuple_Methods]] (only 2 methods: \`count\` and \`index\`)
- **Similar types:** [[1.07_list]] (same but mutable), [[1.02_String]] (also immutable and indexable)
- **Related types:** [[1.08_set]] (unordered version), [[1.10_dictionary]] (key-value pairs)
- **Operators:** [[3.01_Arithmetic]] (\`+\` joins tuples), [[3.05_Membership]] (\`in\` checks for items), [[3.04_Comparison]] (compare tuples)
- **Key concept:** [[2.02_Mutability_vs_Immutability]] — tuples are **immutable**
`;export{e as default};
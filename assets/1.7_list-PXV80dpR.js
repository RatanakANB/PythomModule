var e=`# 📋 list — List

> 🏠 Parent: [[1.1_Variables]] · [[00_Index]]
> 📂 Section: Variables & Data Types
> 🔧 Methods: [[2.09_List_Methods]]

---

## 📖 Beginner-Friendly Explanation

A **list** is an **ordered collection** of items. You can put anything inside — numbers, text, even other lists! Items are stored in order and can be changed anytime.

### What is it?

A list is a **mutable, ordered sequence** wrapped in square brackets \`[]\`. Each item has a numbered position (index) starting from 0.

### Why does it exist?

Real life is full of lists! A shopping list, a playlist, a class roster — whenever you have **multiple items in order**, a list is the perfect tool.

### Why does it matter in real life?

- Todo list of tasks
- Playlist of songs
- List of students in a class
- History of messages in a chat

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["📋 list — List"] --> B["Stores multiple items in order"]
    B --> C["Can hold any data type"]
    C --> D["Numbers, strings, bools, even other lists"]
    A --> E["Properties"]
    E --> F["Mutable — CAN change items"]
    E --> G["Ordered — items have positions"]
    E --> H["Allows duplicates"]
    E --> I["Uses square brackets: [ ]"]
    A --> J["🔧 Has 11 Methods"]
    J --> K["[[List Methods]]"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
fruits = ["apple", "banana", "cherry"]    →  Create a list with 3 strings
numbers = [1, 2, 3, 4, 5]                →  Create a list with 5 integers
mixed = [1, "hello", True, 3.14]          →  Lists can mix types!
empty = []                                →  Create an empty list

# Accessing items (indexing starts at 0)
fruits[0]                →  "apple" (first item)
fruits[-1]               →  "cherry" (last item)
fruits[1:3]              →  ["banana", "cherry"] (slicing)

# Changing items (lists are mutable!)
fruits[0] = "mango"      →  Replace "apple" with "mango"
len(fruits)               →  3 (count items)
"banana" in fruits        →  True (membership check)
\`\`\`

### Memory visualization:

\`\`\`text
fruits = ["apple", "banana", "cherry"]

Index:    0         1          2
Value: ["apple", "banana", "cherry"]
        ↑ You can change any of these!
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You're managing your study schedule.

\`\`\`python
# Study schedule for the week
schedule = ["Math", "Science", "English", "History", "Art"]

# Check today's subject (Wednesday = index 2)
today = schedule[2]
print(today)              # English

# Add a new subject
schedule.append("Music")
print(schedule)           # ["Math", "Science", "English", "History", "Art", "Music"]

# Remove a subject you dropped
schedule.remove("Art")
print(schedule)           # ["Math", "Science", "English", "History", "Music"]

# Sort alphabetically
schedule.sort()
print(schedule)           # ["English", "History", "Math", "Music", "Science"]
\`\`\`

**Step-by-step:**
1. \`schedule = [...]\` → Create a list of 5 subjects
2. \`schedule[2]\` → Access index 2 (third item): \`"English"\`
3. \`.append("Music")\` → [[2.09_List_Methods|List method]] that adds to the end
4. \`.remove("Art")\` → Finds and removes \`"Art"\`
5. \`.sort()\` → Sorts the list in place — changes the original! (see [[2.02_Mutability_vs_Immutability]])

### 🧒 10-year-old beginner

**Scenario:** You have a **line of toy animals** on your shelf! 🧸

\`\`\`python
# Your toy shelf
toys = ["bear", "bunny", "dinosaur"]
print(toys)               # ['bear', 'bunny', 'dinosaur']

# Who's first in line?
print(toys[0])            # bear

# Add a new toy at the end
toys.append("unicorn")
print(toys)               # ['bear', 'bunny', 'dinosaur', 'unicorn']

# How many toys?
print(len(toys))          # 4
\`\`\`

**Step-by-step:**
1. \`toys = ["bear", "bunny", "dinosaur"]\` → Three toys standing in a line on your shelf
2. \`toys[0]\` → Point to the **first** toy: it's the bear!
3. \`.append("unicorn")\` → Place a new unicorn at the **end** of the line
4. \`len(toys)\` → Count all your toys: 4!

The toys stay **in the order you put them** — that's what "ordered" means!

---

## 🔗 Related Concepts

- **Parent:** [[1.1_Variables]]
- **Methods:** [[2.09_List_Methods]] (11 methods — append, sort, remove, etc.)
- **Similar types:** [[1.10_dictionary]] (like a list but can't change), [[1.8_set]] (like a list but no duplicates)
- **Related types:** [[1.2_str]] (also ordered and indexable), [[1.9_tuple]] (stores key-value pairs instead)
- **indexing & Slicing:** [[4.1_Indexing]] (grab one item), [[4.2_Slicing]] (grab a section)
- **Operators:** [[3.1_Arithmetic]] (\`+\` joins lists), [[3.5_Membership]] (\`in\` checks if item exists), [[3.4_Comparison]] (compare lists)
- **Key concept:** [[2.02_Mutability_vs_Immutability]] — lists are **mutable** (can change)
`;export{e as default};
var e=`# 🔄 Mutability vs Immutability

> 🏠 Parent: [[What_Are_Methods]] · [[00_Index]]
> 📂 Section: Methods

---

## 📖 Beginner-Friendly Explanation

**Mutability** means "can be changed." **Immutability** means "cannot be changed."

This is one of the most important concepts in Python. It determines whether a method **changes the original data** or **creates a new copy**.

### What is it?

- **Mutable** types (like [[list]], [[set]], [[dict]]) — you CAN change their contents after creation
- **Immutable** types (like [[str]], [[int]], [[float]], [[bool]], [[tuple]]) — you CANNOT change them; methods return a **new** value instead

### Why does it exist?

Python separates mutable and immutable types for safety and performance. Immutable data is safer because it can't be accidentally changed by different parts of your program.

### Why does it matter in real life?

Imagine writing in a **notebook with pen** (mutable) vs writing on a **stone tablet** (immutable):
- Notebook: you can erase and rewrite
- Stone tablet: to make changes, you carve a whole new tablet

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["🔄 Mutability"] --> B{"Can the data change?"}
    B -->|YES| C["✅ Mutable Types"]
    B -->|NO| D["🔒 Immutable Types"]
    C --> E["[[list]] — add, remove, sort in place"]
    C --> F["[[set]] — add, remove, update in place"]
    C --> G["[[dict]] — add, change, delete in place"]
    D --> H["[[str]] — methods return NEW strings"]
    D --> I["[[int]] — value cannot change"]
    D --> J["[[float]] — value cannot change"]
    D --> K["[[bool]] — value cannot change"]
    D --> L["[[tuple]] — locked after creation"]
    C --> M["Methods MODIFY the original"]
    D --> N["Methods RETURN a new value"]
\`\`\`

---

## ⚙️ Syntax Breakdown

### Immutable example (string):

\`\`\`text
text = "hello"
result = text.upper()     →  result = "HELLO"
print(text)               →  "hello" (unchanged!)
print(result)             →  "HELLO" (new value)

# text.upper() does NOT change text
# It RETURNS a new string → you must store it!
\`\`\`

### Mutable example (list):

\`\`\`text
nums = [3, 1, 2]
nums.sort()               →  nums is now [1, 2, 3]
print(nums)               →  [1, 2, 3] (changed!)

# nums.sort() CHANGES nums directly
# It returns None → don't try to store it!
result = nums.sort()      →  result = None (not what you want!)
\`\`\`

### The critical difference:

\`\`\`text
# Immutable (str) — MUST store the result
text = "hello"
text.upper()              →  Result is lost! text is still "hello"
text = text.upper()       →  ✅ Now text is "HELLO"

# Mutable (list) — DON'T store the result
nums = [3, 1, 2]
nums.sort()               →  ✅ nums is now [1, 2, 3]
nums = nums.sort()        →  ❌ nums is now None!
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Editing a document vs editing a whiteboard.

\`\`\`python
# === IMMUTABLE (str) — like a printed document ===
# You can't edit the printout, you make a new one
document = "hello world"
edited = document.replace("world", "Python")
print(document)     # "hello world"  — original unchanged!
print(edited)       # "hello Python" — new copy!

# === MUTABLE (list) — like a whiteboard ===
# You can erase and rewrite directly
whiteboard = ["Math", "Science", "Art"]
whiteboard.append("Music")           # Write directly on the board
whiteboard.remove("Art")             # Erase "Art" from the board
print(whiteboard)   # ["Math", "Science", "Music"] — board IS changed!
\`\`\`

**Step-by-step:**
1. \`document.replace(...)\` → Creates a **new** string — the original stays the same
2. \`whiteboard.append(...)\` → Modifies the **actual** list — no new copy needed
3. This is why you write \`edited = document.replace(...)\` but NOT \`whiteboard = whiteboard.append(...)\`

### 🧒 10-year-old beginner

**Scenario:** **Crayon drawing** vs **LEGO tower**!

\`\`\`python
# === IMMUTABLE — Crayon drawing (can't change) ===
# You drew "CAT" — to make "DOG" you need a NEW paper
drawing = "cat"
new_drawing = drawing.upper()
print(drawing)         # cat  — old paper is the same!
print(new_drawing)     # CAT  — new paper with bigger letters!

# === MUTABLE — LEGO tower (can change) ===
# You built a tower — you can add and remove blocks!
tower = ["red", "blue", "green"]
tower.append("yellow")     # Snap a yellow block on top!
print(tower)               # ['red', 'blue', 'green', 'yellow']
tower.pop()                # Pop the top block off!
print(tower)               # ['red', 'blue', 'green']
\`\`\`

**Step-by-step:**
1. A **crayon drawing** can't be changed — you need a new piece of paper (new string)
2. A **LEGO tower** can be changed — snap blocks on, pull blocks off
3. [[str|Strings]] are like drawings. [[list|Lists]] are like LEGO!

---

## 📊 Quick Reference Table

| Type | Mutable? | Methods behavior | Example |
|------|----------|------------------|---------|
| [[str]] | ❌ No | Return new value | \`text.upper()\` → new string |
| [[int]] | ❌ No | Return new value | \`n.bit_length()\` → new int |
| [[float]] | ❌ No | Return new value | \`f.is_integer()\` → bool |
| [[bool]] | ❌ No | Return new value | Inherited from int |
| [[tuple]] | ❌ No | Return new value | \`t.count(x)\` → new int |
| [[list]] | ✅ Yes | Modify in place | \`lst.sort()\` → changes lst |
| [[set]] | ✅ Yes | Modify in place | \`s.add(x)\` → changes s |
| [[dict]] | ✅ Yes | Modify in place | \`d.update({})\` → changes d |

---

## 🔗 Related Concepts

- **What methods are:** [[What_Are_Methods]]
- **How to call them:** [[Method_Call_Syntax]]
- **See it in action:** [[String_Methods]] (immutable) · [[List_Methods]] (mutable) · [[Set_Methods]] (mutable) · [[Dict_Methods]] (mutable)
- **Data types:** [[str]] · [[int]] · [[float]] · [[bool]] · [[tuple]] · [[list]] · [[set]] · [[dict]]
`;export{e as default};
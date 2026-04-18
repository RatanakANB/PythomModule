var e=`# 🔧 What Are Methods?

> 🏠 Parent: [[00_Index]]
> 📂 Section: Methods

---

## 📖 Beginner-Friendly Explanation

A **method** is a **built-in tool** that belongs to a specific data type. Every [[1.2_str]], [[1.3_int]], [[1.7_list]], [[1.9_tuple]], and other type comes with its own set of methods.

### What is it?

A method is a **function attached to an object**. You call it using **dot notation**: \`variable.method()\`.

Think of methods like **buttons on a remote control** — each remote (data type) has different buttons (methods) that do different things.

### Why does it exist?

Without methods, you'd have to write all the code yourself to manipulate data. Methods give you **ready-made tools** so you don't reinvent the wheel.

### Why does it matter in real life?

- \`.upper()\` converts text to uppercase — imagine doing that letter by letter!
- \`.append()\` adds an item to a list — one simple command
- \`.keys()\` gets all dictionary keys — instant access

> "Methods are built-in tools that each data type provides to work with its data."

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["🔧 What Are Methods?"] --> B["Functions attached to objects"]
    B --> C["Called with dot notation"]
    C --> D["variable.method()"]
    A --> E["Each data type has its own methods"]
    E --> F["[[String Methods]] — 47 methods"]
    E --> G["[[Int Methods]] — 11 methods"]
    E --> H["[[Float Methods]] — 8 methods"]
    E --> I["[[Bool Methods]] — 11 methods"]
    E --> J["[[List Methods]] — 11 methods"]
    E --> K["[[Set Methods]] — 17 methods"]
    E --> L["[[Tuple Methods]] — 2 methods"]
    E --> M["[[Dict Methods]] — 11 methods"]
    A --> N["Key concept"]
    N --> O["[[Mutability vs Immutability]]"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
variable.method()           →  Call a method on a variable (no arguments)
variable.method(argument)   →  Call a method with an input value
result = variable.method()  →  Store the method's return value

# Real examples:
name = "hello"
name.upper()                →  "HELLO" (returns new string)

fruits = ["apple", "banana"]
fruits.append("cherry")     →  Modifies the list directly (no return)
\`\`\`

### How Python reads a method call:

\`\`\`text
text.upper()
 ↑     ↑    ↑
 |     |    └── parentheses = "run this method"
 |     └── method name = "make uppercase"
 └── the object = the data you're working with
\`\`\`

### The dot \`.\` means "belongs to":

\`\`\`text
text.upper()     →  "upper belongs to text"
nums.sort()      →  "sort belongs to nums"
data.keys()      →  "keys belongs to data"
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Think of your phone. Different apps have different actions.

\`\`\`python
# String methods — text tools
email = "  User@Email.COM  "
clean_email = email.strip().lower()
print(clean_email)       # "user@email.com"

# List methods — collection tools
todo = ["homework", "laundry"]
todo.append("groceries")
todo.sort()
print(todo)              # ['groceries', 'homework', 'laundry']

# Dict methods — lookup tools
contact = {"name": "Alice", "phone": "012-345"}
print(contact.keys())    # dict_keys(['name', 'phone'])
print(contact.get("email", "N/A"))  # "N/A" (key doesn't exist)
\`\`\`

**Step-by-step:**
1. \`email.strip()\` → Removes whitespace (a [[2.5_String_Methods|string method]])
2. \`.lower()\` → Converts to lowercase — **method chaining** (calling two methods in a row)
3. \`todo.append("groceries")\` → A [[2.9_List_Methods|list method]] that adds in place
4. \`contact.get("email", "N/A")\` → A [[2.12_Dict_Methods|dict method]] that safely gets a value

### 🧒 10-year-old beginner

**Scenario:** Imagine every toy has **special buttons** 🎮

\`\`\`python
# A toy robot (string) has text buttons
robot_name = "bumblebee"
print(robot_name.upper())      # BUMBLEBEE — the shout button!
print(robot_name.count("b"))   # 3 — the count button!

# A toy box (list) has collection buttons
toy_box = ["car", "doll"]
toy_box.append("robot")        # Add button — puts robot in the box!
print(toy_box)                 # ['car', 'doll', 'robot']
\`\`\`

**Step-by-step:**
1. \`.upper()\` → Press the "SHOUT" button on your robot name → \`BUMBLEBEE\`
2. \`.count("b")\` → Press the "COUNT" button → How many \`b\`s? → \`3\`
3. \`.append("robot")\` → Press the "ADD" button on the toy box → robot goes in!

Each toy (variable) has its **own special buttons** (methods). A [[1.2_str|text toy]] has different buttons than a [[1.7_list|box toy]]!

---

## 🔗 Related Concepts

- **How to call methods:** [[2.3_Method_Call_Syntax]]
- **Mutable vs Immutable:** [[2.2_Mutability_vs_Immutability]]
- **All methods at a glance:** [[2.4_Methods_Insight]]
- **Method references:** [[2.5_String_Methods]] · [[2.6_Int_Methods]] · [[2.7_Float_Methods]] · [[2.8_Bool_Methods]] · [[2.9_List_Methods]] · [[2.10_Set_Methods]] · [[2.11_Tuple_Methods]] · [[2.12_Dict_Methods]]
- **Parent types:** [[1.2_str]] · [[1.3_int]] · [[1.4_float]] · [[1.5_bool]] · [[1.7_list]] · [[1.8_set]] · [[1.10_dictionary]] · [[1.9_tuple]]
`;export{e as default};
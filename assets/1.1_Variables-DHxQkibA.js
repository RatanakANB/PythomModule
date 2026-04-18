var e=`# 📦 Variables

> 🏠 Parent: [[00_Index]]
> 📂 Section: Variables & Data Types

---

## 📖 Beginner-Friendly Explanation

A **variable** is a **name** that stores a piece of data in the computer's memory.

Think of it like a **labeled box** — you choose the label (name), and you put something inside (the value).

### Why do variables exist?

Without variables, your program would forget everything immediately. Variables let you **save**, **reuse**, and **change** data as your program runs.

### Why do they matter in real life?

Every app you use relies on variables:
- Your **username** is stored in a variable
- Your **score** in a game is a variable
- The **temperature** shown on a weather app is a variable

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["🏷️ Variable Name"] --> B["📦 Stores a Value"]
    B --> C{"What type of value?"}
    C --> D["[[str]] — Text"]
    C --> E["[[int]] — Whole Number"]
    C --> F["[[float]] — Decimal"]
    C --> G["[[bool]] — True/False"]
    C --> H["[[NoneType]] — Nothing"]
    C --> I["[[list]] — Many Items"]
    C --> J["[[set]] — Unique Items"]
    C --> K["[[tuple]] — Fixed Items"]
    C --> L["[[dict]] — Key-Value Pairs"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
name = "Alice"      →  Create a variable called 'name', store the text "Alice"
age = 15            →  Create a variable called 'age', store the number 15
height = 5.4        →  Create a variable called 'height', store the decimal 5.4
is_student = True   →  Create a variable called 'is_student', store True
\`\`\`

### How Python reads it:

\`\`\`text
name       =       "Alice"
 ↑         ↑         ↑
variable   assign   value
name       operator  (the data)
\`\`\`

### Naming Rules:

\`\`\`text
my_name     →  ✅ Valid (letters, underscores)
myName      →  ✅ Valid (camelCase)
my_name_2   →  ✅ Valid (can include numbers)
2name       →  ❌ Invalid (cannot start with a number)
my-name     →  ❌ Invalid (no hyphens allowed)
class       →  ❌ Invalid (reserved keyword)
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You're filling out a school registration form.

Each field on the form is like a variable — it has a label and you fill in the value.

\`\`\`python
# Registration form
student_name = "Sophia"        # Text field → str
student_age = 17               # Number field → int
gpa = 3.85                     # Decimal field → float
is_enrolled = True             # Checkbox → bool
graduation_date = None         # Empty field → NoneType
\`\`\`

**Step-by-step:**
1. \`student_name = "Sophia"\` → Python creates a box labeled \`student_name\`, puts \`"Sophia"\` inside
2. \`student_age = 17\` → Python creates a box labeled \`student_age\`, puts \`17\` inside
3. \`gpa = 3.85\` → Decimal numbers use [[1.4_float]]
4. \`is_enrolled = True\` → Checkboxes are like [[1.5_bool]] — either on or off
5. \`graduation_date = None\` → Empty fields are [[1.6_NoneType]] — nothing there yet

### 🧒 10-year-old beginner

**Scenario:** You have a **magic notebook** 📓 where you write things to remember them!

\`\`\`python
# Your magic notebook
favorite_color = "blue"     # You wrote: favorite_color is blue
pet_count = 3               # You wrote: I have 3 pets
is_happy = True             # You wrote: I am happy = True!
\`\`\`

**Step-by-step:**
1. You open your notebook and write \`favorite_color\` on a page — then write \`"blue"\` next to it
2. On the next page, you write \`pet_count\` and put \`3\`
3. On another page, \`is_happy\` gets \`True\` — it's like a yes/no sticker!

The notebook **remembers** everything. That's what variables do — they remember for your program!

---

## 🔗 Related Concepts

- **Data Types:** [[1.2_str]] · [[1.3_int]] · [[1.4_float]] · [[1.5_bool]] · [[1.6_NoneType]] · [[1.7_list]] · [[1.8_set]] · [[1.10_dictionary]] · [[1.9_dict]]
- **Use methods on variables:** [[2.1_What_Are_Methods]]
- **Combine variables with:** [[3.1_Arithmetic]] · [[3.4_Comparison]] · [[3.3_Logical]]
- **Check what type a variable is:** Use \`type(variable_name)\`
`;export{e as default};
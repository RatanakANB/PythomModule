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
    C --> D["[[1.02_String|str]] — Text"]
    C --> E["[[1.03_Integer|int]] — Whole Number"]
    C --> F["[[1.04_Float|float]] — Decimal"]
    C --> G["[[1.05_Bool|bool]] — True/False"]
    C --> H["[[1.06_NoneType|NoneType]] — Nothing"]
    C --> I["[[1.07_List|list]] — Many Items"]
    C --> J["[[1.08_Set|set]] — Unique Items"]
    C --> K["[[1.09_Tuple|tuple]] — Fixed Items"]
    C --> L["[[1.10_Dictionary|dict]] — Key-Value Pairs"]
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

## 💬 Getting Dynamic Values with \`input()\`

So far, our variables have been **hardcoded** (fixed values written directly into the code like \`name = "Alice"\`). 

In real life, programs don't guess — they **ask the user**! Python uses the built-in \`input()\` function to pause the program, wait for the user to type something on their keyboard and press <kbd>Enter</kbd>, and then store that answer inside a variable.

### 🧠 How \`input()\` Works:

\`\`\`mermaid
flowchart LR
    A["👤 User types on keyboard"] --> B["💬 input('Prompt message: ')"]
    B --> C["🔤 Returns a text String (str)"]
    C --> D["📦 Stored in a Variable"]
    C -.->|"If you need math"| E["🔄 Convert with int() or float()"]
    E --> F["🔢 Number Variable"]
\`\`\`

### ⚙️ Syntax & Type Conversion:

\`\`\`python
# 1. Basic text input (always produces a str)
user_name = input("Enter your name: ")

# 2. Number input (convert with int())
user_age = int(input("Enter your age: "))

# 3. Decimal number input (convert with float())
item_price = float(input("Enter price: "))
\`\`\`

> [!WARNING] The #1 Beginner Trap: \`input()\` Always Returns Text!
> Even if the user types \`25\`, Python sees it as \`"25"\` (a [[1.02_String]], not a number).
>
> \`\`\`python
> # ❌ WRONG: Text gets glued together, not added!
> num1 = input("Enter first number: ")   # User types 10 -> "10"
> num2 = input("Enter second number: ")  # User types 5  -> "5"
> print(num1 + num2)                     # Outputs "105" (string concatenation!)
>
> # ✅ RIGHT: Wrap with int() to do real math!
> num1 = int(input("Enter first number: "))  # Converted to 10
> num2 = int(input("Enter second number: ")) # Converted to 5
> print(num1 + num2)                         # Outputs 15
> \`\`\`

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
3. \`gpa = 3.85\` → Decimal numbers use [[1.04_Float]]
4. \`is_enrolled = True\` → Checkboxes are like [[1.05_Bool]] — either on or off
5. \`graduation_date = None\` → Empty fields are [[1.06_NoneType]] — nothing there yet

**Making it interactive with \`input()\`:**
\`\`\`python
# Real interactive form asking the student directly:
student_name = input("Enter your name: ")       # Stores text input (str)
student_age = int(input("Enter your age: "))     # Converts input into int
gpa = float(input("Enter your GPA: "))           # Converts input into float

print(f"Registered {student_name}, age {student_age}, GPA {gpa}!")
\`\`\`

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

**Talking Magic Robot with \`input()\`:**
\`\`\`python
# Now the notebook can ask YOU questions!
friend_name = input("What is your name, human? ")
pet_count = int(input("How many pets do you have? "))

print(f"Beep boop! Hello {friend_name}! Say hi to your {pet_count} pets for me! 🤖🐾")
\`\`\`

---

## 🔗 Related Concepts

- **Data Types:** [[1.02_String]] · [[1.03_Integer]] · [[1.04_Float]] · [[1.05_Bool]] · [[1.06_NoneType]] · [[1.07_List]] · [[1.08_Set]] · [[1.09_Tuple]] · [[1.10_Dictionary]]
- **User Input:** \`input()\` asks the user for data from the keyboard (always returns [[1.02_String]], convert with [[1.03_Integer]] or [[1.04_Float]] for math)
- **Use methods on variables:** [[2.01_What_Are_Methods]]
- **Combine variables with:** [[3.01_Arithmetic]] · [[3.04_Comparison]] · [[3.03_Logical]]
- **Check what type a variable is:** Use \`type(variable_name)\`
`;export{e as default};
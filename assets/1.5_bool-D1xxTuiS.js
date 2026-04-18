var e=`# ✅ bool — Boolean

> 🏠 Parent: [[1.1_Variables]] · [[00_Index]]
> 📂 Section: Variables & Data Types
> 🔧 Methods: [[2.8_Bool_Methods]]

---

## 📖 Beginner-Friendly Explanation

A **boolean** (\`bool\`) can only be one of two values: \`True\` or \`False\`.

### What is it?

Booleans represent **yes/no**, **on/off**, **true/false** decisions. They are the simplest data type — just two possible states.

### Why does it exist?

Programs need to make **decisions**. "Is the user logged in?" "Is the score above 50?" "Did the player win?" Every question that has a yes/no answer uses a boolean.

### Why does it matter in real life?

- Light switch: on (\`True\`) or off (\`False\`)
- Login status: logged in or not
- Game status: alive or dead
- Form checkbox: checked or unchecked

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["✅ bool — Boolean"] --> B["Only 2 values"]
    B --> C["True ✅"]
    B --> D["False ❌"]
    A --> E["Created by"]
    E --> F["Direct: is_happy = True"]
    E --> G["Comparison: 5 > 3 → True"]
    E --> H["Methods: 'hello'.isalpha() → True"]
    A --> I["🔧 Has 11 Methods"]
    I --> J["[[Bool Methods]]"]
    A --> K["Secret: bool inherits from [[int]]"]
    K --> L["True = 1, False = 0"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
is_student = True       →  Create a boolean (note: capital T)
is_adult = False        →  Create a boolean (note: capital F)

# Booleans from comparisons
5 > 3                   →  True
10 == 20                →  False
"a" in "apple"          →  True

# Bool is secretly an int!
True + True             →  2 (because True = 1)
False + 1               →  1 (because False = 0)
int(True)               →  1
int(False)              →  0

# Truthy and Falsy values
bool(0)                 →  False (zero is falsy)
bool("")                →  False (empty string is falsy)
bool(None)              →  False (None is falsy)
bool(42)                →  True (any non-zero number is truthy)
bool("hello")           →  True (any non-empty string is truthy)
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You're building a simple login system.

\`\`\`python
# Login system
username = "sophia_123"
password = "myPassword!"
is_logged_in = False         # Start as not logged in

# User enters credentials
entered_user = "sophia_123"
entered_pass = "myPassword!"

# Check credentials (comparison operators create bools!)
username_correct = (entered_user == username)   # True
password_correct = (entered_pass == password)   # True

# Both must be true (logical operator)
is_logged_in = username_correct and password_correct
print(is_logged_in)          # True → Access granted!
print(type(is_logged_in))   # <class 'bool'>
\`\`\`

**Step-by-step:**
1. \`is_logged_in = False\` → Start with the boolean \`False\`
2. \`==\` [[3.4_Comparison|comparison operator]] checks if values match, returns a \`bool\`
3. \`and\` [[3.3_Logical|logical operator]] needs BOTH to be \`True\`
4. Result: \`True and True = True\` → Login successful!

### 🧒 10-year-old beginner

**Scenario:** You're a **robot** 🤖 that can only answer YES or NO!

\`\`\`python
# Robot Q&A
is_raining = True
have_umbrella = False

# Should I go outside?
can_go_outside = not is_raining or have_umbrella
print(can_go_outside)    # False — it's raining and no umbrella!

# Is ice cream yummy?
ice_cream_yummy = True
print(ice_cream_yummy)   # True — obviously!
\`\`\`

**Step-by-step:**
1. \`is_raining = True\` → Robot checks: "Is it raining?" → YES! (\`True\`)
2. \`have_umbrella = False\` → "Do I have an umbrella?" → NO! (\`False\`)
3. \`not True = False\`, \`False or False = False\` → "Should I go outside?" → NO!
4. The robot can ONLY say \`True\` (YES) or \`False\` (NO) — that's booleans!

---

## 🔗 Related Concepts

- **Parent:** [[1.1_Variables]]
- **Methods:** [[2.8_Bool_Methods]] (11 methods — inherited from [[1.3_int]])
- **Related types:** [[1.3_int]] (bool is a subclass of int), [[1.2_str]] (\`str(True)\` → \`"True"\`)
- **Operators:** [[3.4_Comparison]] (creates bools), [[3.3_Logical]] (\`and\`, \`or\`, \`not\`), [[3.6_Identity]] (\`is\`, \`is not\`)
- **Key concept:** [[2.2_Mutability_vs_Immutability]] — booleans are **immutable**
`;export{e as default};
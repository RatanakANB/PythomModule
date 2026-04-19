var e=`# 🧠 Logical Operators

> 🏠 Parent: [[00_Index]]
> 📂 Section: Operators

---

## 📖 Beginner-Friendly Explanation

**Logical operators** combine multiple [[1.05_Bool|boolean]] conditions. They answer questions like: "Are BOTH conditions true?", "Is at LEAST ONE true?", "Is this NOT true?"

### What is it?

Python has 3 logical operators: \`and\`, \`or\`, and \`not\`. They combine or reverse True/False values.

### Why does it exist?

Real decisions often have multiple conditions: "Is the user logged in AND is their subscription active?" You need logical operators to combine separate checks.

### Why does it matter in real life?

- Login: correct username **AND** correct password
- Discount: member **OR** spending over $50
- Access: **NOT** banned

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["🧠 Logical Operators"] --> B["and"]
    A --> C["or"]
    A --> D["not"]
    B --> E["True AND True = True"]
    B --> F["True AND False = False"]
    C --> G["True OR False = True"]
    C --> H["False OR False = False"]
    D --> I["NOT True = False"]
    D --> J["NOT False = True"]
\`\`\`

---

## ⚙️ Syntax Breakdown

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| \`and\` | Both must be True | \`True and True\` | \`True\` |
| \`or\` | At least one must be True | \`False or True\` | \`True\` |
| \`not\` | Reverses the value | \`not True\` | \`False\` |

### Truth tables:

\`\`\`text
# AND — Both must be True
True  and True   →  True
True  and False  →  False
False and True   →  False
False and False  →  False

# OR — At least one must be True
True  or True    →  True
True  or False   →  True
False or True    →  True
False or False   →  False

# NOT — Flip the value
not True         →  False
not False        →  True
\`\`\`

### Short-circuit evaluation:

\`\`\`text
# Python is lazy — stops as soon as it knows the answer!
# AND: if the first is False, the second is NEVER checked
False and print("hi")   →  False (print never runs!)

# OR: if the first is True, the second is NEVER checked
True or print("hi")     →  True (print never runs!)
\`\`\`

### Combining with comparisons:

\`\`\`text
age = 15
has_ticket = True

age >= 13 and has_ticket        →  True (both conditions met!)
age >= 18 or has_ticket         →  True (at least one is true)
not (age < 10)                  →  True (age is NOT less than 10)
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Checking if you can register for a course.

\`\`\`python
# Course registration requirements
age = 16
has_prerequisites = True
gpa = 3.5
spots_available = True

# Must meet ALL requirements (AND)
can_register = (age >= 15) and has_prerequisites and (gpa >= 3.0) and spots_available
print(can_register)      # True — all conditions met!

# Scholarship: high GPA OR special recommendation
special_recommendation = False
gets_scholarship = (gpa >= 3.8) or special_recommendation
print(gets_scholarship)  # False — neither condition met

# Is the student NOT on probation?
on_probation = False
good_standing = not on_probation
print(good_standing)     # True — not on probation = good standing!
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Can you go to the **playground**? 🛝

\`\`\`python
# Playground rules
is_sunny = True
finished_homework = True
is_sick = False

# Rule 1: Must be sunny AND homework done
can_go = is_sunny and finished_homework
print(can_go)            # True — yes, you can go!

# Rule 2: Stay home if raining OR sick
is_raining = False
stay_home = is_raining or is_sick
print(stay_home)         # False — no need to stay home!

# Rule 3: NOT sick means you're healthy!
is_healthy = not is_sick
print(is_healthy)        # True — you're healthy!
\`\`\`

---

## 🔗 Related Concepts

- **Produces:** [[1.05_Bool]] values (True/False)
- **Works with:** [[3.04_Comparison]] operators (combine conditions)
- **Related:** [[3.06_Identity]] (\`is\`, \`is not\`), [[3.05_Membership]] (\`in\`, \`not in\`)
- **Variables:** [[1.01_Variables]]
- **Parent:** [[00_Index]]
`;export{e as default};
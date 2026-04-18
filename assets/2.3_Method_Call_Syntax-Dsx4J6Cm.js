var e=`# 🔗 Method Call Syntax (Dot Notation)

> 🏠 Parent: [[2.1_What_Are_Methods]] · [[00_Index]]
> 📂 Section: Methods

---

## 📖 Beginner-Friendly Explanation

**Dot notation** is the way you call a method in Python. You write the variable name, then a **dot** \`.\`, then the **method name**, then **parentheses** \`()\`.

### What is it?

Dot notation is the syntax pattern: \`object.method(arguments)\`. The dot connects the object to its method.

### Why does it exist?

Python needs a clear way to say "this method belongs to this specific object." The dot acts like an arrow pointing from the object to its tool.

### Why does it matter in real life?

Every time you use a method in Python, you use dot notation. Understanding it is essential for working with **any** data type.

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["📦 Object/Variable"] --> B["• dot"]
    B --> C["🔧 method name"]
    C --> D["( arguments )"]
    D --> E["→ Result"]

    style A fill:#4CAF50,color:#fff
    style B fill:#FF9800,color:#fff
    style C fill:#2196F3,color:#fff
    style D fill:#9C27B0,color:#fff
    style E fill:#F44336,color:#fff
\`\`\`

---

## ⚙️ Syntax Breakdown

### Pattern 1: No arguments

\`\`\`text
text = "hello"
text.upper()             →  "HELLO"

 text    .    upper    ()
  ↑      ↑     ↑       ↑
object  dot  method  empty parens = no extra input needed
\`\`\`

### Pattern 2: With arguments

\`\`\`text
text = "hello world"
text.replace("world", "Python")   →  "hello Python"

 text    .    replace   ("world", "Python")
  ↑      ↑      ↑              ↑
object  dot   method      arguments = inputs the method needs
\`\`\`

### Pattern 3: Storing the result

\`\`\`text
text = "hello"
result = text.upper()     →  result = "HELLO"
# text is still "hello" — strings are immutable!
\`\`\`

### Pattern 4: Method chaining

\`\`\`text
email = "  User@Email.COM  "
clean = email.strip().lower()
# Step 1: email.strip()  →  "User@Email.COM"
# Step 2: "User@Email.COM".lower()  →  "user@email.com"
\`\`\`

### Pattern 5: Methods that modify in place (mutable types)

\`\`\`text
nums = [3, 1, 2]
nums.sort()               →  nums is now [1, 2, 3]
# No need to store result — the list itself changed!
# This only works with mutable types: list, set, dict
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You're processing user input for a registration form.

\`\`\`python
# Raw user input (messy!)
raw_name = "  jOhN sMiTh  "
raw_email = "John.Smith@GMAIL.COM"

# Clean the name: strip whitespace, then title case
clean_name = raw_name.strip().title()
print(clean_name)          # "John Smith"

# Clean the email: strip, then lowercase
clean_email = raw_email.strip().lower()
print(clean_email)          # "john.smith@gmail.com"

# Check if email is valid format
has_at = "@" in clean_email          # True (membership operator)
has_dot = "." in clean_email         # True
print(has_at and has_dot)            # True
\`\`\`

**Step-by-step:**
1. \`raw_name.strip()\` → Remove extra spaces → \`"jOhN sMiTh"\`
2. \`.title()\` → Capitalize first letter of each word → \`"John Smith"\` ([[2.5_String_Methods]])
3. The **dot** chains two methods: \`strip()\` runs first, then \`title()\` runs on the result
4. Original \`raw_name\` is **unchanged** — [[2.2_Mutability_vs_Immutability|immutable]]

### 🧒 10-year-old beginner

**Scenario:** The dot \`.\` is like saying **"please do this"** to your toy!

\`\`\`python
# Talk to your toy using the magic dot!
toy_name = "teddy bear"

# Say: "teddy bear, PLEASE upper()!"
loud_name = toy_name.upper()
print(loud_name)         # TEDDY BEAR — the toy shouted!

# Say: "teddy bear, PLEASE count 'd'!"
d_count = toy_name.count("d")
print(d_count)           # 2 — there are two d's!

# Say: "teddy bear, PLEASE replace 'bear' with 'bunny'!"
new_name = toy_name.replace("bear", "bunny")
print(new_name)          # teddy bunny
\`\`\`

**Step-by-step:**
1. \`toy_name.upper()\` → "Hey teddy bear, **please** shout your name!" → \`TEDDY BEAR\`
2. \`toy_name.count("d")\` → "Hey teddy bear, **please** count the letter d!" → \`2\`
3. The dot \`.\` is like saying **"please do this thing"** to the variable

---

## 🔗 Related Concepts

- **What methods are:** [[2.1_What_Are_Methods]]
- **Mutable vs Immutable behavior:** [[2.2_Mutability_vs_Immutability]]
- **Method references:** [[2.5_String_Methods]] · [[2.6_Int_Methods]] · [[2.7_Float_Methods]] · [[2.8_Bool_Methods]] · [[2.9_List_Methods]] · [[2.10_Set_Methods]] · [[2.11_Tuple_Methods]] · [[2.12_Dict_Methods]]
- **All methods overview:** [[2.4_Methods_Insight]]
`;export{e as default};
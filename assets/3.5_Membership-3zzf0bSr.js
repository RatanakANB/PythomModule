var e=`	# 📦 Membership Operators

> 🏠 Parent: [[00_Index]]
> 📂 Section: Operators

---

## 📖 Beginner-Friendly Explanation

**Membership operators** check if a value **exists inside** a collection. They answer: "Is this item in the list?", "Does this word contain this letter?"

### What is it?

Python has 2 membership operators: \`in\` and \`not in\`. They check whether a value is found inside a sequence ([[1.2_str]], [[1.7_list]], [[1.10_dictionary]], [[1.8_set]], [[1.9_dict]]).

### Why does it exist?

Before you can use a piece of data, you often need to check if it exists. "Is this username taken?", "Does the word contain a vowel?", "Is this item in the shopping cart?"

### Why does it matter in real life?

- Checking if a product is in your cart
- Searching for a word in a document
- Checking if a user is in the admin list
- Validating allowed characters in a password

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["📦 Membership Operators"] --> B["in"]
    A --> C["not in"]
    B --> D["Is value inside the collection?"]
    C --> E["Is value NOT inside the collection?"]
    A --> F["Works with"]
    F --> G["[[str]] — check for substring"]
    F --> H["[[list]] — check for item"]
    F --> I["[[tuple]] — check for item"]
    F --> J["[[set]] — FASTEST check"]
    F --> K["[[dict]] — checks KEYS only"]
\`\`\`

---

## ⚙️ Syntax Breakdown

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| \`in\` | Value exists in collection? | \`"a" in "apple"\` | \`True\` |
| \`not in\` | Value does NOT exist? | \`"x" not in "apple"\` | \`True\` |

\`\`\`text
# In strings — checks for SUBSTRING:
"app" in "apple"          →  True
"xyz" in "apple"          →  False
"" in "apple"             →  True (empty string is always "in")

# In lists — checks for ITEM:
3 in [1, 2, 3, 4]        →  True
5 in [1, 2, 3, 4]        →  False

# In tuples — same as list:
"red" in ("red", "green") →  True

# In sets — FASTEST (designed for this!):
"banana" in {"apple", "banana", "cherry"}  →  True

# In dicts — checks KEYS, not values:
"name" in {"name": "Alice", "age": 15}    →  True (key exists)
"Alice" in {"name": "Alice", "age": 15}   →  False (Alice is a VALUE, not a key)

# To check dict values:
"Alice" in {"name": "Alice"}.values()     →  True
\`\`\`

### Performance comparison:

\`\`\`text
# Speed of 'in' by type:
# set  → ⚡ O(1) — instant! (fastest)
# dict → ⚡ O(1) — instant! (checks keys)
# list → 🐢 O(n) — checks each item one by one
# tuple → 🐢 O(n) — checks each item one by one
# str  → 🐢 O(n) — checks character by character
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Validating a signup form.

\`\`\`python
# Banned words list
banned_words = {"spam", "scam", "hack", "fake"}
admin_users = {"alice", "bob", "charlie"}

# User input
username = "alice"
password = "MyP@ssword123"
bio = "I love coding and sharing knowledge"

# Check if username is admin
is_admin = username in admin_users
print(f"Is admin: {is_admin}")          # True

# Check if bio contains banned words
for word in banned_words:
    if word in bio.lower():
        print(f"⚠️ Banned word found: {word}")
        break
else:
    print("✅ Bio is clean!")            # Bio is clean!

# Password validation
has_upper = any(c.isupper() for c in password)
has_digit = any(c.isdigit() for c in password)
has_special = "@" in password or "!" in password
print(f"Strong password: {has_upper and has_digit and has_special}")  # True
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Playing **I Spy** 👁️

\`\`\`python
# I Spy — finding things in a list!
backpack = ["pencil", "eraser", "book", "snack", "water"]

# I spy... is there a snack?
print("snack" in backpack)     # True — found it!

# I spy... is there a toy?
print("toy" in backpack)       # False — no toy here!

# I spy... what's NOT in the bag?
print("phone" not in backpack)  # True — no phone!

# I spy a letter in a word!
word = "elephant"
print("e" in word)             # True — 'e' is in "elephant"!
print("z" in word)             # False — no 'z' here!
\`\`\`

---

## 🔗 Related Concepts

- **Works with:** [[1.2_str]] · [[1.7_list]] · [[1.10_dictionary]] · [[1.8_set]] · [[1.9_dict]]
- **Results are:** [[1.5_bool]]
- **Combine with:** [[3.3_Logical]] (\`and\`, \`or\`, \`not\`)
- **Related:** [[3.4_Comparison]] (compares values), [[3.6_Identity]] (checks same object)
- **Set is fastest:** [[1.8_set]] is designed for membership testing
- **Dict checks keys:** [[1.9_dict]] — \`in\` only checks keys, not values
- **Parent:** [[00_Index]]

`;export{e as default};
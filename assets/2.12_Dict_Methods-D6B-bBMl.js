var e=`# 📖 Dict Methods — All 11 Methods

> 🏠 Parent: [[1.9_tuple]] · [[2.01_What_Are_Methods]]
> 📂 Section: Methods
> 🔑 Key concept: Dicts are [[2.02_Mutability_vs_Immutability|mutable]] — methods can **add, change, and remove** key-value pairs

---

## 📖 Beginner-Friendly Explanation

Dictionaries have **11 methods** for accessing data, adding/updating entries, removing entries, and getting copies. Since dicts store **key-value pairs**, their methods work with keys, values, or both.

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
mindmap
  root(("📖 Dict Methods — 11"))
    🔑 Access (5)
      get
      keys
      values
      items
      setdefault
    ➕ Addition/Update (2)
      update
      fromkeys
    ➖ Removal (3)
      pop
      popitem
      clear
    🔧 Utility (1)
      copy
\`\`\`

---

# 🔑 Access Methods (5)

> Safely retrieve keys, values, and key-value pairs.

## \`get(key, default)\`

Return the value for the key. If key doesn't exist, return \`default\` instead of crashing.

\`\`\`python
student = {"name": "Alice", "age": 15}

student.get("name")              # "Alice"
student.get("grade", "N/A")     # "N/A" (key doesn't exist — returns default)
student.get("age")               # 15

# Compare with bracket access:
# student["name"]               # "Alice" — same result
# student["grade"]              # ❌ KeyError! Crashes!
# student.get("grade", "N/A")  # "N/A" — safe, no crash
\`\`\`

\`\`\`text
dict.get(key)          →  Return value for key, or None if not found
dict.get(key, default) →  Return value for key, or default if not found
# SAFE alternative to dict[key] — never crashes!
\`\`\`

---

## \`keys()\`

Return a view of all **keys** in the dictionary.

\`\`\`python
student = {"name": "Alice", "age": 15, "grade": "A"}
print(student.keys())    # dict_keys(['name', 'age', 'grade'])

# Often used in loops:
for key in student.keys():
    print(key)            # name, age, grade
\`\`\`

\`\`\`text
dict.keys()  →  All the key names → dict_keys object (like a list)
\`\`\`

---

## \`values()\`

Return a view of all **values** in the dictionary.

\`\`\`python
student = {"name": "Alice", "age": 15, "grade": "A"}
print(student.values())  # dict_values(['Alice', 15, 'A'])

# Sum all numeric values:
prices = {"apple": 1.50, "banana": 0.75, "cherry": 2.00}
total = sum(prices.values())
print(total)              # 4.25
\`\`\`

\`\`\`text
dict.values()  →  All the values → dict_values object
\`\`\`

---

## \`items()\`

Return a view of all **key-value pairs** as tuples.

\`\`\`python
student = {"name": "Alice", "age": 15}
print(student.items())   # dict_items([('name', 'Alice'), ('age', 15)])

# Most useful in loops:
for key, value in student.items():
    print(f"{key}: {value}")
# name: Alice
# age: 15
\`\`\`

\`\`\`text
dict.items()  →  All (key, value) pairs → like a list of tuples
\`\`\`

---

## \`setdefault(key, default)\`

Return the value if key exists. If it doesn't, **insert** the key with the default value and return it.

\`\`\`python
student = {"name": "Alice"}

# Key exists — just returns the value (no change)
student.setdefault("name", "Unknown")    # "Alice"

# Key doesn't exist — inserts it!
student.setdefault("grade", "B")         # "B"
print(student)   # {"name": "Alice", "grade": "B"} — grade was added!
\`\`\`

\`\`\`text
dict.setdefault(key, default)  →  Get value OR insert default if missing
# Like get() but also ADDS the key if it doesn't exist
\`\`\`

---

# ➕ Addition / Update Methods (2)

## \`update(other)\`

Add or update **multiple** key-value pairs from another dict or iterable.

\`\`\`python
student = {"name": "Alice", "age": 15}
student.update({"age": 16, "grade": "A"})
print(student)   # {"name": "Alice", "age": 16, "grade": "A"}
# age was UPDATED from 15 to 16
# grade was ADDED (new key)

# Can also use keyword arguments:
student.update(school="Riverside High")
\`\`\`

\`\`\`text
dict.update(other_dict)  →  Merge other_dict into this dict → returns None
# Existing keys: values get OVERWRITTEN
# New keys: get ADDED
\`\`\`

---

## \`fromkeys(keys, value)\` *(class method)*

Create a **new dictionary** with given keys, all set to the same value.

\`\`\`python
subjects = ["math", "science", "english"]
grades = dict.fromkeys(subjects, 0)
print(grades)     # {"math": 0, "science": 0, "english": 0}

# Without value — defaults to None:
template = dict.fromkeys(["name", "age", "email"])
print(template)   # {"name": None, "age": None, "email": None}
\`\`\`

\`\`\`text
dict.fromkeys(keys, value)  →  New dict with all keys set to same value
# Called on the dict class: dict.fromkeys(...), not on a variable
\`\`\`

---

# ➖ Removal Methods (3)

## \`pop(key, default)\`

Remove the key and **return its value**. If key not found, return \`default\` or crash.

\`\`\`python
student = {"name": "Alice", "age": 15, "grade": "A"}

removed = student.pop("grade")
print(removed)           # "A"
print(student)           # {"name": "Alice", "age": 15}

# With default (safe):
result = student.pop("email", "not found")
print(result)            # "not found" (no crash)

# Without default (unsafe):
# student.pop("email")   # ❌ KeyError!
\`\`\`

\`\`\`text
dict.pop(key)          →  Remove key, return value → ❌ crashes if not found
dict.pop(key, default) →  Remove key, return value → returns default if not found
\`\`\`

---

## \`popitem()\`

Remove and return the **last inserted** key-value pair as a [[1.10_dictionary]].

\`\`\`python
student = {"name": "Alice", "age": 15, "grade": "A"}

last = student.popitem()
print(last)              # ("grade", "A")
print(student)           # {"name": "Alice", "age": 15}

# On empty dict:
# {}.popitem()           # ❌ KeyError!
\`\`\`

\`\`\`text
dict.popitem()  →  Remove and return the LAST item as (key, value) tuple
\`\`\`

---

## \`clear()\`

Remove **all** key-value pairs.

\`\`\`python
student = {"name": "Alice", "age": 15}
student.clear()
print(student)           # {}
\`\`\`

\`\`\`text
dict.clear()  →  Delete everything → empty dict → returns None
\`\`\`

---

# 🔧 Utility Method (1)

## \`copy()\`

Create a **shallow copy** of the dictionary.

\`\`\`python
original = {"name": "Alice", "age": 15}
duplicate = original.copy()
duplicate["age"] = 16

print(original)          # {"name": "Alice", "age": 15} — unchanged!
print(duplicate)         # {"name": "Alice", "age": 16}
\`\`\`

\`\`\`text
dict.copy()  →  New dict with same key-value pairs
# Using = without copy creates a REFERENCE, not a copy!
\`\`\`

---

# 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Building a student grade tracker.

\`\`\`python
# Grade tracker
grades = {}

# Add grades using update
grades.update({"Math": 95, "Science": 88, "English": 92})
print(grades)              # {'Math': 95, 'Science': 88, 'English': 92}

# Safely get a grade
art_grade = grades.get("Art", "Not enrolled")
print(art_grade)           # "Not enrolled"

# Set default for new subject
grades.setdefault("Art", 0)
print(grades)              # Now Art: 0 is added

# View all subjects and grades
for subject, score in grades.items():
    print(f"{subject}: {score}")

# Remove a subject
dropped = grades.pop("Art")
print(f"Dropped Art (had grade: {dropped})")

# Make a backup
backup = grades.copy()
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Your **pet info card** keeps changing! 🐕

\`\`\`python
# Pet info card
pet = {"name": "Buddy", "animal": "dog", "age": 3}

# What's your pet's name? (safe way)
print(pet.get("name"))       # Buddy

# What color? (doesn't exist yet)
print(pet.get("color", "unknown"))   # unknown — didn't crash!

# Add color!
pet.update({"color": "golden", "age": 4})  # Buddy got older!
print(pet)   # {'name': 'Buddy', 'animal': 'dog', 'age': 4, 'color': 'golden'}

# What labels does the card have?
print(pet.keys())   # dict_keys(['name', 'animal', 'age', 'color'])
\`\`\`

---

## 🔗 Related Concepts

- **Data type:** [[1.9_tuple]]
- **Mutable behavior:** [[2.02_Mutability_vs_Immutability]]
- **Call syntax:** [[2.03_Method_Call_Syntax]]
- **Overview:** [[2.04_Methods_Insight]]
- **Other methods:** [[2.09_List_Methods]] · [[2.10_Set_Methods]] · [[2.05_String_Methods]]
- **Operators:** [[3.5_Membership]] (\`in\` checks for keys)
`;export{e as default};
var e=`# 📋 List Methods — All 11 Methods

> 🏠 Parent: [[1.7_list]] · [[2.1_What_Are_Methods]]
> 📂 Section: Methods
> 🔑 Key concept: Lists are [[2.2_Mutability_vs_Immutability|mutable]] — most methods **modify the list in place** and return \`None\`

---

## 📖 Beginner-Friendly Explanation

Lists come with **11 built-in methods** for adding, removing, searching, and organizing items. Since lists are **mutable**, most methods change the list directly — you don't need to store the result.

> ⚠️ Common beginner mistake: \`my_list = my_list.sort()\` → This sets \`my_list\` to \`None\`! Just use \`my_list.sort()\`.

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
mindmap
  root(("📋 List Methods — 11"))
    ➕ Addition (3)
      append
      extend
      insert
    ➖ Removal (3)
      remove
      pop
      clear
    🔍 Search (2)
      index
      count
    📊 Ordering (2)
      sort
      reverse
    🔧 Utility (1)
      copy
\`\`\`

---

# ➕ Addition Methods (3)

> Add items to the list. These **modify the list in place**.

## \`append(item)\`

Add **one item** to the **end** of the list.

\`\`\`python
fruits = ["apple", "banana"]
fruits.append("cherry")
print(fruits)            # ["apple", "banana", "cherry"]

# append adds the WHOLE thing as one item:
fruits.append(["grape", "mango"])
print(fruits)            # ["apple", "banana", "cherry", ["grape", "mango"]]
# ⚠️ The list itself was added as a single item!
\`\`\`

\`\`\`text
list.append(item)  →  Add item at the END → returns None
# Adds exactly ONE item (even if it's a list)
\`\`\`

---

## \`extend(iterable)\`

Add **multiple items** from another iterable (list, tuple, set, etc.).

\`\`\`python
fruits = ["apple", "banana"]
fruits.extend(["cherry", "grape"])
print(fruits)            # ["apple", "banana", "cherry", "grape"]

# Compare with append:
# append(["cherry", "grape"]) → adds ONE item (a list inside a list)
# extend(["cherry", "grape"]) → adds TWO items (cherry and grape)
\`\`\`

\`\`\`text
list.extend(iterable)  →  Unpack and add each item individually → returns None
\`\`\`

---

## \`insert(index, item)\`

Add an item at a **specific position**.

\`\`\`python
fruits = ["apple", "cherry"]
fruits.insert(1, "banana")       # Insert "banana" at index 1
print(fruits)            # ["apple", "banana", "cherry"]

fruits.insert(0, "mango")       # Insert at the beginning
print(fruits)            # ["mango", "apple", "banana", "cherry"]
\`\`\`

\`\`\`text
list.insert(index, item)  →  Put item at position 'index', shift others right
\`\`\`

---

# ➖ Removal Methods (3)

> Remove items from the list. These **modify the list in place**.

## \`remove(item)\`

Remove the **first occurrence** of the item. Raises \`ValueError\` if not found.

\`\`\`python
fruits = ["apple", "banana", "cherry", "banana"]
fruits.remove("banana")
print(fruits)            # ["apple", "cherry", "banana"]
# Only the FIRST "banana" was removed!

# fruits.remove("grape")  # ❌ ValueError! "grape" not in list
\`\`\`

\`\`\`text
list.remove(item)  →  Find and remove the FIRST match → returns None
# ❌ Crashes if item not found!
\`\`\`

---

## \`pop(index)\`

Remove and **return** the item at the given index. Default: removes **last** item.

\`\`\`python
fruits = ["apple", "banana", "cherry"]

last = fruits.pop()          # Remove and return last
print(last)              # "cherry"
print(fruits)            # ["apple", "banana"]

first = fruits.pop(0)        # Remove and return index 0
print(first)             # "apple"
print(fruits)            # ["banana"]
\`\`\`

\`\`\`text
list.pop()       →  Remove and RETURN the last item
list.pop(index)  →  Remove and RETURN item at that index
# This is the ONLY removal method that returns the removed item!
\`\`\`

---

## \`clear()\`

Remove **all items**, leaving an empty list.

\`\`\`python
fruits = ["apple", "banana", "cherry"]
fruits.clear()
print(fruits)            # []
\`\`\`

\`\`\`text
list.clear()  →  Delete everything → empty list → returns None
\`\`\`

---

# 🔍 Search Methods (2)

> Find items or count occurrences. These **do NOT modify** the list.

## \`index(item)\`

Returns the **index** of the first occurrence. Raises \`ValueError\` if not found.

\`\`\`python
fruits = ["apple", "banana", "cherry", "banana"]
fruits.index("banana")   # 1 (first occurrence)
fruits.index("cherry")   # 2

# fruits.index("grape")  # ❌ ValueError!

# Search within a range:
fruits.index("banana", 2)   # 3 (search starting from index 2)
\`\`\`

\`\`\`text
list.index(item)  →  Where is this item? → returns index number
# ❌ Crashes if not found! Use 'in' operator first to check.
\`\`\`

---

## \`count(item)\`

Returns how many times the item appears.

\`\`\`python
fruits = ["apple", "banana", "cherry", "banana"]
fruits.count("banana")    # 2
fruits.count("apple")     # 1
fruits.count("grape")     # 0 (doesn't crash — just returns 0)
\`\`\`

\`\`\`text
list.count(item)  →  How many times does this appear? → number
\`\`\`

---

# 📊 Ordering Methods (2)

> Rearrange items. These **modify the list in place**.

## \`sort()\`

Sort the list in **ascending order** (or custom order with \`key\` and \`reverse\`).

\`\`\`python
numbers = [3, 1, 4, 1, 5, 9]
numbers.sort()
print(numbers)           # [1, 1, 3, 4, 5, 9]

# Sort descending:
numbers.sort(reverse=True)
print(numbers)           # [9, 5, 4, 3, 1, 1]

# Sort strings by length:
words = ["banana", "apple", "fig"]
words.sort(key=len)
print(words)             # ["fig", "apple", "banana"]
\`\`\`

\`\`\`text
list.sort()               →  Sort ascending in place → returns None
list.sort(reverse=True)   →  Sort descending
list.sort(key=func)       →  Sort by custom rule
# ⚠️ Do NOT write: my_list = my_list.sort() → this gives None!
\`\`\`

---

## \`reverse()\`

Reverse the list **in place** (flip the order).

\`\`\`python
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)           # [5, 4, 3, 2, 1]
\`\`\`

\`\`\`text
list.reverse()  →  Flip the order in place → returns None
# Not sorting! Just reversing whatever order exists.
\`\`\`

---

# 🔧 Utility Method (1)

## \`copy()\`

Create a **shallow copy** of the list.

\`\`\`python
original = [1, 2, 3]
duplicate = original.copy()
duplicate.append(4)

print(original)          # [1, 2, 3] — unchanged!
print(duplicate)         # [1, 2, 3, 4]

# Without copy:
reference = original     # NOT a copy — same list!
reference.append(99)
print(original)          # [1, 2, 3, 99] — both changed!
\`\`\`

\`\`\`text
list.copy()  →  Create a new list with the same items
# Important: just using = doesn't copy, it creates a reference!
\`\`\`

---

# 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Managing a class attendance list.

\`\`\`python
# Class roster
students = ["Alice", "Bob", "Charlie"]

# New student enrolls
students.append("Diana")
print(students)            # ["Alice", "Bob", "Charlie", "Diana"]

# Student drops out
students.remove("Bob")
print(students)            # ["Alice", "Charlie", "Diana"]

# Sort alphabetically
students.sort()
print(students)            # ["Alice", "Charlie", "Diana"]

# Check who's at position 0
print(students[0])         # "Alice"

# How many students?
print(len(students))       # 3

# Make a backup
backup = students.copy()
students.clear()           # Clear the main list
print(students)            # []
print(backup)              # ["Alice", "Charlie", "Diana"] — safe!
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Your **candy bag** 🍬 — adding and eating candy!

\`\`\`python
candy_bag = ["lollipop", "gummy bear", "chocolate"]

# Get more candy!
candy_bag.append("jelly bean")
print(candy_bag)            # ['lollipop', 'gummy bear', 'chocolate', 'jelly bean']

# Eat the last candy
eaten = candy_bag.pop()
print(f"Yum! I ate: {eaten}")   # Yum! I ate: jelly bean
print(candy_bag)            # ['lollipop', 'gummy bear', 'chocolate']

# How many gummy bears?
print(candy_bag.count("gummy bear"))  # 1

# Reverse the order — eat from the other end!
candy_bag.reverse()
print(candy_bag)            # ['chocolate', 'gummy bear', 'lollipop']
\`\`\`

---

## 🔗 Related Concepts

- **Data type:** [[1.7_list]]
- **Mutable behavior:** [[2.2_Mutability_vs_Immutability]] — methods modify in place
- **Call syntax:** [[2.3_Method_Call_Syntax]]
- **Compare with:** [[2.11_Tuple_Methods]] (only 2 — tuples are immutable)
- **Overview:** [[2.4_Methods_Insight]]
- **Other methods:** [[2.5_String_Methods]] · [[2.10_Set_Methods]] · [[2.12_Dict_Methods]]

`;export{e as default};
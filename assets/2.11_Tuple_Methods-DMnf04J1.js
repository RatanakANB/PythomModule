var e=`# 📌 Tuple Methods — All 2 Methods

> 🏠 Parent: [[1.10_dictionary]] · [[2.01_What_Are_Methods]]
> 📂 Section: Methods
> 🔑 Key concept: Tuples are [[2.02_Mutability_vs_Immutability|immutable]] — they only have **2 methods** because you can't change them!

---

## 📖 Beginner-Friendly Explanation

Tuples have only **2 methods**: \`count()\` and \`index()\`. That's it!

Why so few? Because tuples are **immutable** — you can't add, remove, or change items. There's no need for \`append()\`, \`sort()\`, \`remove()\`, etc. The only things you CAN do are **search** and **count**.

This is a great example of [[2.02_Mutability_vs_Immutability]] in action — mutable types like [[1.7_list]] have 11 methods, while an immutable [[1.10_dictionary]] only needs 2.

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["📌 Tuple Methods — Only 2!"] --> B["Why so few?"]
    B --> C["Tuples are IMMUTABLE"]
    C --> D["❌ No add methods — can't add items"]
    C --> E["❌ No remove methods — can't remove items"]
    C --> F["❌ No ordering methods — can't rearrange"]
    C --> G["✅ Only search & count"]
    G --> H["index — find position"]
    G --> I["count — count occurrences"]
    A --> J["Compare: [[list]] has 11 methods"]
\`\`\`

---

# 🔍 Search Methods (2)

## \`index(item)\`

Returns the **index** (position) of the first occurrence. Raises \`ValueError\` if not found.

\`\`\`python
colors = ("red", "green", "blue", "green")

colors.index("green")     # 1 (first occurrence)
colors.index("blue")      # 2

# colors.index("yellow")  # ❌ ValueError! Not in tuple

# Search within a range:
colors.index("green", 2)  # 3 (search starting from index 2)
\`\`\`

\`\`\`text
tuple.index(item)             →  Where does it first appear? → index number
tuple.index(item, start)      →  Search from 'start' position
tuple.index(item, start, end) →  Search within range [start, end)
# ❌ Crashes if not found! Use 'in' operator to check first.
\`\`\`

---

## \`count(item)\`

Returns how many times the item appears in the tuple.

\`\`\`python
colors = ("red", "green", "blue", "green", "red", "red")

colors.count("red")       # 3
colors.count("green")     # 2
colors.count("blue")      # 1
colors.count("yellow")    # 0 (doesn't crash — just returns 0)
\`\`\`

\`\`\`text
tuple.count(item)  →  How many times does this item appear? → number
# Safe — returns 0 if not found (doesn't crash)
\`\`\`

---

# ⚙️ Syntax Breakdown

\`\`\`text
# Both methods are READ-ONLY — they don't change anything
my_tuple = (10, 20, 30, 20, 10)

# Find WHERE something is:
my_tuple.index(30)     →  2 (30 is at position 2)

# Count HOW MANY:
my_tuple.count(20)     →  2 (20 appears twice)

# Compare with list:
# list has: append, extend, insert, remove, pop, clear, sort, reverse, copy, index, count
# tuple has: index, count
# Why? Because everything else CHANGES the data — tuples can't change!
\`\`\`

---

# 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Working with exam scores stored as tuples (they shouldn't change after recording).

\`\`\`python
# Semester exam scores (recorded — cannot be changed!)
scores = (85, 92, 78, 92, 88, 95, 92)

# How many times did you score 92?
print(scores.count(92))    # 3

# Where was the first 92?
print(scores.index(92))    # 1 (second position, index 1)

# Is 100 in the scores?
if 100 in scores:
    print("Perfect score found!")
else:
    print("No perfect score")   # This prints

# Can we change a score?
# scores[0] = 90             # ❌ TypeError! Tuples are immutable!
# That's the point — recorded scores shouldn't be editable!
\`\`\`

**Step-by-step:**
1. \`scores.count(92)\` → Search through all items, count how many are \`92\` → \`3\`
2. \`scores.index(92)\` → Find the **first** \`92\` → it's at index \`1\`
3. \`100 in scores\` → [[3.5_Membership]] operator checks if \`100\` exists → \`False\`
4. You **can't** change scores — that's why we use a tuple, not a [[1.7_list]]

### 🧒 10-year-old beginner

**Scenario:** The days of the week NEVER change — they're a tuple! 📅

\`\`\`python
# Days of the week — these NEVER change!
days = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")

# Where is Friday?
friday_pos = days.index("Friday")
print(friday_pos)          # 4 (fifth day, index 4)

# How many Mondays?
print(days.count("Monday"))  # 1 (only one Monday per week!)

# Can we add a new day?
# days.append("Funday")    # ❌ Nope! Can't add to a tuple!
# There are EXACTLY 7 days — no more, no less!
\`\`\`

**Step-by-step:**
1. \`days.index("Friday")\` → "Where is Friday in the week?" → Position \`4\` (remember, counting starts at 0!)
2. \`days.count("Monday")\` → "How many Mondays?" → \`1\`
3. You can't add \`"Funday"\` — the days of the week are **fixed forever**! That's why a tuple is perfect.

---

## 🔗 Related Concepts

- **Data type:** [[1.10_dictionary]]
- **Compare with:** [[2.09_List_Methods]] — lists have 11 methods because they're mutable
- **Key concept:** [[2.02_Mutability_vs_Immutability]] — why tuples have so few methods
- **Call syntax:** [[2.03_Method_Call_Syntax]]
- **Shared methods:** \`index()\` and \`count()\` also exist in [[2.09_List_Methods]] and [[2.05_String_Methods]]
- **Overview:** [[2.04_Methods_Insight]]
`;export{e as default};
var e=`# 🎯 set — Set

> 🏠 Parent: [[1.1_Variables]] · [[00_Index]]
> 📂 Section: Variables & Data Types
> 🔧 Methods: [[2.10_Set_Methods]]

---

## 📖 Beginner-Friendly Explanation

A **set** is an **unordered collection of unique items**. No duplicates allowed! And the items have no fixed position — you can't access them by index.

### What is it?

A set is a **mutable, unordered** collection wrapped in curly braces \`{}\`. It automatically removes duplicates.

### Why does it exist?

Sometimes you only care about **what items exist**, not how many times or in what order. Sets are perfect for checking membership, removing duplicates, and math-like operations (union, intersection).

### Why does it matter in real life?

- Unique tags on a blog post
- List of countries you've visited (can't visit the same country twice in the list)
- Finding common friends between two people
- Removing duplicate entries from data

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["🎯 set — Set"] --> B["Stores unique items only"]
    B --> C["No duplicates allowed"]
    B --> D["Order is NOT guaranteed"]
    A --> E["Properties"]
    E --> F["Mutable — CAN add/remove items"]
    E --> G["Unordered — NO index positions"]
    E --> H["No duplicates — auto-removed"]
    E --> I["Uses curly braces: { }"]
    A --> J["🔧 Has 17 Methods"]
    J --> K["[[Set Methods]]"]
    A --> L["Set Logic"]
    L --> M["Union, Intersection, Difference"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
colors = {"red", "blue", "green"}         →  Create a set with 3 items
numbers = {1, 2, 3, 2, 1}                →  Duplicates auto-removed → {1, 2, 3}
empty_set = set()                         →  Create empty set (NOT {} — that's a dict!)

# Cannot access by index
colors[0]                →  ❌ ERROR! Sets have no index

# Check membership (very fast!)
"red" in colors          →  True
len(colors)              →  3

# Adding and removing
colors.add("yellow")     →  {"red", "blue", "green", "yellow"}
colors.discard("red")    →  {"blue", "green", "yellow"}
\`\`\`

### Duplicate removal visualization:

\`\`\`text
{1, 2, 3, 2, 1, 3, 3}  →  Python keeps only: {1, 2, 3}
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** You and your friend are comparing which social media apps you use.

\`\`\`python
# Your apps vs friend's apps
my_apps = {"Instagram", "TikTok", "YouTube", "Spotify"}
friend_apps = {"TikTok", "YouTube", "Twitter", "Discord"}

# Apps you BOTH use (intersection)
common = my_apps.intersection(friend_apps)
print(common)             # {"TikTok", "YouTube"}

# ALL apps between both of you (union)
all_apps = my_apps.union(friend_apps)
print(all_apps)           # {"Instagram", "TikTok", "YouTube", "Spotify", "Twitter", "Discord"}

# Apps only YOU use (difference)
only_mine = my_apps.difference(friend_apps)
print(only_mine)          # {"Instagram", "Spotify"}
\`\`\`

**Step-by-step:**
1. Each person's apps are stored in a \`set\` — no duplicates possible
2. \`.intersection()\` → [[2.10_Set_Methods|Set method]] that finds items in **both** sets
3. \`.union()\` → Combines **all** items from both sets
4. \`.difference()\` → Finds items in the first set but **not** in the second

### 🧒 10-year-old beginner

**Scenario:** You're collecting **unique Pokémon cards** — no copies allowed! 🃏

\`\`\`python
# Your card collection (no doubles!)
my_cards = {"Pikachu", "Charmander", "Bulbasaur"}

# Try to add a card you already have
my_cards.add("Pikachu")
print(my_cards)           # {"Pikachu", "Charmander", "Bulbasaur"} — no change!

# Add a NEW card
my_cards.add("Squirtle")
print(my_cards)           # Now has 4 unique cards!

# How many unique cards?
print(len(my_cards))      # 4
\`\`\`

**Step-by-step:**
1. \`my_cards = {"Pikachu", "Charmander", "Bulbasaur"}\` → 3 unique cards
2. \`.add("Pikachu")\` → You already have Pikachu! Set ignores the duplicate
3. \`.add("Squirtle")\` → New card! Set adds it
4. Sets are like a rule: **"No copies allowed!"**

---

## 🔗 Related Concepts

- **Parent:** [[1.1_Variables]]
- **Methods:** [[2.10_Set_Methods]] (17 methods — add, remove, union, intersection, etc.)
- **Similar types:** [[1.7_list]] (ordered, allows duplicates), [[1.10_dictionary]] (ordered, immutable), [[1.9_tuple]] (also uses \`{}\` but with key-value pairs)
- **Operators:** [[3.5_Membership]] (\`in\` is extremely fast for sets), [[3.4_Comparison]] (subset/superset checks)
- **Key concept:** [[2.02_Mutability_vs_Immutability]] — sets are **mutable** (can add/remove items, but items themselves must be immutable)
`;export{e as default};
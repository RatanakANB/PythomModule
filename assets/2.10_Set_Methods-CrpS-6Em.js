var e=`# 🎯 Set Methods — All 17 Methods

> 🏠 Parent: [[1.8_set]] · [[2.01_What_Are_Methods]]
> 📂 Section: Methods
> 🔑 Key concept: Sets are [[2.02_Mutability_vs_Immutability|mutable]] — many methods **modify the set in place**

---

## 📖 Beginner-Friendly Explanation

Sets have **17 methods** — for adding items, removing items, and performing **set logic** (union, intersection, difference). Set logic is like math for collections — finding what's shared, what's different, and what's combined.

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
mindmap
  root(("🎯 Set Methods — 17"))
    ➕ Addition (2)
      add
      update
    ➖ Removal (4)
      remove
      discard
      pop
      clear
    🔗 Set Logic (3)
      union
      intersection
      difference
      symmetric_difference
    🔗 Set Logic In-Place (3)
      intersection_update
      difference_update
      symmetric_difference_update
    ✅ Check (3)
      isdisjoint
      issubset
      issuperset
    🔧 Utility (1)
      copy
\`\`\`

---

# ➕ Addition Methods (2)

## \`add(item)\`

Add **one item** to the set. If the item already exists, nothing happens (no duplicates).

\`\`\`python
colors = {"red", "blue"}
colors.add("green")
print(colors)            # {"red", "blue", "green"}

colors.add("red")        # Already exists — no change
print(colors)            # {"red", "blue", "green"}
\`\`\`

\`\`\`text
set.add(item)  →  Add ONE item → ignored if already exists → returns None
\`\`\`

---

## \`update(iterable)\`

Add **multiple items** from another iterable ([[1.7_list]], [[1.10_dictionary]], another set, etc.).

\`\`\`python
colors = {"red", "blue"}
colors.update(["green", "yellow", "red"])
print(colors)            # {"red", "blue", "green", "yellow"}
# "red" already existed — not duplicated

# Can update from multiple sources:
colors.update({"purple"}, ["orange"])
\`\`\`

\`\`\`text
set.update(iterable)  →  Add all items from iterable → returns None
# Like extend() for lists, but ignores duplicates
\`\`\`

---

# ➖ Removal Methods (4)

## \`remove(item)\`

Remove the item. **Raises \`KeyError\`** if not found.

\`\`\`python
colors = {"red", "blue", "green"}
colors.remove("blue")
print(colors)            # {"red", "green"}

# colors.remove("yellow")  # ❌ KeyError! Not in set
\`\`\`

\`\`\`text
set.remove(item)  →  Remove item → ❌ CRASHES if not found → returns None
\`\`\`

---

## \`discard(item)\`

Remove the item. **Does NOT raise error** if not found (safe removal).

\`\`\`python
colors = {"red", "blue", "green"}
colors.discard("blue")
print(colors)            # {"red", "green"}

colors.discard("yellow")  # ✅ No error — just does nothing
print(colors)            # {"red", "green"}
\`\`\`

\`\`\`text
set.discard(item)  →  Remove if exists, ignore if not → SAFE → returns None
# Prefer discard() over remove() when you're not sure the item exists
\`\`\`

---

## \`pop()\`

Remove and return an **arbitrary** item (you can't predict which one — sets are unordered!).

\`\`\`python
colors = {"red", "blue", "green"}
removed = colors.pop()
print(removed)           # Could be any item — sets have no order!
print(colors)            # The remaining 2 items

# set.pop() on empty set → ❌ KeyError!
\`\`\`

\`\`\`text
set.pop()  →  Remove and RETURN a random item → ❌ crashes if empty
# Unlike list.pop(), you CAN'T choose which item (no index!)
\`\`\`

---

## \`clear()\`

Remove **all items**.

\`\`\`python
colors = {"red", "blue", "green"}
colors.clear()
print(colors)            # set()
\`\`\`

\`\`\`text
set.clear()  →  Delete everything → empty set → returns None
\`\`\`

---

# 🔗 Set Logic Methods (4)

> Math-like operations on collections. These return **new sets** (don't modify originals).

## \`union(other)\`

Return a new set with items from **both** sets. Operator: \`|\`

\`\`\`python
a = {1, 2, 3}
b = {3, 4, 5}
print(a.union(b))       # {1, 2, 3, 4, 5}
print(a | b)             # {1, 2, 3, 4, 5} — same thing!
\`\`\`

\`\`\`mermaid
flowchart LR
    A["A = {1, 2, 3}"] --> C["A ∪ B = {1, 2, 3, 4, 5}"]
    B["B = {3, 4, 5}"] --> C
\`\`\`

\`\`\`text
a.union(b)  →  Everything from A + everything from B → new set
\`\`\`

---

## \`intersection(other)\`

Return a new set with items in **both** sets. Operator: \`&\`

\`\`\`python
a = {1, 2, 3}
b = {3, 4, 5}
print(a.intersection(b))  # {3}
print(a & b)               # {3} — same thing!
\`\`\`

\`\`\`mermaid
flowchart LR
    A["A = {1, 2, 3}"] --> C["A ∩ B = {3}"]
    B["B = {3, 4, 5}"] --> C
\`\`\`

\`\`\`text
a.intersection(b)  →  Only items that exist in BOTH → new set
\`\`\`

---

## \`difference(other)\`

Return items in the **first set but NOT** in the second. Operator: \`-\`

\`\`\`python
a = {1, 2, 3}
b = {3, 4, 5}
print(a.difference(b))    # {1, 2}
print(a - b)               # {1, 2} — same thing!
print(b - a)               # {4, 5} — order matters!
\`\`\`

\`\`\`text
a.difference(b)  →  Items in A that are NOT in B → new set
\`\`\`

---

## \`symmetric_difference(other)\`

Return items in **either set but NOT in both**. Operator: \`^\`

\`\`\`python
a = {1, 2, 3}
b = {3, 4, 5}
print(a.symmetric_difference(b))  # {1, 2, 4, 5}
print(a ^ b)                       # {1, 2, 4, 5}
\`\`\`

\`\`\`text
a.symmetric_difference(b)  →  Items in A or B, but NOT both → new set
# Like union minus intersection
\`\`\`

---

# 🔗 Set Logic In-Place Methods (3)

> Same as above, but **modify the original set** instead of returning a new one.

## \`intersection_update(other)\`

Keep only items found in **both** sets.

\`\`\`python
a = {1, 2, 3}
a.intersection_update({2, 3, 4})
print(a)                 # {2, 3}
\`\`\`

\`\`\`text
a.intersection_update(b)  →  a becomes a ∩ b → returns None
\`\`\`

---

## \`difference_update(other)\`

Remove items that are in the **other set**.

\`\`\`python
a = {1, 2, 3}
a.difference_update({2, 3, 4})
print(a)                 # {1}
\`\`\`

\`\`\`text
a.difference_update(b)  →  Remove from a anything that's in b → returns None
\`\`\`

---

## \`symmetric_difference_update(other)\`

Keep only items in **either set but not both**.

\`\`\`python
a = {1, 2, 3}
a.symmetric_difference_update({2, 3, 4})
print(a)                 # {1, 4}
\`\`\`

\`\`\`text
a.symmetric_difference_update(b)  →  a becomes a △ b → returns None
\`\`\`

---

# ✅ Check Methods (3)

> Return [[1.5_bool]] — check relationships between sets.

## \`isdisjoint(other)\`

Returns \`True\` if the sets have **no items in common**.

\`\`\`python
a = {1, 2, 3}
b = {4, 5, 6}
c = {3, 4, 5}
a.isdisjoint(b)          # True — no overlap
a.isdisjoint(c)          # False — they share 3
\`\`\`

\`\`\`text
a.isdisjoint(b)  →  Do they share ZERO items? → True/False
\`\`\`

---

## \`issubset(other)\`

Returns \`True\` if **all** items in the set are also in the other set. Operator: \`<=\`

\`\`\`python
a = {1, 2}
b = {1, 2, 3, 4}
a.issubset(b)            # True — all of a is inside b
b.issubset(a)            # False — b has items not in a
\`\`\`

\`\`\`text
a.issubset(b)  →  Is A completely inside B? → True/False
\`\`\`

---

## \`issuperset(other)\`

Returns \`True\` if the set **contains all** items from the other set. Operator: \`>=\`

\`\`\`python
a = {1, 2, 3, 4}
b = {1, 2}
a.issuperset(b)          # True — a contains everything in b
b.issuperset(a)          # False
\`\`\`

\`\`\`text
a.issuperset(b)  →  Does A contain ALL of B? → True/False
\`\`\`

---

# 🔧 Utility Method (1)

## \`copy()\`

Create a **shallow copy** of the set.

\`\`\`python
original = {1, 2, 3}
duplicate = original.copy()
duplicate.add(4)
print(original)          # {1, 2, 3} — unchanged!
print(duplicate)         # {1, 2, 3, 4}
\`\`\`

\`\`\`text
set.copy()  →  New set with same items
\`\`\`

---

# 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Comparing music playlists with friends.

\`\`\`python
my_songs = {"Shape of You", "Blinding Lights", "Levitating", "Bad Guy"}
friend_songs = {"Blinding Lights", "Watermelon Sugar", "Bad Guy", "Peaches"}

# Songs we both like
common = my_songs.intersection(friend_songs)
print(common)             # {"Blinding Lights", "Bad Guy"}

# Make a party playlist (all unique songs)
party = my_songs.union(friend_songs)
print(len(party))         # 6 unique songs

# Songs only I know
only_mine = my_songs.difference(friend_songs)
print(only_mine)          # {"Shape of You", "Levitating"}

# Are our playlists completely different?
print(my_songs.isdisjoint(friend_songs))  # False — we share some
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Comparing **crayon colors** with your friend! 🖍️

\`\`\`python
my_crayons = {"red", "blue", "yellow", "green"}
friend_crayons = {"blue", "purple", "yellow", "orange"}

# Colors we BOTH have
shared = my_crayons.intersection(friend_crayons)
print(shared)             # {"blue", "yellow"}

# ALL colors if we combine
all_colors = my_crayons.union(friend_crayons)
print(all_colors)         # 6 unique colors!

# Colors only I have
only_mine = my_crayons - friend_crayons
print(only_mine)          # {"red", "green"}
\`\`\`

---

## 🔗 Related Concepts

- **Data type:** [[1.8_set]]
- **Mutable behavior:** [[2.02_Mutability_vs_Immutability]]
- **Call syntax:** [[2.03_Method_Call_Syntax]]
- **Compare with:** [[2.09_List_Methods]] (ordered, allows duplicates)
- **Overview:** [[2.04_Methods_Insight]]
- **Operators:** [[3.5_Membership]] (\`in\` is very fast for sets)
`;export{e as default};
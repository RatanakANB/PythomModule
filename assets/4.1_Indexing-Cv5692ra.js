var e=`# 📍 Indexing

> 🏠 Parent: [[00_Index]] · [[4.0_Indexing_Slicing_Index]]
> 📂 Section: Sequence Operations

---

## 📖 Beginner Explanation

**Indexing** is the way you ask Python for a single item from a collection. Every item in a sequence has a "home address" (a number) called its **index**.

### Why do we need it?
Imagine look at a shelf of books. If you want the "3rd book from the left," you are using indexing! In programming, we need to be precise so we can grab exactly the data we need without looking at everything else.

### The Big Rule: Zero-Based Counting
Computers don't start counting at 1. They start at **0**.
- The 1st item is index \`0\`
- The 2nd item is index \`1\`
- The 3rd item is index \`2\`

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
graph TD
    A[Sequence: P-Y-T-H-O-N] --> B[Forward Indexing]
    A --> C[Backward Indexing]
    
    B --> B0[0: P]
    B --> B1[1: Y]
    B --> B2[2: T]
    B --> B3[3: H]
    B --> B4[4: O]
    B --> B5[5: N]
    
    C --> C1[-1: N]
    C --> C2[-2: O]
    C --> C3[-3: H]
    C --> C4[-4: T]
    C --> C5[-5: Y]
    C --> C6[-6: P]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
┌─────────── Variable Name
│      ┌──── Open Square Bracket
│      │ ┌── The Index Number (Address)
│      │ │ ┌─ Close Square Bracket
▼      ▼ ▼ ▼
name = "Python"
first_letter = name[0]  │ └─ Result: "P"
last_letter  = name[-1] │ └─ Result: "n" (negative counts from end)
\`\`\`

---

## 🔬 Execution Trace

**Code:** \`colors = ["Red", "Green", "Blue"]\` followed by \`item = colors[1]\`

1. **Step 1**: Python creates a list \`colors\`.
   - \`[0]: "Red"\`
   - \`[1]: "Green"\`
   - \`[2]: "Blue"\`
2. **Step 2**: Python sees \`colors[1]\`.
3. **Step 3**: It looks at address \`1\`.
4. **Step 4**: It finds \`"Green"\`.
5. **Step 5**: The variable \`item\` now holds \`"Green"\`.

---

## 🌍 Dual Persona

### 👧 18-year-old Scenario: Social Media IDs
In a database of users, each user has a position in a list. If you have a list of \`friends = ["Alice", "Bob", "Charlie"]\`, asking for \`friends[0]\` is how the app retrieves the first friend's profile.

### 🧒 10-year-old Analogy: The Train Car 🚂
Imagine a train with 5 cars.
- The **engine** is at car number **0**.
- The **caboose** is the "last one," or car number **-1**.
- To find the treasure in the middle car, you check car number **2**!

---

## 🧪 Sample Code

\`\`\`python
# --- Setup ---
word = "Coding"
fruits = ["Apple", "Banana", "Cherry"]

# --- Action ---
char_1 = word[0]     # Grab first letter
char_last = word[-1] # Grab last letter
fruit_2 = fruits[1]  # Grab second fruit

# --- Result ---
print(char_1)    # Output: C
print(char_last) # Output: g
print(fruit_2)   # Output: Banana
\`\`\`

---

## 🔗 Related Concepts

- [[1.2_str]] — Text is indexed by character
- [[1.7_list]] — Lists are indexed by item
- [[4.2_Slicing]] — Grabbing more than one item at once
- [[3.4_Comparison]] — Used often with indexing (e.g. \`if list[0] == "Apple"\`)
`;export{e as default};
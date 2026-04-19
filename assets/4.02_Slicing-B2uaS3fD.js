var e=`# 🍕 Slicing

> 🏠 Parent: [[00_Index]] · [[4.00_Indexing_Slicing_Index]]
> 📂 Section: Sequence Operations

---

## 📖 Beginner Explanation

**Slicing** is like using a pair of scissors to cut out a piece of a string or a list. Instead of getting just one item (indexing), you get a new collection containing a **range** of items.

### Why do we need it?
Sometimes you don't want the whole pizza — you just want a slice! 
- Getting a username from an email (\`user@email.com\` → \`user\`)
- Getting the first 10 items from a search result
- Reversing a list quickly

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
graph LR
    A["'PYTHON'"] -- "[0:2]" --> B["'PY'"]
    A -- "[2:4]" --> C["'TH'"]
    A -- "[4:]" --> D["'ON'"]
    A -- "[:3]" --> E["'PYT'"]
    A -- "[::-1]" --> F["'NOHTYP'"]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
┌────────────────── Variable Name
│       ┌────────── Start Index (Inclusive - starts here)
│       │   ┌────── Stop Index (Exclusive - stops BEFORE here)
│       │   │   ┌── Step (Jump size - optional)
▼       ▼   ▼   ▼
name[ start : stop : step ]

name[0:3]   │ └─ Get items 0, 1, 2
name[2:]    │ └─ Get items from 2 to the END
name[:3]    │ └─ Get items from the START to 2
name[::2]   │ └─ Get every 2nd item (0, 2, 4...)
\`\`\`

---

## 🔬 Execution Trace

**Code:** \`nums = [10, 20, 30, 40, 50]\` followed by \`part = nums[1:4]\`

1. **Step 1**: Python finds index \`1\`. Value: \`20\`.
2. **Step 2**: Python determines the stop is \`4\`. It will take every index up to (but not including) \`4\`.
3. **Step 3**: It collects indices \`1\`, \`2\`, and \`3\`.
4. **Step 4**: Values found: \`20\`, \`30\`, \`40\`.
5. **Step 5**: Python creates a NEW list: \`[20, 30, 40]\`.

---

## 🌍 Dual Persona

### 👧 18-year-old Scenario: Extracting File Extensions
When handling file uploads, you might have a filename like \`photo.jpg\`. You can use slicing to get the last 3 characters to check the file type.
\`ext = filename[-3:]\`

### 🧒 10-year-old Analogy: The Chocolate Bar 🍫
Imagine a chocolate bar with 10 squares. You want to give your friend a "slice" of the bar from the **3rd square to the 5th square**. You break it off and hand them that specific piece!

---

## 🧪 Sample Code

\`\`\`python
# --- Setup ---
alphabet = "ABCDEFGHIJ"
scores = [90, 85, 77, 60, 45, 30]

# --- Action ---
abc = alphabet[0:3]      # First three letters
rest = alphabet[3:]      # Everything after index 2
top_3 = scores[:3]       # Top three scores
reversed_abc = alphabet[::-1] # Flip the whole word!

# --- Result ---
print(abc)          # Output: ABC
print(rest)         # Output: DEFGHIJ
print(top_3)        # Output: [90, 85, 77]
print(reversed_abc) # Output: JIHGFEDCBA
\`\`\`

---

## 🔗 Related Concepts

- [[4.01_Indexing]] — Must understand single indices first
- [[1.02_String]] — Slicing text
- [[1.07_list]] — Slicing lists
- [[1.10_dictionary]] — Slicing tuples
`;export{e as default};
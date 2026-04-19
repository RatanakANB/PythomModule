var e=`# 🚦 If, Elif, Else

> 🏠 Parent: [[00_Index]] · [[5.00_Control_Flow_Index]]
> 📂 Section: Logic & Flow

---

## 📖 Beginner Explanation

**If statements** are the brain of your program. They allow your code to ask questions and do different things depending on the answer.

### The Question
Every \`if\` statement checks a condition. If the condition is **True**, the code inside runs. If it's **False**, Python skips it.

- \`if\`: The first question ("Is it raining?")
- \`elif\`: A follow-up question if the first was False ("Is it snowing?")
- \`else\`: What to do if *none* of the questions were True ("Go outside!")

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
graph TD
    A[Start] --> B{Is it raining?}
    B -- Yes --> C[Take Umbrella]
    B -- No --> D{Is it cloudy?}
    D -- Yes --> E[Take Jacket]
    D -- No --> F[Wear Sunglasses]
    C --> G[End]
    E --> G
    F --> G
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
┌── The keyword
│  ┌────────────── The Condition (True/False)
│  │         ┌──── The COLON (Critical!)
▼  ▼         ▼
if weather == "Rain":
    print("Umbrella!") │ └─ INDENTED code (4 spaces)
    
elif weather == "Snow":│ └─ "Else If" (Alternative)
    print("Boots!")
    
else:                  │ └─ The "Safety Net" (Catch-all)
    print("Sunny day!")
\`\`\`

---

## 🔬 Execution Trace

**Code:** \`temp = 25\` followed by \`if temp > 30: print("Hot") else: print("Nice")\`

1. **Step 1**: Python stores \`25\` in \`temp\`.
2. **Step 2**: Python reaches the \`if\`.
3. **Step 3**: It checks \`temp > 30\` (Is \`25 > 30\`?).
4. **Step 4**: The answer is **False**.
5. **Step 5**: Python **skips** the \`print("Hot")\` line.
6. **Step 6**: Python goes to the \`else\`.
7. **Step 7**: Python runs \`print("Nice")\`.

---

## 🌍 Dual Persona

### 👧 18-year-old Scenario: Creating a Login Gate
If you're building a website, you use \`if\` to check if a password is correct:
\`if entered_pass == saved_pass: print("Access Granted") else: print("Access Denied")\`

### 🧒 10-year-old Analogy: The Magic Guard 🧙‍♂️
Imagine a magic guard standing in front of two doors.
- The guard asks: "Do you have the golden key?"
- **If** you do, he opens Door #1.
- **Else**, he keeps the doors shut and sends you back to the forest!

---

## 🧪 Sample Code

\`\`\`python
# --- Setup ---
age = 15
has_ticket = True

# --- Action ---
if age >= 18:
    print("You can watch the R-rated movie.")
elif age < 18 and has_ticket:
    print("You can watch the PG-rated movie.")
else:
    print("You need a ticket!")

# --- Result ---
# Output: You can watch the PG-rated movie.
\`\`\`

---

## 🔗 Related Concepts

- [[3.04_Comparison]] — Symbols like \`>\` and \`==\`
- [[3.03_Logical]] — Using \`and\`, \`or\`, \`not\` in conditions
- [[1.05_Bool]] — The result of any condition
- [[6.01_Functions_Basics]] — \`if\` statements are often used inside functions
`;export{e as default};
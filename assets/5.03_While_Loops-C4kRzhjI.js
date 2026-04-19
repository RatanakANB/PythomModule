var e=`# 🔄 While Loops

> 🏠 Parent: [[00_Index]] · [[5.00_Control_Flow_Index]]
> 📂 Section: Logic & Flow

---

## 📖 Beginner Explanation

A **While Loop** runs the same block of code over and over again *as long as* a Condition remains True. The moment that condition becomes False, the loop stops.

### How is it different from a For Loop?
- A [[5.02_For_Loops|For Loop]] knows exactly how many times it will run (e.g., "for every item in this 5-item list").
- A **While Loop** operates on mystery! It runs until something stops it. It could run 0 times, 5 times, or **infinitely** (forever) if the condition never becomes False!

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
graph TD
    A[Start While] --> B{Is Condition True?}
    B -- Yes --> C[Run indented code]
    C --> B
    B -- No --> D[Exit Loop]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
┌── Keyword
│     ┌────── Condition (must evaluate to True or False)
│     │          ┌── The COLON
▼     ▼          ▼
while hp > 0:
    print("Fight!") │ └─ Indented action
    hp = hp - 1     │ └─ CRITICAL: Code that eventually changes the condition!
\`\`\`

---

## 🔬 Execution Trace

**Code:** \`count = 3\` followed by \`while count > 0: print(count); count = count - 1\`

1. **Step 1**: Python sets \`count = 3\`.
2. **Step 2**: Python reaches the \`while\`. Is \`3 > 0\`? **True**.
3. **Step 3**: Python runs \`print(3)\`.
4. **Step 4**: Python runs \`count = 3 - 1\`. \`count\` is now \`2\`.
5. **Step 5**: Python hits the bottom of the loop and **turns around**.
6. **Step 6**: Is \`2 > 0\`? **True**. Prints \`2\`, minus 1. \`count\` is now \`1\`.
7. **Step 7**: Loops again. Is \`1 > 0\`? **True**. Prints \`1\`, minus 1. \`count\` is now \`0\`.
8. **Step 8**: Loops again. Is \`0 > 0\`? **FALSE**. Python bypasses the indented block and moves on!

---

## 🌍 Dual Persona

### 👧 18-year-old Scenario: Loading Screen
When a user launches your app, you don't know if they will take 2 seconds or 20 seconds to log in.
\`while user_is_logging_in == True: spin_loading_wheel()\`
The wheel spins until the login status changes!

### 🧒 10-year-old Analogy: The Annoying Sibling 👦
Imagine a road trip. The annoying sibling asks, "Are we there yet?"
- **While** the answer is "No":
  - Wait 5 minutes.
  - Ask "Are we there yet?" again.

The loop ONLY stops when dad finally says "Yes!"

---

## 🧪 Sample Code

\`\`\`python
# --- Setup ---
energy = 3

# --- Action ---
while energy > 0:
    print(f"Running! Energy left: {energy}")
    # We MUST reduce the energy, or this loop runs infinitely!
    energy = energy - 1  # (Or energy -= 1)

# --- Result ---
print("Need to sleep.")

# Output:
# Running! Energy left: 3
# Running! Energy left: 2
# Running! Energy left: 1
# Need to sleep.
\`\`\`

---

## 🔗 Related Concepts

- [[3.04_Comparison]] — Used to build the \`while\` condition (\`>\`, \`<\`, \`==\`)
- [[3.02_Assignment]] — Used inside the loop to update variables (\`+=\`, \`-=\`)
- [[1.05_Bool]] — The loop condition is always checked as a boolean (True/False)
- [[5.01_If_Else]] — Often put inside while loops to make checks while it runs
`;export{e as default};
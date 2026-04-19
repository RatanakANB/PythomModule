var e=`# 📦 Functions Basics

> 🏠 Parent: [[00_Index]] · [[6.0_Functions_Index]]
> 📂 Section: Reusable Code

---

## 📖 Beginner Explanation

A **function** is a block of code that only runs when it is "called." You give the block a name, and then you can trigger all that code with a single line.

### Three Parts of a Function:
1. **Definition (\`def\`)**: Building the machine.
2. **Parameters**: The "ingredients" you give the machine.
3. **Return**: The "result" the machine gives back to you.

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
graph LR
    A[Input / Parameters] --> B["⚙️ Function (The Machine)"]
    B --> C[Output / Return Value]
    
    subgraph "Internal Logic"
    B1[Step 1] --> B2[Step 2]
    end
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
┌── Keyword (Define)
│   ┌────── Name of the function
│   │        ┌──── Parameters (Ingredients)
│   │        │     ┌── The COLON
▼   ▼        ▼     ▼
def greeting(name):
    print("Hi " + name) │ └─ INDENTED logic
    return "Done!"       │ └─ Giving back a result
    
# Calling the function:
greeting("Alice")        │ └─ Running the code
\`\`\`

---

## 🔬 Execution Trace

**Code:** \`def add(a, b): return a + b\` followed by \`result = add(5, 10)\`

1. **Step 1**: Python reads the \`def\` and remembers: "Okay, I have a machine called \`add\`."
2. **Step 2**: Python reaches \`add(5, 10)\`.
3. **Step 3**: Python goes back to the machine. It sets \`a = 5\` and \`b = 10\`.
4. **Step 4**: It runs the logic: \`5 + 10\`.
5. **Step 5**: It finds the result \`15\`.
6. **Step 6**: The \`return\` keyword sends \`15\` back to where the function was called.
7. **Step 7**: \`result\` now stores the number \`15\`.

---

## 🌍 Dual Persona

### 👧 18-year-old Scenario: Calculating Sales Tax
Instead of writing the tax math 100 times in your online store, you write one function:
\`tax = calc_tax(price)\`. If the tax rate changes, you only fix it in **one place**!

### 🧒 10-year-old Analogy: The Juice Maker 🥤
A function is like a **Juicer**.
- You put in an **Apple** (the parameter).
- The juicer chops and squeezes (the internal logic).
- It pours out **Apple Juice** (the return value).
- You can put in an Orange next time, and it still works!

---

## 🧪 Sample Code

\`\`\`python
# --- Setup ---
def make_pizza(topping):
    """A function that returns a pizza description"""
    message = "A delicious " + topping + " pizza!"
    return message

# --- Action ---
order1 = make_pizza("Cheese")
order2 = make_pizza("Pepperoni")

# --- Result ---
print(order1) # Output: A delicious Cheese pizza!
print(order2) # Output: A delicious Pepperoni pizza!
\`\`\`

---

## 🔗 Related Concepts

- [[1.1_Variables]] — Storing function results
- [[2.01_What_Are_Methods]] — Methods are essentially functions that belong to objects
- [[5.1_If_Else]] — Often used inside functions to make different results
- [[00_Index]] — Functions are the next big step in Python mastery!
`;export{e as default};
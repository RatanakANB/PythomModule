var e=`# ↩️ Return Values — Functions

> 🏠 Parent: [[00_Index]] · [[6.00_Functions_Index]]
> 📂 Section: Reusable Code

---

## 📖 Beginner-Friendly Explanation

When a function finishes its work, it can **send an answer back** to whoever called it. In Python, we use the \`return\` keyword to do this.

Think of calling a function like **ordering food at a restaurant counter**:
- If the cook just yells *"Burger is ready!"* on the screen, but doesn't hand you anything, your hands are empty (\`print()\`).
- When the cook **hands you the plate** to carry back to your table and eat, that is a **\`return\`**!

### Why does \`return\` matter?
Without \`return\`, the result stays trapped inside the function. With \`return\`, you can save the result into a variable, use it in math, or pass it into another function!

---

## 🧠 Mermaid Diagram: \`print()\` vs \`return\`

\`\`\`mermaid
flowchart TD
    subgraph S1["Function with print() — Hands are Empty!"]
        A1["def calc_print(a, b):<br>print(a + b)"] --> B1["Displays 15 on screen"]
        B1 --> C1["Returns [[1.06_NoneType|None]] to variable!"]
        C1 --> D1["❌ x * 2 throws Error!"]
    end

    subgraph S2["Function with return — Value Saved!"]
        A2["def calc_return(a, b):<br>return a + b"] --> B2["Sends 15 back"]
        B2 --> C2["📦 result = 15 stored in variable!"]
        C2 --> D2["✅ result * 2 = 30 works perfectly!"]
    end
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`python
# 1. Defining a function with a return value
def calculate_area(width, height):
    area = width * height
    return area  # Sends the number back

# 2. Saving the returned value into a variable
room_size = calculate_area(5, 4)
print(f"Room area: {room_size} sq meters")  # Outputs: Room area: 20 sq meters

# 3. Using the returned value immediately in an expression
double_room = calculate_area(5, 4) * 2
print(double_room)  # Outputs: 40
\`\`\`

### 🛑 \`return\` Exits the Function Immediately!
As soon as Python hits a \`return\` statement, it leaves the function right away. Any code written after it inside the function will **never run**:

\`\`\`python
def check_temperature(temp):
    if temp > 30:
        return "Hot! Stay hydrated."
    return "Nice weather!"
    
    print("This line will NEVER run!")  # Unreachable code!
\`\`\`

---

## ⚠️ The #1 Beginner Trap: Confusing \`print()\` and \`return\`

\`\`\`python
# ❌ TRAP: Using print() when you meant return
def add_bad(a, b):
    print(a + b)  # This shows 5 on the screen, but gives nothing back!

total = add_bad(2, 3)
print(f"Total is: {total}")  # Outputs: "Total is: None"
# total + 10  --> 💥 TypeError: unsupported operand type for +: 'NoneType' and 'int'

# ✅ CORRECT: Use return to pass data back
def add_good(a, b):
    return a + b  # Gives the real number back

total = add_good(2, 3)
print(f"Total is: {total}")  # Outputs: "Total is: 5"
print(total + 10)            # Outputs: 15 (Works!)
\`\`\`

---

## 🎁 Returning Multiple Values (Tuples)

Python lets you return more than one piece of data at once separated by commas! Python automatically packs them into a [[1.09_Tuple|tuple]]:

\`\`\`python
def get_user_stats():
    name = "Alex"
    level = 10
    score = 9500
    return name, level, score  # Returns a tuple!

# Unpack each item into its own variable:
user_name, user_level, user_score = get_user_stats()
print(f"{user_name} is Level {user_level} with {user_score} points!")
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old Beginner
**Scenario:** Shopping Cart with Discount Calculator.
\`\`\`python
def apply_student_discount(price, discount_percent):
    savings = price * (discount_percent / 100)
    final_price = price - savings
    return final_price  # We need the real number to charge the bank card!

book_price = 50.0
discounted = apply_student_discount(book_price, 20)  # 20% off

# Because it was returned, we can add sales tax:
total_with_tax = discounted * 1.05
print(f"Total to charge credit card: \${total_with_tax:.2f}")  # $42.00
\`\`\`

### 🧒 10-year-old Beginner
**Scenario:** The Magic Candy Machine 🍬.
\`\`\`python
def magic_vending_machine(coins):
    if coins >= 2:
        return "🍫 Big Chocolate Bar"
    else:
        return "🍬 Tiny Gummy Bear"

# The machine hands the candy to your backpack!
backpack = magic_vending_machine(3)
print("You put in your backpack: " + backpack)
\`\`\`

---

## 🔗 Related Concepts

- [[6.01_Functions_Basics]] — Building functions with \`def\` and parameters
- [[1.01_Variables]] — Storing returned values inside variables
- [[1.06_NoneType]] — What a function returns if you forget to write \`return\`
- [[1.09_Tuple]] — How Python packages multiple return values
- [[5.01_If_Else]] — Using conditions inside functions with early returns
`;export{e as default};
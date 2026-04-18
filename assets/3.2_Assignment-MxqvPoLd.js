var e=`# 📥 Assignment Operators

> 🏠 Parent: [[00_Index]]
> 📂 Section: Operators

---

## 📖 Beginner-Friendly Explanation

**Assignment operators** store values in [[1.1_Variables|variables]]. The basic \`=\` assigns a value. The shorthand operators like \`+=\` combine an [[3.1_Arithmetic|arithmetic]] operation with assignment in one step.

### What is it?

Assignment operators put data into variables. The \`=\` sign in Python means "store this value," not "equals" like in math.

### Why does it exist?

You need a way to save data and update it. Assignment operators make it quick to modify variables without rewriting them.

### Why does it matter in real life?

- Updating a score in a game: \`score += 10\`
- Counting items: \`count += 1\`
- Applying discounts: \`price *= 0.9\`

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
flowchart LR
    A["📥 Assignment Operators"] --> B["= Basic assignment"]
    A --> C["Compound Assignment"]
    C --> D["+= Add and assign"]
    C --> E["-= Subtract and assign"]
    C --> F["*= Multiply and assign"]
    C --> G["/= Divide and assign"]
    C --> H["//= Floor divide and assign"]
    C --> I["%= Modulus and assign"]
    C --> J["**= Power and assign"]
\`\`\`

---

## ⚙️ Syntax Breakdown

| Operator | Name                  | Example   | Equivalent To |
| -------- | --------------------- | --------- | ------------- |
| \`=\`      | Assign                | \`x = 5\`   | —             |
| \`+=\`     | Add & assign          | \`x += 3\`  | \`x = x + 3\`   |
| \`-=\`     | Subtract & assign     | \`x -= 2\`  | \`x = x - 2\`   |
| \`*=\`     | Multiply & assign     | \`x *= 4\`  | \`x = x * 4\`   |
| \`/=\`     | Divide & assign       | \`x /= 2\`  | \`x = x / 2\`   |
| \`//=\`    | Floor divide & assign | \`x //= 3\` | \`x = x // 3\`  |
| \`%=\`     | Modulus & assign      | \`x %= 3\`  | \`x = x % 3\`   |
| \`**=\`    | Power & assign        | \`x **= 2\` | \`x = x ** 2\`  |

\`\`\`text
# Step-by-step example:
x = 10       →  x is 10
x += 5       →  x is now 15 (10 + 5)
x -= 3       →  x is now 12 (15 - 3)
x *= 2       →  x is now 24 (12 × 2)
x //= 5      →  x is now 4  (24 ÷ 5, rounded down)
x **= 3      →  x is now 64 (4³)
x %= 10      →  x is now 4  (64 mod 10 = remainder 4)
\`\`\`

### Also works with strings and lists:

\`\`\`text
name = "Hello"
name += " World"     →  name is "Hello World" (string concatenation)

items = [1, 2]
items += [3, 4]      →  items is [1, 2, 3, 4] (list extension)
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Tracking your daily step count.

\`\`\`python
# Step counter
total_steps = 0

# Morning walk
total_steps += 3000      # 3000
# Afternoon errands
total_steps += 5500      # 8500
# Evening jog
total_steps += 4000      # 12500

print(f"Total: {total_steps} steps")   # Total: 12500 steps

# Goal check
goal = 10000
exceeded_by = total_steps - goal
print(f"Exceeded goal by {exceeded_by}!")  # Exceeded goal by 2500!

# Weekly average
total_steps *= 7          # Assume same every day
weekly_avg = total_steps // 7
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** Growing your **piggy bank** 🐷

\`\`\`python
# Piggy bank
piggy_bank = 0

# Monday: add allowance
piggy_bank += 5       # Now: $5
print(f"Monday: \${piggy_bank}")

# Wednesday: add birthday money!
piggy_bank += 20      # Now: $25
print(f"Wednesday: \${piggy_bank}")

# Friday: buy a toy
piggy_bank -= 8       # Now: $17
print(f"Friday: \${piggy_bank}")

# Double your money! (just kidding)
piggy_bank *= 2       # Now: $34
print(f"Magic doubling: \${piggy_bank}")
\`\`\`

---

## 🔗 Related Concepts

- **Math operations:** [[3.1_Arithmetic]] (the operations behind \`+=\`, \`-=\`, etc.)
- **Compare values:** [[3.4_Comparison]]
- **Variables:** [[1.1_Variables]]
- **Also used with:** [[3.7_Bitwise]] (\`&=\`, \`|=\`, \`^=\`, \`<<=\`, \`>>=\`)
- **Parent:** [[00_Index]]
`;export{e as default};
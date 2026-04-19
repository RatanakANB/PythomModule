var e=`# 🔄 For Loops

> 🏠 Parent: [[00_Index]] · [[5.00_Control_Flow_Index]]
> 📂 Section: Logic & Flow

---

## 📖 Beginner Explanation

A **For Loop** is a way to repeat an action for every item in a collection. Instead of writing the same code 10 times, you write it once, and the \`for\` loop automatically does it once *for each* item.

### The Big Idea: Iteration
"Iteration" means going through items one by one. But here is the secret of Python: **Not all data types can be looped over!**

- **✅ Iterables (Can loop):** Multi-item data or text. These can be sliced and chopped!
  - [[1.02_String]] (loops letter by letter)
  - [[1.07_list]] (loops item by item)
  - [[1.10_dictionary]] (loops item by item)
  - [[1.08_set]] (loops item by item, but in random order!)
  - [[1.09_tuple]] (loops key by key)
- **❌ Non-Iterables (Crashes!):** Singular, solid blocks of data.
  - [[1.03_Interger]] & [[1.04_Float]] (Numbers)
  - [[1.05_Bool]] (True/False)
  - [[1.06_NoneType]] (Empty)

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
graph TD
    A[Start For Loop] --> B{Are there items left in collection?}
    B -- Yes --> C[Get next item]
    C --> D[Run indented code]
    D --> B
    B -- No --> E[Loop Finishes]
\`\`\`

---

## ⚙️ Syntax Breakdown

\`\`\`text
┌── Keyword
│   ┌──────── Variable created just for this loop (holds current item)
│   │  ┌───── Keyword connecting to collection
│   │  │  ┌── The collection (MUST be an Iterable!)
│   │  │  │        ┌── The COLON
▼   ▼  ▼  ▼        ▼
for x in my_list:
    print(x)       │ └─ INDENTED action to repeat
\`\`\`

---

## 🔬 Execution Trace

**Code:** \`for letter in "Cat": print(letter)\`

1. **Step 1**: Python looks at the string \`"Cat"\`. It splits it into \`'C'\`, \`'a'\`, \`'t'\`.
2. **Step 2**: Python grabs the first item (\`'C'\`) and puts it inside the variable \`letter\`.
3. **Step 3**: It runs \`print('C')\`.
4. **Step 4**: It goes back up. Is there anything left? Yes.
5. **Step 5**: Python grabs the next item (\`'a'\`) and puts it in \`letter\`.
6. **Step 6**: It runs \`print('a')\`.
7. **Step 7**: Python grabs \`'t'\`, puts it in \`letter\`, runs \`print('t')\`.
8. **Step 8**: Python asks: anything left? No. The loop ends.

---

## 🌍 Dual Persona

### 👧 18-year-old Scenario: Emailing Customers
Imagine having a \`list\` of 1,000 email addresses. You don't write \`send_email()\` 1,000 times!
\`for email in customer_emails: send_email(email)\`

### 🧒 10-year-old Analogy: The Candy Bag 🍬
Imagine you have a bag of Halloween candy.
**For** every candy **in** the bag:
- Take it out.
- Check if it's chocolate.
- Eat it!

You do this over and over until the bag is empty. But try looping over a **singular bowling ball** (like an \`int\`) — you can't reach inside and pull out "pieces" of a solid bowling ball! This causes a \`TypeError: 'int' object is not iterable\`.

---

## 🧪 Sample Code

\`\`\`python
# --- Setup (Checking all data types!) ---
word = "Hi"                 # str (Iterable)
numbers = [1, 2, 3]         # list (Iterable)
user = {"name": "Bob"}      # dict (Iterable)
age = 25                    # int (NON-Iterable)

# --- Action & Result ---

# Looping a string
for char in word:
    print("Letter:", char)  
# Output: Letter: H \\n Letter: i

# Looping a list
for num in numbers:
    print(num * 2)          
# Output: 2, 4, 6

# Error Example!
# for x in age:
#     print(x) 
# Result: 💥 TypeError: 'int' object is not iterable
\`\`\`

---

## 🔗 Related Concepts

- **Iterable Types:** [[1.02_String]], [[1.07_list]], [[1.10_dictionary]], [[1.08_set]], [[1.09_tuple]]
- **Non-Iterable Types:** [[1.03_Interger]], [[1.04_Float]], [[1.05_Bool]], [[1.06_NoneType]]
- **Tools:** [[4.01_Indexing]] (Loops are an automatic way of going through indices)
- **Sister Structure:** [[5.03_While_Loops]]
`;export{e as default};
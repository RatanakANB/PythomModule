var e=`# 🐍 Python Learning Vault — Master Index

> 🧠 Welcome to your **Visual Mind Map Python Learning System**!
> This vault is designed for absolute beginners (age 10–18).
> Navigate by clicking the links below or exploring the Graph View in Obsidian.

---

## 📖 Beginner-Friendly Explanation

This vault teaches you **Python programming from zero**. Think of it like a map of a city — each neighborhood is a topic, and the streets connecting them are links. You can explore in any direction!

**Python** is a programming language — a way to give instructions to a computer. Everything in this vault connects together like a real knowledge graph.

---

## 🧠 Mind Map Overview

\`\`\`mermaid
mindmap
  root((🐍 Python))
    📦 Variables & Data Types
      Singular Data
        str
        int
        float
        bool
        NoneType
      Multi Data
        list
        set
        tuple
        dict
    🔧 Methods
      What Are Methods
      Method Call Syntax
      Mutability vs Immutability
      String Methods
      Int Methods
      Float Methods
      Bool Methods
      List Methods
      Set Methods
      Tuple Methods
      Dict Methods
      Methods Insight
    ⚡ Operators
      Arithmetic
      Assignment
      Comparison
      Logical
      Identity
      Membership
      Bitwise
\`\`\`

---

## 🗺️ Vault Structure

### 📦 [[1.1_Variables]] & Data Types

| Singular Data (One Value) | Multi Data (Many Values) |
|---------------------------|--------------------------|
| [[1.2_str]] — Text | [[1.7_list]] — Ordered, changeable |
| [[1.3_int]] — Whole numbers | [[1.8_set]] — Unique, unordered |
| [[1.4_float]] — Decimal numbers | [[1.10_dictionary]] — Ordered, unchangeable |
| [[1.5_bool]] — True / False | [[1.9_tuple]] — Key-value pairs |
| [[1.6_NoneType]] — Nothing / Empty | |

---

### 🔧 Methods (Dot Notation)

> Methods are **built-in tools** that each data type provides.

| Concept Notes                  | Method Reference                |
| ------------------------------ | ------------------------------- |
| [[2.1_What_Are_Methods]]           | [[2.5_String_Methods]] (47 methods) |
| [[2.3_Method_Call_Syntax]]         | [[2.6_Int_Methods]] (11 methods)    |
| [[2.2_Mutability_vs_Immutability]] | [[2.7_Float_Methods]] (8 methods)   |
| [[2.4_Methods_Insight]]            | [[2.8_Bool_Methods]] (11 methods)   |
|                                | [[2.9_List_Methods]] (11 methods)   |
|                                | [[2.10_Set_Methods]] (17 methods)    |
|                                | [[2.11_Tuple_Methods]] (2 methods)   |
|                                | [[2.12_Dict_Methods]] (11 methods)   |

---

### ⚡ Operators

| Category | Note |
|----------|------|
| Math | [[3.1_Arithmetic]] |
| Store values | [[3.2_Assignment]] |
| Compare | [[3.4_Comparison]] |
| Logic gates | [[3.3_Logical]] |
| Same object? | [[3.6_Identity]] |
| Contains? | [[3.5_Membership]] |
| Binary math | [[3.7_Bitwise]] |

---

## ⚙️ Syntax Breakdown

\`\`\`text
print("Hello, World!")  →  Tell Python to display text on screen
# This is a comment     →  Notes for humans, Python ignores these
x = 5                   →  Create a variable named x, store the number 5
type(x)                 →  Ask Python: "What kind of data is x?"
\`\`\`

---

## 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

Imagine you're organizing your entire school year into folders on your computer:
- **Variables & Data Types** = The different types of files (documents, images, spreadsheets)
- **Methods** = The actions you can do with each file type (edit, rename, share)
- **Operators** = The rules for comparing and combining files (which is newer? merge two folders?)

\`\`\`python
# Your school vault
subjects = ["Math", "Science", "English"]  # A list of subjects
print(type(subjects))  # <class 'list'>
\`\`\`

### 🧒 10-year-old beginner

Imagine Python is a **magic toy box** 🧸:
- **Variables & Data Types** = Different kinds of toys (dolls, cars, blocks)
- **Methods** = What each toy can do (the car can drive, the doll can wave)
- **Operators** = Rules for playing (who has more toys? combine your toys!)

\`\`\`python
# Your magic toy box
toy = "Teddy Bear"  # A string toy
print(toy)  # Shows: Teddy Bear
\`\`\`

---

## 🔗 Navigation

> Start your journey here:
> 1. First, learn about [[1.1_Variables]] — the foundation of everything
> 2. Then explore each [[1.2_str|data type]] one by one
> 3. Discover [[2.1_What_Are_Methods]] — the tools each type provides
> 4. Finally, master [[3.1_Arithmetic|operators]] — the rules of combination
`;export{e as default};
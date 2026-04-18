var e=`# 🔤 String Methods — All 47 Methods

> 🏠 Parent: [[1.2_str]] · [[2.1_What_Are_Methods]]
> 📂 Section: Methods
> 🔑 Key concept: All string methods return **new** strings — strings are [[2.2_Mutability_vs_Immutability|immutable]]

---

## 📖 Beginner-Friendly Explanation

Strings come with **47 built-in methods** — tools for transforming, searching, checking, splitting, and formatting text. Since strings are **immutable**, none of these methods change the original string. They always **return a new value**.

---

## 🧠 Mermaid Diagram

\`\`\`mermaid
mindmap
  root(("🔤 String Methods — 47"))
    ✨ Case (6)
      capitalize
      casefold
      lower
      upper
      swapcase
      title
    ✅ Check (14)
      isalnum
      isalpha
      isascii
      isdecimal
      isdigit
      isidentifier
      islower
      isnumeric
      isprintable
      isspace
      istitle
      isupper
      startswith
      endswith
    🔍 Search (5)
      find
      rfind
      index
      rindex
      count
    ✏️ Modify (9)
      replace
      strip
      lstrip
      rstrip
      removeprefix
      removesuffix
      expandtabs
      translate
      maketrans
    ✂️ Split & Join (6)
      split
      rsplit
      splitlines
      partition
      rpartition
      join
    📐 Formatting (6)
      center
      ljust
      rjust
      zfill
      format
      format_map
    📤 Encoding (1)
      encode
\`\`\`

---

# ✨ Case Methods (6)

> Change the letter casing of text.

## \`capitalize()\`

Returns a copy with the **first character capitalized** and the rest lowered.

\`\`\`python
text = "hello WORLD"
result = text.capitalize()
print(result)   # "Hello world"
\`\`\`

\`\`\`text
text.capitalize()  →  First letter → uppercase, rest → lowercase
\`\`\`

---

## \`casefold()\`

Returns an **aggressively lowercased** version — stronger than \`lower()\`. Used for **case-insensitive comparisons**.

\`\`\`python
text = "Straße"          # German word with ß
print(text.lower())      # "straße"
print(text.casefold())   # "strasse"  ← ß becomes ss!
\`\`\`

\`\`\`text
text.casefold()  →  Like lower() but handles special international characters
\`\`\`

---

## \`lower()\`

Returns a copy with **all characters lowercase**.

\`\`\`python
text = "Hello World"
print(text.lower())      # "hello world"
\`\`\`

\`\`\`text
text.lower()  →  Every letter becomes lowercase
\`\`\`

---

## \`upper()\`

Returns a copy with **all characters uppercase**.

\`\`\`python
text = "Hello World"
print(text.upper())      # "HELLO WORLD"
\`\`\`

\`\`\`text
text.upper()  →  Every letter becomes UPPERCASE
\`\`\`

---

## \`swapcase()\`

Returns a copy where **uppercase becomes lowercase** and vice versa.

\`\`\`python
text = "Hello World"
print(text.swapcase())   # "hELLO wORLD"
\`\`\`

\`\`\`text
text.swapcase()  →  Flip every letter's case: A↔a, B↔b
\`\`\`

---

## \`title()\`

Returns a copy where the **first letter of each word** is capitalized.

\`\`\`python
text = "hello world python"
print(text.title())      # "Hello World Python"
\`\`\`

\`\`\`text
text.title()  →  First letter of EACH word → uppercase
\`\`\`

---

# ✅ Check Methods (14)

> Return \`True\` or \`False\` ([[1.5_bool]]) — useful for **validation**.

## \`isalnum()\`

Returns \`True\` if all characters are **letters or numbers** (alphanumeric).

\`\`\`python
"Hello123".isalnum()     # True
"Hello 123".isalnum()    # False (space is not alphanumeric)
"!!??".isalnum()         # False
\`\`\`

\`\`\`text
text.isalnum()  →  Are ALL characters letters or digits? → True/False
\`\`\`

---

## \`isalpha()\`

Returns \`True\` if all characters are **letters only** (no numbers, no spaces).

\`\`\`python
"Hello".isalpha()        # True
"Hello123".isalpha()     # False (contains digits)
"".isalpha()             # False (empty string)
\`\`\`

\`\`\`text
text.isalpha()  →  Are ALL characters letters? → True/False
\`\`\`

---

## \`isascii()\`

Returns \`True\` if all characters are **ASCII** (basic English characters, digits, symbols).

\`\`\`python
"Hello123".isascii()     # True
"café".isascii()         # False (é is not ASCII)
"".isascii()             # True (empty string is ASCII)
\`\`\`

\`\`\`text
text.isascii()  →  Are all characters basic English characters? → True/False
\`\`\`

---

## \`isdecimal()\`

Returns \`True\` if all characters are **decimal digits** (0-9).

\`\`\`python
"12345".isdecimal()      # True
"12.5".isdecimal()       # False (dot is not a digit)
"½".isdecimal()          # False
\`\`\`

\`\`\`text
text.isdecimal()  →  Are ALL characters 0-9? → True/False
\`\`\`

---

## \`isdigit()\`

Returns \`True\` if all characters are **digits** (includes superscripts like ²).

\`\`\`python
"12345".isdigit()        # True
"12²".isdigit()          # True (superscript 2 counts!)
"12.5".isdigit()         # False
\`\`\`

\`\`\`text
text.isdigit()  →  Are ALL characters digit-like? → True/False
# Slightly broader than isdecimal() — includes ², ³, etc.
\`\`\`

---

## \`isidentifier()\`

Returns \`True\` if the string is a **valid Python variable name**.

\`\`\`python
"my_var".isidentifier()  # True
"myVar2".isidentifier()  # True
"2var".isidentifier()    # False (can't start with number)
"my-var".isidentifier()  # False (hyphens not allowed)
\`\`\`

\`\`\`text
text.isidentifier()  →  Could this be a valid variable name? → True/False
\`\`\`

---

## \`islower()\`

Returns \`True\` if **all cased characters** are lowercase.

\`\`\`python
"hello".islower()        # True
"Hello".islower()        # False
"hello123".islower()     # True (numbers don't count)
\`\`\`

\`\`\`text
text.islower()  →  Are all letters lowercase? → True/False
\`\`\`

---

## \`isnumeric()\`

Returns \`True\` if all characters are **numeric** (broadest — includes fractions, Roman numerals).

\`\`\`python
"12345".isnumeric()      # True
"½".isnumeric()          # True (fraction!)
"Ⅳ".isnumeric()         # True (Roman numeral!)
"12.5".isnumeric()       # False
\`\`\`

\`\`\`text
text.isnumeric()  →  The broadest number check
# isdecimal() ⊂ isdigit() ⊂ isnumeric()
\`\`\`

---

## \`isprintable()\`

Returns \`True\` if all characters are **printable** (visible on screen).

\`\`\`python
"Hello!".isprintable()   # True
"Hello\\n".isprintable()  # False (\\n is a newline — invisible)
"".isprintable()         # True
\`\`\`

\`\`\`text
text.isprintable()  →  Can all characters be displayed on screen? → True/False
\`\`\`

---

## \`isspace()\`

Returns \`True\` if all characters are **whitespace** (spaces, tabs, newlines).

\`\`\`python
"   ".isspace()          # True
"\\t\\n".isspace()         # True (tab and newline)
"  a  ".isspace()        # False (contains 'a')
\`\`\`

\`\`\`text
text.isspace()  →  Are ALL characters spaces/tabs/newlines? → True/False
\`\`\`

---

## \`istitle()\`

Returns \`True\` if the string follows **title case** (first letter of each word capitalized).

\`\`\`python
"Hello World".istitle()    # True
"Hello world".istitle()    # False ('w' is lowercase)
"HELLO WORLD".istitle()    # False (all uppercase)
\`\`\`

\`\`\`text
text.istitle()  →  Is the first letter of each word uppercase? → True/False
\`\`\`

---

## \`isupper()\`

Returns \`True\` if **all cased characters** are uppercase.

\`\`\`python
"HELLO".isupper()        # True
"Hello".isupper()        # False
"HELLO123".isupper()     # True (numbers don't count)
\`\`\`

\`\`\`text
text.isupper()  →  Are all letters uppercase? → True/False
\`\`\`

---

## \`startswith(prefix)\`

Returns \`True\` if the string **starts with** the given prefix.

\`\`\`python
"Hello World".startswith("Hello")   # True
"Hello World".startswith("World")   # False
"Python".startswith("Py")           # True
\`\`\`

\`\`\`text
text.startswith(prefix)  →  Does the text BEGIN with this? → True/False
\`\`\`

---

## \`endswith(suffix)\`

Returns \`True\` if the string **ends with** the given suffix.

\`\`\`python
"hello.py".endswith(".py")      # True
"hello.py".endswith(".txt")     # False
"photo.jpg".endswith((".jpg", ".png"))  # True (tuple of options!)
\`\`\`

\`\`\`text
text.endswith(suffix)  →  Does the text END with this? → True/False
\`\`\`

---

# 🔍 Search Methods (5)

> Find positions and count occurrences in text.

## \`find(sub)\`

Returns the **index** of the first occurrence. Returns **-1** if not found.

\`\`\`python
text = "hello world"
text.find("world")       # 6
text.find("xyz")         # -1 (not found)
text.find("l")           # 2 (first 'l')
\`\`\`

\`\`\`text
text.find(sub)  →  Where does 'sub' first appear? → index or -1
\`\`\`

---

## \`rfind(sub)\`

Like \`find()\` but searches from the **right** (last occurrence).

\`\`\`python
text = "hello world hello"
text.rfind("hello")      # 12 (last occurrence)
text.rfind("xyz")        # -1
\`\`\`

\`\`\`text
text.rfind(sub)  →  Where does 'sub' LAST appear? → index or -1
\`\`\`

---

## \`index(sub)\`

Like \`find()\` but **raises an error** if not found (instead of -1).

\`\`\`python
text = "hello world"
text.index("world")      # 6
# text.index("xyz")      # ❌ ValueError!
\`\`\`

\`\`\`text
text.index(sub)  →  Like find(), but crashes if not found
\`\`\`

---

## \`rindex(sub)\`

Like \`rfind()\` but **raises an error** if not found.

\`\`\`python
text = "hello world hello"
text.rindex("hello")     # 12
# text.rindex("xyz")     # ❌ ValueError!
\`\`\`

\`\`\`text
text.rindex(sub)  →  Like rfind(), but crashes if not found
\`\`\`

---

## \`count(sub)\`

Returns how many times the substring appears.

\`\`\`python
text = "banana"
text.count("a")          # 3
text.count("na")         # 2
text.count("x")          # 0
\`\`\`

\`\`\`text
text.count(sub)  →  How many times does 'sub' appear? → number
\`\`\`

---

# ✏️ Modify Methods (9)

> Transform the text content — always returns a **new** string.

## \`replace(old, new)\`

Replace all occurrences of \`old\` with \`new\`.

\`\`\`python
text = "hello world"
text.replace("world", "Python")      # "hello Python"
text.replace("l", "L")               # "heLLo worLd"
text.replace("l", "L", 1)            # "heLlo world" (replace only first)
\`\`\`

\`\`\`text
text.replace(old, new)  →  Swap every 'old' for 'new' → new string
text.replace(old, new, count)  →  Swap only 'count' times
\`\`\`

---

## \`strip()\`

Remove **whitespace** (or specified characters) from **both** sides.

\`\`\`python
text = "   hello   "
text.strip()             # "hello"
"***hello***".strip("*") # "hello"
\`\`\`

\`\`\`text
text.strip()      →  Remove spaces from both sides
text.strip(chars) →  Remove specific characters from both sides
\`\`\`

---

## \`lstrip()\`

Remove whitespace (or characters) from the **left** side only.

\`\`\`python
text = "   hello   "
text.lstrip()            # "hello   "
\`\`\`

\`\`\`text
text.lstrip()  →  Remove spaces from the LEFT side only
\`\`\`

---

## \`rstrip()\`

Remove whitespace (or characters) from the **right** side only.

\`\`\`python
text = "   hello   "
text.rstrip()            # "   hello"
\`\`\`

\`\`\`text
text.rstrip()  →  Remove spaces from the RIGHT side only
\`\`\`

---

## \`removeprefix(prefix)\`

Remove a specific **prefix** from the beginning. *(Python 3.9+)*

\`\`\`python
"HelloWorld".removeprefix("Hello")    # "World"
"HelloWorld".removeprefix("Bye")      # "HelloWorld" (no change)
\`\`\`

\`\`\`text
text.removeprefix(prefix)  →  Remove the prefix if it exists → new string
\`\`\`

---

## \`removesuffix(suffix)\`

Remove a specific **suffix** from the end. *(Python 3.9+)*

\`\`\`python
"photo.jpg".removesuffix(".jpg")      # "photo"
"photo.jpg".removesuffix(".png")      # "photo.jpg" (no change)
\`\`\`

\`\`\`text
text.removesuffix(suffix)  →  Remove the suffix if it exists → new string
\`\`\`

---

## \`expandtabs(tabsize)\`

Replace tab characters \`\\t\` with spaces.

\`\`\`python
text = "Name\\tAge\\tCity"
print(text.expandtabs(10))    # "Name      Age       City"
print(text.expandtabs(4))     # "Name    Age City"
\`\`\`

\`\`\`text
text.expandtabs(n)  →  Replace each \\t with enough spaces to reach column n
\`\`\`

---

## \`maketrans(x, y)\` and \`translate(table)\`

Create a **translation table** and apply it. Used together.

\`\`\`python
# Create a translation: a→1, b→2, c→3
table = str.maketrans("abc", "123")
text = "abc hello abc"
text.translate(table)    # "123 hello 123"

# Delete characters using translate
table = str.maketrans("", "", "aeiou")
"hello world".translate(table)   # "hll wrld" (vowels removed!)
\`\`\`

\`\`\`text
str.maketrans(from, to)    →  Create a mapping: from[i] → to[i]
text.translate(table)      →  Apply the mapping to every character
\`\`\`

---

# ✂️ Split & Join Methods (6)

> Break text apart or combine pieces together.

## \`split(sep)\`

Split a string into a **[[1.7_list]]** by a separator.

\`\`\`python
text = "apple,banana,cherry"
text.split(",")          # ["apple", "banana", "cherry"]
"hello world".split()    # ["hello", "world"] (default: split by whitespace)
"a.b.c".split(".", 1)   # ["a", "b.c"] (split only once)
\`\`\`

\`\`\`text
text.split(sep)  →  Break text at every 'sep' → list of pieces
\`\`\`

---

## \`rsplit(sep)\`

Like \`split()\` but starts splitting from the **right**.

\`\`\`python
text = "a.b.c.d"
text.rsplit(".", 2)      # ["a.b", "c", "d"]
text.split(".", 2)       # ["a", "b", "c.d"]  ← compare!
\`\`\`

\`\`\`text
text.rsplit(sep, maxsplit)  →  Split from RIGHT side
\`\`\`

---

## \`splitlines()\`

Split text at **line breaks** (\`\\n\`, \`\\r\\n\`, etc.).

\`\`\`python
text = "Line 1\\nLine 2\\nLine 3"
text.splitlines()        # ["Line 1", "Line 2", "Line 3"]
\`\`\`

\`\`\`text
text.splitlines()  →  Break at every newline → list of lines
\`\`\`

---

## \`partition(sep)\`

Split into **exactly 3 parts**: before, separator, after.

\`\`\`python
text = "hello-world-python"
text.partition("-")      # ("hello", "-", "world-python")
\`\`\`

\`\`\`text
text.partition(sep)  →  (before, sep, after) → always 3 parts
\`\`\`

---

## \`rpartition(sep)\`

Like \`partition()\` but finds the separator from the **right**.

\`\`\`python
text = "hello-world-python"
text.rpartition("-")     # ("hello-world", "-", "python")
\`\`\`

\`\`\`text
text.rpartition(sep)  →  Split at the LAST occurrence of sep
\`\`\`

---

## \`join(iterable)\`

**Join** a [[1.7_list]] of strings into one string, with the string as the separator.

\`\`\`python
words = ["hello", "world", "python"]
" ".join(words)          # "hello world python"
",".join(words)          # "hello,world,python"
"→".join(words)          # "hello→world→python"
\`\`\`

\`\`\`text
separator.join(list)  →  Glue list items together with separator
# Note: join is called ON the separator, not on the list!
\`\`\`

---

# 📐 Formatting Methods (6)

> Control text alignment, padding, and formatting.

## \`center(width)\`

Center the text within a given width, padding with spaces (or a character).

\`\`\`python
"hello".center(20)          # "       hello        "
"hello".center(20, "-")     # "-------hello--------"
\`\`\`

\`\`\`text
text.center(width)  →  Center text, pad with spaces to fill width
\`\`\`

---

## \`ljust(width)\`

**Left-justify** the text, padding the right side.

\`\`\`python
"hello".ljust(20)           # "hello               "
"hello".ljust(20, ".")      # "hello..............."
\`\`\`

\`\`\`text
text.ljust(width)  →  Left-align, pad right side
\`\`\`

---

## \`rjust(width)\`

**Right-justify** the text, padding the left side.

\`\`\`python
"hello".rjust(20)           # "               hello"
"42".rjust(5, "0")          # "00042"
\`\`\`

\`\`\`text
text.rjust(width)  →  Right-align, pad left side
\`\`\`

---

## \`zfill(width)\`

Pad the left with **zeros** to reach the given width.

\`\`\`python
"42".zfill(5)               # "00042"
"-42".zfill(5)              # "-0042" (handles negative sign!)
"hello".zfill(10)           # "00000hello"
\`\`\`

\`\`\`text
text.zfill(width)  →  Pad left with zeros
\`\`\`

---

## \`format(*args, **kwargs)\`

Replace \`{}\` placeholders with values.

\`\`\`python
"Hello, {}!".format("Alice")              # "Hello, Alice!"
"{} + {} = {}".format(1, 2, 3)            # "1 + 2 = 3"
"Name: {name}, Age: {age}".format(name="Alice", age=15)  # "Name: Alice, Age: 15"
\`\`\`

\`\`\`text
"template {}".format(value)  →  Insert values into placeholders
\`\`\`

---

## \`format_map(mapping)\`

Like \`format()\` but takes a **dictionary** directly.

\`\`\`python
data = {"name": "Alice", "age": 15}
"Name: {name}, Age: {age}".format_map(data)   # "Name: Alice, Age: 15"
\`\`\`

\`\`\`text
"template".format_map(dict)  →  Like format() but uses a [[dict]] directly
\`\`\`

---

# 📤 Encoding Method (1)

## \`encode(encoding)\`

Convert the string to **bytes** using the specified encoding.

\`\`\`python
text = "Hello"
text.encode()             # b'Hello' (default: UTF-8)
text.encode("ascii")      # b'Hello'
"café".encode("utf-8")    # b'caf\\xc3\\xa9'
\`\`\`

\`\`\`text
text.encode(encoding)  →  Convert text to bytes for storage/transmission
\`\`\`

---

# 🌍 Dual Persona Real-World Example

### 👧 18-year-old beginner

**Scenario:** Processing user data for a registration system.

\`\`\`python
raw_input = "  jOhN.sMiTh@Gmail.COM  "

# Step 1: Clean whitespace
cleaned = raw_input.strip()
print(cleaned)               # "jOhN.sMiTh@Gmail.COM"

# Step 2: Normalize to lowercase
email = cleaned.lower()
print(email)                 # "john.smith@gmail.com"

# Step 3: Validate format
has_at = "@" in email        # True (membership operator)
has_dot = email.endswith(".com")  # True
is_valid = has_at and has_dot
print(is_valid)              # True

# Step 4: Extract username
username = email.split("@")[0]
print(username)              # "john.smith"

# Step 5: Create display name
display = username.replace(".", " ").title()
print(display)               # "John Smith"
\`\`\`

### 🧒 10-year-old beginner

**Scenario:** You're a **word wizard** casting spells on text! 🧙‍♂️

\`\`\`python
spell = "  abracadabra  "

# Spell 1: Clean the edges!
spell = spell.strip()
print(spell)              # "abracadabra"

# Spell 2: SHOUT the spell!
print(spell.upper())      # "ABRACADABRA"

# Spell 3: Count the magic 'a'!
print(spell.count("a"))   # 5

# Spell 4: Is it all letters?
print(spell.isalpha())    # True — pure magic letters!

# Spell 5: Replace letters!
new_spell = spell.replace("a", "★")
print(new_spell)          # "★br★c★d★br★"
\`\`\`

---

## 🔗 Related Concepts

- **Data type:** [[1.2_str]]
- **Call syntax:** [[2.3_Method_Call_Syntax]]
- **Why methods return new values:** [[2.2_Mutability_vs_Immutability]]
- **Overview table:** [[2.4_Methods_Insight]]
- **Other method notes:** [[2.6_Int_Methods]] · [[2.7_Float_Methods]] · [[2.8_Bool_Methods]] · [[2.9_List_Methods]] · [[2.10_Set_Methods]] · [[2.13_Tuple_Methods]] · [[2.12_Dict_Methods]]
`;export{e as default};
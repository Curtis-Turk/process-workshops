Math papers - easier to read

Scanning through paper to look for sums
extract as strings and evaluate
output string along with result

String calculator

Input - String
Output - String + Number - Two element array ["String", 10]

Example input
"1 + 1"
Example output
["1 + 1", 2]

exceptions
raise arg error if input is not a string

"one + one" - raise math error
"one" - raise math error

valid operations "+-\*/" if not raise math error

input / output

```
"1" = ["1", 1]
"1 + 1" = ["1 + 1", 2]
"1 * 1" = ["1 * 1", 1]
"1 + 1 + 1" = ["1 + 1 + 1", 2]
"1+1" = math error
"one" = math error
```

---

Ask about negatives and floating points

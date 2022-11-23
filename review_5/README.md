Tests scores

Accepts multiple test entries and reports on each

2 mmain functions

## 1st part

const report = new Report();
report.addScores("Green, Green, Amber, Red, Green");
report.addScores("Amber, Amber, Green, Red, Amber");
report.addScores("Red, Red, Amber, Red, Amber");

## 2nd part

report.generate();
"Test 1:\nGreen: 3\nAmber: 1\nRed: 1\n---\nTest 2:\nGreen: 1\nAmber: 3\nRed: 1\n---\nTest 3:\nGreen: 0\nAmber: 2\nRed: 3"

class - report
functions - addScores - generate

if input is not a string - raise error
if score is found even in these cases "Green,Red"
capitalisation does not matter "GREEN, RED"

order of generated scores - start with green, amber then red
generated scores would contain full range - it can be 0
do not end with trailing \n and ---

input | output

"Green" | "Test 1:\nGreen: 1\nAmber: 0\nRed: 0"
"Green, RED" | "Test 1:\nGreen: 1\nAmber: 0\nRed: 1"

"Green" |
"Green, RED" | "Test 1:\nGreen: 1\nAmber: 0\nRed: 0\n---\nTest 2:\nGreen: 1\nAmber: 0\nRed: 1"

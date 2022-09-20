Digital audio plugins

filter tracks to change the sound

bandpass filter

3 inputs

track
array of frequencies

lower limit
number

upper limit
number

example input
[60,10,45,60,1500],20,50

example output
[50,20,45,50,50]

if input frequency is negative raise error saying the input is corrupted
will always get numbers - if not same error

if limits are switched - i.e lower limit higher - raise error

if no limits are given default to 40 for lower and 100 for upper

Still need to check for requirements for the first couple of tests

# A simple tool that will tell you whether a year is a leap year, according to the following rules:

# Acceptance Criteria

# 2.4.1 :001 > require './lib/leap_years.rb'
#  => true
# 2.4.1 :002 > leap_year?(2000)
#  => true
# 2.4.1 :003 > leap_year?(1970)
#  => false
# 2.4.1 :004 > leap_year?(1900)
#  => false
# 2.4.1 :005 > leap_year?(1988)
#  => true
# 2.4.1 :006 > leap_year?(1500)
#  => false

# Extension Options

#     Write a program that takes a start year and an end year and returns an array of all the leap years between.

#     Write a program that when given a year, will return the closest leap year (this could be before or after the given year)

def leap_year?(year)
  fail "Enter an integer" if year.class != Integer
  if year % 4 != 0
    return false 
  elsif year % 400 == 0
    return true
  elsif year % 100 == 0 && year % 400 != 0
    return false
  elsif year % 4 && year % 100 != 0
    return true
  end  
end

def all_leap_years(start_year, end_year)
  fail "Enter an integer" if start_year.class != Integer || end_year.class != Integer

  leap_years = []
  [*start_year..end_year].each do |year|
    if leap_year?(year)
      leap_years << year
    end
  end
  leap_years
end
require 'leap_years'

#     All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
#     All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
#     All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
#     All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)

RSpec.describe "leap years" do
  it "takes a year divisible by 400 and returns true" do
    expect(leap_year?(400)).to eq(true)
  end
  it "takes a year divisible by 100 but not by 400 and returns false" do
    expect(leap_year?(500)).to eq(false)
  end
  it "year divisible by 4 and are not by 100 and returns true" do
    expect(leap_year?(2004)).to eq(true)
  end
  it "year not divisible by 4 returns false " do
    expect(leap_year?(2009)).to eq(false)
  end
  context "when entering a non integer" do
    it "fails" do
      expect{ leap_year?("year") }.to raise_error "Enter an integer"
    end
  end
end

RSpec.describe "all_leap_years" do
  context "when entering non integers" do
    it "fails" do
      expect{ all_leap_years("year1","year2") }.to raise_error "Enter an integer"
    end
  end

  it "takes 2 years and returns all of the leap years between" do
    expect(all_leap_years(1999, 2001)).to eq [2000]
  end
end
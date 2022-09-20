const bandpassFilter = (frequency, lower, upper) => {
  let filter = frequency.map((band) => {
    if (band < 0) {
      throw new Error("Frequencies are corrupted");
    }
    if (band < lower) {
      return (band = lower);
    }
    if (band > upper) {
      return (band = upper);
    }
    return band;
  });

  return filter;
};

module.exports = bandpassFilter;

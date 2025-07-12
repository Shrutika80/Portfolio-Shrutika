export const calculateExperience = (startDate: string): number => {
  const start = new Date(startDate);
  const now = new Date();

  // Subtract the gap months from the current date
  now.setMonth(now.getMonth() - 9);

  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();

  // Adjust if the current month is earlier than the start month
  const totalYears = months < 0 ? years - 1 : years;
  const experience = totalYears + (months < 0 ? (12 + months) / 12 : months / 12);

  // Round to one decimal place
  return parseFloat(experience.toFixed(1));
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};
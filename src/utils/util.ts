export const convertToTitleCase = (inputString: string): string => {
  // Replace underscores with spaces
  const stringWithSpaces = inputString.replace(/_/g, " ");

  // Convert to title case
  const titleCaseString = stringWithSpaces.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });

  return titleCaseString;
};

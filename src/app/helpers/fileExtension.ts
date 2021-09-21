export const fileExtension = (fileName: string): string => {
  const parts = fileName.split('.');
  return parts[parts.length - 1];
};

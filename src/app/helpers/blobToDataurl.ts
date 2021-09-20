export const blobToUrl = async (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      resolve(e.target.result as string);
    };

    fileReader.readAsDataURL(blob);
  });
};

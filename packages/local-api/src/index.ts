export const serve = (port: number, filename: string, dir: string) => {
  console.log("Serving traffic on", port);
  console.log("Saving/fetching cells from ", filename);
  console.log("that file is in", dir);
};

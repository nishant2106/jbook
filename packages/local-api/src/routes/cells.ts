import express from "express";
import fs from "fs/promises";
import path from "path";

interface Cell {
  id: string;
  content: string;
  type: "text" | "code";
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  const fullPath = path.join(dir, filename);

  router.use(express.json());

  router.get("/cells", async (req, res) => {
    try {
      const result = await fs.readFile(fullPath, { encoding: "utf-8" });

      res.send(JSON.parse(result));
    } catch (err: any) {
      if (err.code === "ENOENT") {
        await fs.writeFile(fullPath, "[]", "utf-8");
        res.send([]);
      } else {
        throw err;
      }
    }
    //make sure the cell storage file exists
    //if it does not exists, add in a default list of cells
    //read the file
    // if read throws an error, it means the file does not exist
    //parse the list of cells
    //send list of cells to the browser
  });

  router.post("/cells", async (req, res) => {
    // Take the list of cells from the request object
    // serialize them

    const { cells }: { cells: Cell[] } = req.body;
    // write the cells into the file
    await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");

    res.send({ status: "ok" });
  });

  return router;
};

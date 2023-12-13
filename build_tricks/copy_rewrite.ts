import * as fs from "fs-extra";
import * as path from "path";

const sourceDir = path.resolve(__dirname, "../examples");
const destinationDir = path.resolve(__dirname, "../docs/examples");

const updateAssetPaths = async (filePath: string): Promise<void> => {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    const updatedContent = content.replace(
      /\.\.\/\.\.\/assets\//g,
      "../../assets/"
    );
    await fs.writeFile(filePath, updatedContent);
  } catch (err) {
    console.error("Error updating asset paths:", err);
  }
};

const copyAndUpdateFiles = async (): Promise<void> => {
  try {
    const files = await fs.readdir(sourceDir);
    console.log("#", files);
    // Create destination directory if it doesn't exist
    await fs.ensureDir(destinationDir);

    // Copy and update each file
    await Promise.all(
      files.map(async (file) => {
        const sourcePath = path.resolve(sourceDir, file);
        const destinationPath = path.resolve(
          destinationDir,
          file.replace(/\.md$/, "/index.md")
        );

        const stats = await fs.stat(sourcePath);

        if (stats.isFile()) {
          // Copy and update only if it's a file
          await fs.copy(sourcePath, destinationPath);
          await updateAssetPaths(destinationPath);
        }
      })
    );

    console.log("Files copied and updated successfully.");
  } catch (err) {
    console.error("Error:", err);
  }
};

// Run the copy and update process
copyAndUpdateFiles();

const fs = require("fs-extra");
const path = require("path");

const sourceDir = "src/examples";
const destinationDir = "src/docs/examples";

// Function to update asset paths in a given file
const updateAssetPaths = (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const updatedContent = content.replace(
    /\.\.\/\.\.\/assets\//g,
    "../../assets/"
  );
  fs.writeFileSync(filePath, updatedContent);
};

// Function to copy and update files in a directory
const copyAndUpdateFiles = async () => {
  try {
    const files = await fs.readdir(sourceDir);

    // Create destination directory if it doesn't exist
    await fs.ensureDir(destinationDir);

    // Copy and update each file
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destinationPath = path.join(
        destinationDir,
        file.replace(/\.md$/, "/index.md")
      );

      await fs.copy(sourcePath, destinationPath);

      // Update asset paths in the copied file
      updateAssetPaths(destinationPath);
    }

    console.log("Files copied and updated successfully.");
  } catch (err) {
    console.error("Error:", err);
  }
};

// Run the copy and update process
copyAndUpdateFiles();

import fs from "fs/promises";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.resolve(__filename, "../..");

async function generateReleaseData() {
  const releaseRepo =
    process.env.VITE_RELEASE_REPO ||
    process.env.GITHUB_REPOSITORY ||
    "ph-design/zmks-studio";
  const fallbackData = {
    assets: [],
    tag_name: "dev",
    html_url: `https://github.com/${releaseRepo}/releases`,
  };
  const dataFilePath = path.resolve(
    __dirname,
    "src",
    "data",
    "release-data.json",
  );

  try {
    const response = await fetch(
      `https://api.github.com/repos/${releaseRepo}/releases/latest`,
      {
        headers: process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {},
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(dataFilePath, JSON.stringify(data));

    console.log("Release data generated successfully!");
  } catch (error) {
    try {
      await fs.access(dataFilePath);
      console.warn("Failed to refresh release data; using cached release-data.json.");
      console.warn(error);
      return;
    } catch {
      console.warn("Failed to fetch release data; writing a fallback release-data.json.");
      console.warn(error);
      await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
      await fs.writeFile(dataFilePath, JSON.stringify(fallbackData));
    }
  }
}

generateReleaseData();

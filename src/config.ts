let currentUrl = "";

// Check if the environment is local
if (process.env.NODE_ENV === "development") {
  currentUrl = "";
  console.log("Development environment");
} else {
  // If deploying to GitHub Pages
  currentUrl = "/portfolio";
  console.log("Production environment");
}

export default currentUrl;

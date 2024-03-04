export default async function sitemap() {
  let routes = [
    "",
    "/work",
    "/work/article",
    "/work/fundraising-campaign",
    "/work/press-release",
    "work/social-media-content",
  ].map((route) => ({
    url: `https://faisalm.xyz${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}

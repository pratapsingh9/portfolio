export const SITE = {
  website: "https://your-domain.com/", // replace this with your deployed domain
  author: "Pratap Singh",
  profile: "https://pratapsingh.me/about", // link to your about page
  desc: "A personal portfolio and blog by Pratap Singh, a software engineer passionate about building beautiful, responsive, and performant web applications.",
  title: "Pratap Singh",
  ogImage: "astropaper-og.jpg", // make sure to replace this file in the `public` folder
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false, // set to false if you don't want to show this
    text: "Edit page",
    url: "https://github.com/your-username/your-repo/edit/main/", // replace with your repo link
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kolkata", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
import { expect, test } from "@playwright/test";

test("responsive introduction, working navigation, and profile links", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Cao MinhNguyen.",
  );
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(255, 255, 255)",
  );
  await expect(page.locator(".navbar")).toHaveCSS(
    "background-color",
    "rgb(11, 21, 38)",
  );
  await expect(page.getByAltText("Cao Minh Nguyen")).toBeVisible();
  await expect
    .poll(() =>
      page
        .getByAltText("Cao Minh Nguyen")
        .evaluate((img: HTMLImageElement) => img.naturalWidth),
    )
    .toBeGreaterThan(0);
  await expect(page.locator(".hero-socials a").first()).toHaveAttribute(
    "href",
    "https://github.com/caominhnguyen05",
  );
  await expect(page.locator(".hero-socials a").last()).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/caominh-nguyen/",
  );
  await expect(
    page.getByRole("link", { name: "View my résumé" }),
  ).toHaveAttribute("href", "/CM_Nguyen_CV.pdf");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);

  await page.screenshot({
    path: `test-results/hero-${testInfo.project.name}.png`,
  });
  if (testInfo.project.name !== "desktop") {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await expect(page.locator("#mobile-navigation")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("#mobile-navigation")).toBeHidden();
    await expect(
      page.getByRole("button", { name: "Open navigation" }),
    ).toBeFocused();
    await page.getByRole("button", { name: "Open navigation" }).click();
  }
  const navigation = page.locator(
    testInfo.project.name === "desktop" ? ".desktop-nav" : "#mobile-navigation",
  );
  await navigation
    .getByRole("link", { name: "Education", exact: true })
    .click();
  await expect(page).toHaveURL(/#education$/);
  await expect(
    page.getByRole("heading", { name: "Education", exact: true }),
  ).toBeInViewport();
  await expect(page.locator(".navbar")).toBeInViewport();
  if (testInfo.project.name !== "desktop")
    await expect(page.locator("#mobile-navigation")).toBeHidden();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
});

test("projects paginate in groups of four with appropriate external links", async ({
  page,
}) => {
  await page.goto("/#projects");
  const cards = page.locator(".project-card");
  await expect(cards).toHaveCount(4);
  await expect(page.getByRole("status")).toHaveText(
    "Showing 1–4 of 5 projects",
  );
  await expect(
    page.getByRole("button", { name: "Previous project page" }),
  ).toBeDisabled();
  const support = cards.filter({
    has: page.getByRole("heading", {
      name: "Multi-Domain Support Triage Agent",
    }),
  });
  await expect(support.getByRole("link")).toHaveCount(1);
  await expect(support.getByRole("link", { name: /on GitHub/ })).toBeVisible();
  const revision = cards.filter({
    has: page.getByRole("heading", { name: "CS Revision Platform" }),
  });
  await expect(revision.getByRole("link")).toHaveCount(2);
  for (const link of await page.locator(".project-actions a").all()) {
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
  await page.getByRole("button", { name: "Next project page" }).click();
  await expect(cards).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "CineBrowse" })).toBeVisible();
  await expect(page.getByRole("status")).toHaveText(
    "Showing 5–5 of 5 projects",
  );
  await expect(
    page.getByRole("button", { name: "Next project page" }),
  ).toBeDisabled();
  await expect(
    page.getByRole("button", { name: "Project page 2", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await expect(page.locator(".projects-heading-anchor")).toBeFocused();
  await expect(
    page.getByRole("heading", { name: "Projects", exact: true }),
  ).toBeInViewport();
  await page.getByRole("button", { name: "Previous project page" }).focus();
  await page.keyboard.press("Enter");
  await expect(cards).toHaveCount(4);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("experience details work with the keyboard and all assets load", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  const firstExperience = page.locator(".experience-item").first();
  await expect(firstExperience).toHaveAttribute("open", "");
  await firstExperience.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(firstExperience).not.toHaveAttribute("open");
  const internship = page.locator(".experience-item").nth(1);
  await internship.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(internship.getByText(/Built a cross-platform/)).toBeVisible();
  await expect(page.locator(".education-item")).toHaveCount(2);
  await expect(
    page.getByRole("link", { name: "Get in touch" }),
  ).toHaveAttribute("href", "mailto:minhnc2005@gmail.com");
  for (const img of await page.locator("main img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate(
          (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await page.getByRole("link", { name: "Back to top", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
  await page.screenshot({
    path: `test-results/full-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

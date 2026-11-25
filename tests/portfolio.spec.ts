import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("mobile menu closes with Escape from both trigger and links", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  const toggle = page.getByRole("button", { name: /navigation/ });
  for (const focusLink of [false, true]) {
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    if (focusLink)
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "Projects" })
        .focus();
    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toBeFocused();
  }
});

test("dialog padding stays open; backdrop, Escape and close button dismiss and restore focus", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const trigger = page
    .getByRole("button", { name: "View project", exact: true })
    .first();
  for (const dismiss of ["backdrop", "escape", "button"]) {
    await trigger.click();
    const dialog = page.getByRole("dialog", { name: "Bharatnova" });
    await expect(dialog).toBeVisible();
    await expect(page.locator("body")).toHaveClass(/overflow-hidden/);
    const bounds = await dialog.boundingBox();
    if (!bounds) throw new Error("Dialog has no bounds");
    await page.mouse.click(bounds.x + 8, bounds.y + bounds.height / 2);
    await expect(dialog).toBeVisible();
    if (dismiss === "backdrop") await page.mouse.click(2, 2);
    else if (dismiss === "escape") await page.keyboard.press("Escape");
    else
      await dialog
        .getByRole("button", { name: "Close project details" })
        .click();
    await expect(dialog).not.toBeVisible();
    await expect(page.locator("body")).not.toHaveClass(/overflow-hidden/);
    await expect(trigger).toBeFocused();
  }
});

test("responsive layouts, anchors, project expansion and resume remain functional", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 375, 425, 640, 768, 900, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await expect
      .poll(() =>
        page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      )
      .toBe(true);
  }
  await expect(page.locator("img")).toHaveJSProperty("naturalWidth", 384);
  await page.getByRole("button", { name: "View all projects" }).click();
  await expect(page.locator("#project-grid article")).toHaveCount(4);
  for (const trigger of await page
    .getByRole("button", { name: "View project", exact: true })
    .all()) {
    await trigger.click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
  }
  const ids = await page
    .locator("dialog")
    .evaluateAll((elements) =>
      elements.map((e) => e.getAttribute("aria-labelledby")),
    );
  expect(new Set(ids).size).toBe(4);
  await page.getByRole("button", { name: "Show featured projects" }).click();
  await expect(page.locator("#project-grid article")).toHaveCount(3);
  for (const anchor of await page.locator('a[href^="#"]').all()) {
    const href = await anchor.getAttribute("href");
    await expect(page.locator(href!)).toHaveCount(1);
  }
  const downloadEvent = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download resume" }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe("CV_Ashutosh_Sinha.pdf");
  expect(await download.failure()).toBeNull();
  await expect(
    page.getByRole("link", { name: "Get in touch" }),
  ).toHaveAttribute("href", "mailto:aashusin0015@gmail.com");
  expect(errors).toEqual([]);
});

test("reveals support dynamic cards, keyboard focus, and reduced-motion changes", async ({
  page,
}) => {
  await expect(page.locator('[data-revealed="false"]').first()).toBeAttached();
  const target = page.locator('#skills [data-reveal="left"]').first();
  await target.scrollIntoViewIfNeeded();
  await expect(target).toHaveAttribute("data-revealed", "true");
  await expect(target).toHaveCSS("opacity", "1");
  await page.getByRole("button", { name: "View all projects" }).click();
  const card = page.locator("#project-grid article").last();
  await card.scrollIntoViewIfNeeded();
  await expect(card).toHaveAttribute("data-revealed", "true");
  await page.getByRole("button", { name: "Show featured projects" }).click();
  await page.getByRole("button", { name: "View all projects" }).click();
  await card.scrollIntoViewIfNeeded();
  await expect(card).toHaveAttribute("data-revealed", "true");
  await page.reload();
  await page.locator("footer a").first().focus();
  await expect(page.locator("footer > div").first()).toHaveAttribute(
    "data-revealed",
    "true",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator('[data-revealed="false"]')).toHaveCount(0);
  await page.reload();
  await expect(page.locator('[data-revealed="true"]').first()).toBeAttached();
  await expect(page.locator('[data-revealed="false"]')).toHaveCount(0);
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
});

test("latest clipboard request wins and feedback resets after four seconds", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.evaluate(() => {
    const pending: Array<{ resolve: () => void; reject: () => void }> = [];
    Object.defineProperty(window, "clipboardRequests", { value: pending });
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: () =>
          new Promise<void>((resolve, reject) =>
            pending.push({
              resolve,
              reject: () => reject(new Error("Denied")),
            }),
          ),
      },
    });
  });
  const copy = page.getByRole("button", { name: "Copy email address" });
  await copy.click();
  await copy.click();
  await page.evaluate(() =>
    (
      window as unknown as { clipboardRequests: Array<{ resolve: () => void }> }
    ).clipboardRequests[1].resolve(),
  );
  await expect(page.getByRole("status")).toHaveText(
    "Email copied to clipboard.",
  );
  await page.evaluate(() =>
    (
      window as unknown as { clipboardRequests: Array<{ reject: () => void }> }
    ).clipboardRequests[0].reject(),
  );
  await expect(page.getByRole("status")).toHaveText(
    "Email copied to clipboard.",
  );
  await expect(page.getByRole("status")).toBeEmpty({ timeout: 6000 });
  await copy.click();
  await page.evaluate(() =>
    (
      window as unknown as { clipboardRequests: Array<{ reject: () => void }> }
    ).clipboardRequests[2].reject(),
  );
  await expect(page.getByRole("status")).toContainText("Copy unavailable");
});

test("page and project dialog pass automated accessibility checks", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator('[data-revealed="false"]')).toHaveCount(0);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
  await page
    .getByRole("button", { name: "View project", exact: true })
    .first()
    .click();
  const dialogResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(dialogResults.violations).toEqual([]);
});

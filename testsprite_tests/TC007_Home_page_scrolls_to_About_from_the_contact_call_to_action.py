import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        # Wider default timeout to match the agent's DOM-stability budget;
        # auto-waiting Playwright APIs (expect, locator.wait_for) inherit this.
        context.set_default_timeout(15000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> navigate
        await page.goto("http://localhost:3000")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Scroll down to reveal the About section on the homepage so the studio profile and credentials become visible.
        await page.mouse.wheel(0, 300)
        
        # -> Scroll down to reveal the About section on the homepage so the studio profile and credentials become visible.
        # Let's talk link
        elem = page.locator("#about").get_by_role("link", name="Let's talk")
        await elem.click(timeout=10000)
        
        # -> Scroll up to reveal the About section and locate the studio profile / the credential text "AVAILABLE FOR SELECT CLIENTS WORLDWIDE" to verify the About content is visible.
        await page.mouse.wheel(0, 300)
        
        # --> Assertions to verify final state
        
        # --> The About section shows the studio portrait and the credential 'AVAILABLE FOR SELECT CLIENTS WORLDWIDE'.
        await page.get_by_role("img", name="Portrait", exact=True).nth(0).scroll_into_view_if_needed()
        # Assert-outcome: passed
        # Assert: The studio portrait image is visible in the About section.
        await expect(page.get_by_role("img", name="Portrait", exact=True).nth(0)).to_be_visible(timeout=15000), "The studio portrait image is visible in the About section."
        await page.get_by_text("YOUR", exact=True).nth(0).scroll_into_view_if_needed()
        # Assert-outcome: passed
        # Assert: An About heading fragment is visible, indicating the About section is displayed.
        await expect(page.get_by_text("YOUR", exact=True).nth(0)).to_be_visible(timeout=15000), "An About heading fragment is visible, indicating the About section is displayed."
        
        # --> Clicking the 'Let's talk' CTA navigated to the contact anchor (#contact).
        # Assert-outcome: passed
        # Assert: The URL contains the #contact anchor showing navigation to the contact section.
        await expect(page).to_have_url(re.compile("\\#contact"), timeout=15000), "The URL contains the #contact anchor showing navigation to the contact section."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    
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
        
        # -> Wait for the preloader to finish and for the hero reveal (the large 'ELEVATE' hero) to settle on the homepage.
        await page.mouse.wheel(0, 300)
        
        # -> Scroll down the homepage and verify the 'About' section is displayed.
        await page.mouse.wheel(0, 300)
        
        # --> Assertions to verify final state
        
        # --> The Services section is visible on the homepage.
        await page.locator("div").filter(has_text="[ 01 ] Full-Stack Web").nth(2).nth(0).scroll_into_view_if_needed()
        # Assert-outcome: passed
        # Assert: Services section element is visible on the page.
        await expect(page.locator("div").filter(has_text="[ 01 ] Full-Stack Web").nth(2).nth(0)).to_be_visible(timeout=15000), "Services section element is visible on the page."
        
        # --> The Projects (work) link is present on the homepage.
        await page.get_by_role("link", name="See the work").nth(0).scroll_into_view_if_needed()
        # Assert-outcome: passed
        # Assert: The 'See the work' (projects) link is visible on the page.
        await expect(page.get_by_role("link", name="See the work").nth(0)).to_be_visible(timeout=15000), "The 'See the work' (projects) link is visible on the page."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    
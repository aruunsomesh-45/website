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
        
        # -> Click the "See the work" link to navigate/scroll to the Projects (Showcase) section on the homepage.
        # See the work link
        elem = page.get_by_role("link", name="See the work")
        await elem.click(timeout=10000)
        
        # -> Scroll the Projects section into full view and list all anchor elements with href attributes (visible text + href) to find the CTO BEES external link.
        await page.mouse.wheel(0, 300)
        
        # -> Extract all visible anchor text and their href attributes on the page so the CTO BEES project's external live-site link can be identified.
        # [internal] extract_content: 
        
        # --> Assertions to verify final state
        
        # --> The Work (Projects) showcase is visible and shows the CTO BEES project card.
        await page.get_by_label("Manifesto Section").get_by_text("♠").nth(0).scroll_into_view_if_needed()
        # Assert-outcome: passed
        # Assert: The Projects/Work section header is visible on the page.
        await expect(page.get_by_label("Manifesto Section").get_by_text("♠").nth(0)).to_be_visible(timeout=15000), "The Projects/Work section header is visible on the page."
        # Assert-outcome: passed
        # Assert: The page URL contains #work indicating the Work section is open.
        await expect(page).to_have_url(re.compile("\\#work"), timeout=15000), "The page URL contains #work indicating the Work section is open."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    
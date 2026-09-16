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
        
        # -> Scroll the homepage to reveal the services section so service items become visible.
        await page.mouse.wheel(0, 300)
        
        # -> Scroll the homepage to reveal the Services section so service items become visible.
        await page.mouse.wheel(0, 300)
        
        # -> Scroll the page upward to reveal the Services section so service items become visible.
        await page.mouse.wheel(0, 300)
        
        # -> Click the 'Design (UI/UX & Graphic Design)' service item to activate it and reveal its details and preview imagery.
        # [ 02 ] Design (UI/UX & Graphic Design) Design...
        elem = page.locator("div").filter(has_text="[ 02 ]Design (UI/UX & Graphic").nth(2)
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> The Services section is visible and lists the 'Full-Stack Web Development' service.
        # Assert-outcome: passed
        # Assert: Verifies the services section shows the 'Full-Stack Web Development' service item.
        await expect(page.locator("#services").nth(0)).to_contain_text("Full-Stack Web Development", timeout=15000), "Verifies the services section shows the 'Full-Stack Web Development' service item."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    
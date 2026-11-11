# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: windowtwo.spec.js >> windowhandling
- Location: tests\windowtwo.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//button[@class="btn btn-primary"])')
    - locator resolved to <button onclick="newwindow()" class="btn btn-primary">click</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    41 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
        - img "image not displaying" [ref=e8]
      - heading "Automation Demo Site" [level=1] [ref=e10]
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16] [cursor=pointer]:
            - /url: Index.html
        - listitem [ref=e17]:
          - link "Register" [ref=e18] [cursor=pointer]:
            - /url: Register.html
        - listitem [ref=e19]:
          - link "WebTable" [ref=e20] [cursor=pointer]:
            - /url: WebTable.html
        - listitem [ref=e21]:
          - link "SwitchTo" [ref=e22] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link "Widgets" [ref=e25] [cursor=pointer]:
            - /url: Widgets.html
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link "Interactions" [ref=e28] [cursor=pointer]:
            - /url: Interactions.html
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link "Video" [ref=e31] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link "WYSIWYG" [ref=e34] [cursor=pointer]:
            - /url: WYSIWYG.html
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link "More" [ref=e37] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link "Practice Site" [ref=e40] [cursor=pointer]:
            - /url: http://practice.automationtesting.in/
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Open New Tabbed Windows" [ref=e48]:
          - /url: "#Tabbed"
      - listitem [ref=e49]:
        - link "Open New Seperate Windows" [ref=e50] [cursor=pointer]:
          - /url: "#Seperate"
      - listitem [ref=e51]:
        - link "Open Seperate Multiple Windows" [ref=e52] [cursor=pointer]:
          - /url: "#Multiple"
    - generic [ref=e53]:
      - paragraph [ref=e54]:
        - text: If you set the target attribute to "_blank" , the link will open in a new browser window or a new tab
        - link "Compare Browsers" [ref=e55] [cursor=pointer]
      - link [ref=e59] [cursor=pointer]:
        - /url: http://www.selenium.dev
        - button "click" [ref=e60]
  - generic [ref=e62]:
    - insertion [ref=e65]:
      - generic [ref=e68]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e70]: Discover more
        - link "Test automation software" [ref=e71] [cursor=pointer]
        - link "Automation testing courses" [ref=e76] [cursor=pointer]
        - link "Frameset window tools" [ref=e81] [cursor=pointer]
        - link "Automation demo site" [ref=e86] [cursor=pointer]
        - link "Automation software tools" [ref=e91] [cursor=pointer]
        - link "Home automation systems" [ref=e96] [cursor=pointer]
        - link "Register automation service" [ref=e101] [cursor=pointer]
        - link "Toggle navigation solutions" [ref=e106] [cursor=pointer]
    - insertion [ref=e113]:
      - generic [ref=e116]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e118]: Discover more
        - link "Software testing tools" [ref=e119] [cursor=pointer]
        - link "Source Robotics" [ref=e124] [cursor=pointer]
        - link "Try Cloud Tools" [ref=e129] [cursor=pointer]
        - link "Try Dev Tools" [ref=e134] [cursor=pointer]
        - link "QA automation services" [ref=e139] [cursor=pointer]
        - link "Testing frameworks" [ref=e144] [cursor=pointer]
        - link "Automated testing platforms" [ref=e149] [cursor=pointer]
        - link "Business process automation" [ref=e154] [cursor=pointer]
    - insertion [ref=e161]:
      - generic [ref=e164]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e166]: Discover more
        - link "Workflow automation tools" [ref=e167] [cursor=pointer]
        - link "Robotics process automation" [ref=e172] [cursor=pointer]
        - link "Compare Browsers" [ref=e177] [cursor=pointer]
        - link "Compare Broadband" [ref=e182] [cursor=pointer]
        - link "Build a Website" [ref=e187] [cursor=pointer]
        - link "Digital transformation services" [ref=e192] [cursor=pointer]
        - link "Test Keyboards" [ref=e197] [cursor=pointer]
        - link "Cloud automation services" [ref=e202] [cursor=pointer]
    - insertion [ref=e209]:
      - generic [ref=e212]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e214]: Discover more
        - link "API testing tools" [ref=e215] [cursor=pointer]
        - link "Browse Reference" [ref=e220] [cursor=pointer]
        - link "Learn a Language" [ref=e225] [cursor=pointer]
        - link "Track Pregnancy" [ref=e230] [cursor=pointer]
        - link "Secure Networks" [ref=e235] [cursor=pointer]
        - link "Audit Security" [ref=e240] [cursor=pointer]
        - link "Test automation software" [ref=e245] [cursor=pointer]
        - link "Automation testing courses" [ref=e250] [cursor=pointer]
    - contentinfo [ref=e256]:
      - generic [ref=e258]:
        - generic [ref=e259]:
          - text: "\"@ 2016\""
          - link "Automation Testing" [ref=e260] [cursor=pointer]:
            - /url: "#"
          - text: "\"All Rights Reserved.\""
        - generic [ref=e261]:
          - link "" [ref=e262] [cursor=pointer]:
            - /url: https://www.facebook.com/automationtesting2016/
          - link "" [ref=e264] [cursor=pointer]:
            - /url: https://twitter.com/krishnasakinala
          - link "" [ref=e266] [cursor=pointer]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
          - link "" [ref=e268] [cursor=pointer]:
            - /url: https://plus.google.com/105286300926085335367
          - link "" [ref=e270] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | test('windowhandling',async ({context})=>{
  3  |     const page1 = await context.newPage()
  4  |     await page1.goto('https://demo.automationtesting.in/Windows.html')
  5  | 
  6  |     // new window
  7  |     // await page.locator("//a[contains(text(),'open new window')]").click()
  8  | 
> 9  |     const [newPage1] = await Promise.all([context.waitForEvent('page'),page1.locator('(//button[@class="btn btn-primary"])').click()])
     |                                                                                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  10 | const newpageUrl = await newPage1.url()
  11 | console.log('newpage url', newpageUrl)
  12 | const newpageTitle = await newPage1.title()
  13 | console.log('newpagetitle',newpageTitle)
  14 | await newPage1.goto('https://www.selenium.dev/')
  15 | // await newPage1.locator("//span[text()='Projects']").click()
  16 | // const textofproject = await newPage1.locator('//h1[@class="d-1"]').textContent()
  17 | // console.log('the text retervied',textofproject)
  18 | await page1.bringToFront()
  19 | const bringbackpage = await page1.locator('//div[@class="col-sm-8 col-xs-8 col-md-8"]/h1').textContent()
  20 | console.log('bringbackpage',bringbackpage)
  21 | 
  22 | 
  23 | })
  24 | 
```
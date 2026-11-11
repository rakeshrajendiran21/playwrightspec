# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: re.spec.js >> full
- Location: tests\re.spec.js:2:5

# Error details

```
Error: locator.getAttribute: Error: strict mode violation: locator('//input[contains(@class,"form-control ng-pristine ng-untouched ng-invalid")]') resolved to 3 elements:
    1) <input type="tel" required="" ng-model="Phone" pattern="^\d{10}$" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-pattern"/> aka locator('input[type="tel"]')
    2) <input required="" minlength="6" type="password" id="firstpassword" ng-model="Password" onblur="validatepattern(this)" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength"/> aka locator('#firstpassword')
    3) <input required="" type="password" id="secondpassword" ng-model="CPassword" onblur="validatepasswords(this)" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"/> aka locator('#secondpassword')

Call log:
  - waiting for locator('//input[contains(@class,"form-control ng-pristine ng-untouched ng-invalid")]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7]:
        - /url: http://www.automationtesting.in
        - img "image not displaying" [ref=e8]
      - heading "Automation Demo Site" [level=1] [ref=e10]
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16]:
            - /url: Index.html
        - listitem [ref=e17]:
          - link "Register" [ref=e18]:
            - /url: Register.html
        - listitem [ref=e19]:
          - link "WebTable" [ref=e20]:
            - /url: WebTable.html
        - listitem [ref=e21]:
          - link "SwitchTo" [ref=e22]:
            - /url: SwitchTo.html
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link "Widgets" [ref=e25]:
            - /url: Widgets.html
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link "Interactions" [ref=e28]:
            - /url: Interactions.html
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link "Video" [ref=e31]:
            - /url: SwitchTo.html
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link "WYSIWYG" [ref=e34]:
            - /url: WYSIWYG.html
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link "More" [ref=e37]:
            - /url: "#"
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link "Practice Site" [ref=e40]:
            - /url: http://practice.automationtesting.in/
  - generic [ref=e42]:
    - heading "Register" [level=2] [ref=e43]
    - generic [ref=e44]:
      - insertion [ref=e46]:
        - iframe [ref=e48]:
          - generic [ref=f2e1]:
            - generic [ref=f2e7]:
              - generic [ref=f2e8]:
                - generic "Reserve Bank of India" [ref=f2e10]:
                  - link "நாமினி விவரம் பதிவு" [ref=f2e11] [cursor=pointer]:
                    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CduWXevXzaq7qIMWQz7sPmpCcuQHrgKLiigGDxeyBshazkB8QASCPvrcvYOWCgIDYDqABxLyUuj7IAQGpAk5QmleD3EY-qAMByAPLBKoE8QFP0C0JhdEjoS6iy66aVoC5pl3yM8--XaVEBUjKWUQ0Ckfw8A1kuREwYetSAqCXcosXmNNftLELrFbCMgi1tPp1j8wV3Orzq9DWp9eO6wS82uR0P4Y-qlA-yJNBNy7RTsiXlUfCtPCJbsu0zL34O0KQuDJ9eC74mgd_OTViLtUt4tYvlB1s-xCZsHcyMCxaLlrwIWGQ6z4S4f6RRBLVmM7lPcu5Z06MUiiPAWGpRXIoOaOZAwCOwjJZj-ax5sawVeHM272oMWApFTQ5pH3N5YMzgZEMsBkjhi19E4KPtJ2HW9GUvo3p7rQgaG2Y3sX_BKZUwASe5_H_6gWIBbGk_v9agAfE9OSZGagHqeuxAqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AYSL39wTpYxcnTo5D_lwNgAbEJB2GT1sQMcpuACgGYCwHICwGiDAsqBgoE9vKxApABAaoNAklOyA0B6g0TCLGV1KOQ_5cDFUXIcwEdGggnF4gOCdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAu5OGAEiAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIro_Uo5D_lwMVRchzAR0aCCcXEAEYASAAEgLcNfD_BwE&num=1&cid=CAQSoAIAogo4dXsInMkTMKQzKi4NtXfUkXkkRDtMYdD5KTayeKLZA3EhPxVqUV5rDErabfqkWiJ5wPf9Ir_cHaT1d5yOEu5C0sRQbXgqOJJZcUOvpKMzai2781X8hfF1tGOHZacypeSLq7p5zoU1-4obp3ig33cq_F90-joTXNckCqAYL3iDbLfo3gvp62WvTwLLdKw4FeFzaNlr5QTZD2I6GuaCO1PuMNSQDyp6vbx-XkH2EMWCvLLIDP5zVAa-62hjwKXpEgfV1MDd1bKaNYPUWahDLYSkzrAJTCzx_D99YC3UIRDmNmYxoztHmhhU7zpBM78lYQ4_HIpXrnwRSCBgwtiNvQ6LKtZG4jeZfkHUpFzFYl5XDryq5DVQEmVTM1kKHM4YAQ&sig=AOD64_3FeOQD-70cRWt_2MpdyGprBu_4uw&rf=1&nb=0&adurl=https://rbikehtahai.rbi.org.in/nomination-and-settlement.html%3Fgad_source%3D5%26gad_campaignid%3D24427598385
                    - text: நாமினி விவரம்பதிவு
                - link "வங்கிக் கணக்குகள், லாக்கர்களுக்கு ஆன்லைன் அல்லது ஆஃப்லைனில் நாமினிகளைப் பதிவு செய்யுங்கள்." [ref=f2e14] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CduWXevXzaq7qIMWQz7sPmpCcuQHrgKLiigGDxeyBshazkB8QASCPvrcvYOWCgIDYDqABxLyUuj7IAQGpAk5QmleD3EY-qAMByAPLBKoE8QFP0C0JhdEjoS6iy66aVoC5pl3yM8--XaVEBUjKWUQ0Ckfw8A1kuREwYetSAqCXcosXmNNftLELrFbCMgi1tPp1j8wV3Orzq9DWp9eO6wS82uR0P4Y-qlA-yJNBNy7RTsiXlUfCtPCJbsu0zL34O0KQuDJ9eC74mgd_OTViLtUt4tYvlB1s-xCZsHcyMCxaLlrwIWGQ6z4S4f6RRBLVmM7lPcu5Z06MUiiPAWGpRXIoOaOZAwCOwjJZj-ax5sawVeHM272oMWApFTQ5pH3N5YMzgZEMsBkjhi19E4KPtJ2HW9GUvo3p7rQgaG2Y3sX_BKZUwASe5_H_6gWIBbGk_v9agAfE9OSZGagHqeuxAqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AYSL39wTpYxcnTo5D_lwNgAbEJB2GT1sQMcpuACgGYCwHICwGiDAsqBgoE9vKxApABAaoNAklOyA0B6g0TCLGV1KOQ_5cDFUXIcwEdGggnF4gOCdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAu5OGAEiAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIro_Uo5D_lwMVRchzAR0aCCcXEAEYASAAEgLcNfD_BwE&num=1&cid=CAQSoAIAogo4dXsInMkTMKQzKi4NtXfUkXkkRDtMYdD5KTayeKLZA3EhPxVqUV5rDErabfqkWiJ5wPf9Ir_cHaT1d5yOEu5C0sRQbXgqOJJZcUOvpKMzai2781X8hfF1tGOHZacypeSLq7p5zoU1-4obp3ig33cq_F90-joTXNckCqAYL3iDbLfo3gvp62WvTwLLdKw4FeFzaNlr5QTZD2I6GuaCO1PuMNSQDyp6vbx-XkH2EMWCvLLIDP5zVAa-62hjwKXpEgfV1MDd1bKaNYPUWahDLYSkzrAJTCzx_D99YC3UIRDmNmYxoztHmhhU7zpBM78lYQ4_HIpXrnwRSCBgwtiNvQ6LKtZG4jeZfkHUpFzFYl5XDryq5DVQEmVTM1kKHM4YAQ&sig=AOD64_3FeOQD-70cRWt_2MpdyGprBu_4uw&rf=1&nb=7&adurl=https://rbikehtahai.rbi.org.in/nomination-and-settlement.html%3Fgad_source%3D5%26gad_campaignid%3D24427598385
                  - text: வங்கிக்கணக்குகள்,லாக்கர்களுக்குஆன்லைன்அல்லதுஆஃப்லைனில்நாமினிகளைப்பதிவுசெய்யுங்கள்.
                - generic "Reserve Bank of India" [ref=f2e15]:
                  - link "Reserve Bank of India" [ref=f2e16] [cursor=pointer]:
                    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CduWXevXzaq7qIMWQz7sPmpCcuQHrgKLiigGDxeyBshazkB8QASCPvrcvYOWCgIDYDqABxLyUuj7IAQGpAk5QmleD3EY-qAMByAPLBKoE8QFP0C0JhdEjoS6iy66aVoC5pl3yM8--XaVEBUjKWUQ0Ckfw8A1kuREwYetSAqCXcosXmNNftLELrFbCMgi1tPp1j8wV3Orzq9DWp9eO6wS82uR0P4Y-qlA-yJNBNy7RTsiXlUfCtPCJbsu0zL34O0KQuDJ9eC74mgd_OTViLtUt4tYvlB1s-xCZsHcyMCxaLlrwIWGQ6z4S4f6RRBLVmM7lPcu5Z06MUiiPAWGpRXIoOaOZAwCOwjJZj-ax5sawVeHM272oMWApFTQ5pH3N5YMzgZEMsBkjhi19E4KPtJ2HW9GUvo3p7rQgaG2Y3sX_BKZUwASe5_H_6gWIBbGk_v9agAfE9OSZGagHqeuxAqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AYSL39wTpYxcnTo5D_lwNgAbEJB2GT1sQMcpuACgGYCwHICwGiDAsqBgoE9vKxApABAaoNAklOyA0B6g0TCLGV1KOQ_5cDFUXIcwEdGggnF4gOCdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAu5OGAEiAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIro_Uo5D_lwMVRchzAR0aCCcXEAEYASAAEgLcNfD_BwE&num=1&cid=CAQSoAIAogo4dXsInMkTMKQzKi4NtXfUkXkkRDtMYdD5KTayeKLZA3EhPxVqUV5rDErabfqkWiJ5wPf9Ir_cHaT1d5yOEu5C0sRQbXgqOJJZcUOvpKMzai2781X8hfF1tGOHZacypeSLq7p5zoU1-4obp3ig33cq_F90-joTXNckCqAYL3iDbLfo3gvp62WvTwLLdKw4FeFzaNlr5QTZD2I6GuaCO1PuMNSQDyp6vbx-XkH2EMWCvLLIDP5zVAa-62hjwKXpEgfV1MDd1bKaNYPUWahDLYSkzrAJTCzx_D99YC3UIRDmNmYxoztHmhhU7zpBM78lYQ4_HIpXrnwRSCBgwtiNvQ6LKtZG4jeZfkHUpFzFYl5XDryq5DVQEmVTM1kKHM4YAQ&sig=AOD64_3FeOQD-70cRWt_2MpdyGprBu_4uw&rf=1&nb=1&adurl=https://rbikehtahai.rbi.org.in/nomination-and-settlement.html%3Fgad_source%3D5%26gad_campaignid%3D24427598385
              - link "Learn More" [ref=f2e19] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CduWXevXzaq7qIMWQz7sPmpCcuQHrgKLiigGDxeyBshazkB8QASCPvrcvYOWCgIDYDqABxLyUuj7IAQGpAk5QmleD3EY-qAMByAPLBKoE8QFP0C0JhdEjoS6iy66aVoC5pl3yM8--XaVEBUjKWUQ0Ckfw8A1kuREwYetSAqCXcosXmNNftLELrFbCMgi1tPp1j8wV3Orzq9DWp9eO6wS82uR0P4Y-qlA-yJNBNy7RTsiXlUfCtPCJbsu0zL34O0KQuDJ9eC74mgd_OTViLtUt4tYvlB1s-xCZsHcyMCxaLlrwIWGQ6z4S4f6RRBLVmM7lPcu5Z06MUiiPAWGpRXIoOaOZAwCOwjJZj-ax5sawVeHM272oMWApFTQ5pH3N5YMzgZEMsBkjhi19E4KPtJ2HW9GUvo3p7rQgaG2Y3sX_BKZUwASe5_H_6gWIBbGk_v9agAfE9OSZGagHqeuxAqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AYSL39wTpYxcnTo5D_lwNgAbEJB2GT1sQMcpuACgGYCwHICwGiDAsqBgoE9vKxApABAaoNAklOyA0B6g0TCLGV1KOQ_5cDFUXIcwEdGggnF4gOCdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAu5OGAEiAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIro_Uo5D_lwMVRchzAR0aCCcXEAEYASAAEgLcNfD_BwE&num=1&cid=CAQSoAIAogo4dXsInMkTMKQzKi4NtXfUkXkkRDtMYdD5KTayeKLZA3EhPxVqUV5rDErabfqkWiJ5wPf9Ir_cHaT1d5yOEu5C0sRQbXgqOJJZcUOvpKMzai2781X8hfF1tGOHZacypeSLq7p5zoU1-4obp3ig33cq_F90-joTXNckCqAYL3iDbLfo3gvp62WvTwLLdKw4FeFzaNlr5QTZD2I6GuaCO1PuMNSQDyp6vbx-XkH2EMWCvLLIDP5zVAa-62hjwKXpEgfV1MDd1bKaNYPUWahDLYSkzrAJTCzx_D99YC3UIRDmNmYxoztHmhhU7zpBM78lYQ4_HIpXrnwRSCBgwtiNvQ6LKtZG4jeZfkHUpFzFYl5XDryq5DVQEmVTM1kKHM4YAQ&sig=AOD64_3FeOQD-70cRWt_2MpdyGprBu_4uw&rf=1&nb=8&adurl=https://rbikehtahai.rbi.org.in/nomination-and-settlement.html%3Fgad_source%3D5%26gad_campaignid%3D24427598385
            - generic [ref=f2e27] [cursor=pointer]
            - button [ref=f2e32] [cursor=pointer]
            - iframe
      - generic [ref=e50]:
        - generic [ref=e51]:
          - generic [ref=e52]: Full Name*
          - textbox "First Name" [ref=e54]: Rakesh
          - textbox "Last Name" [ref=e56]: sharma
        - generic [ref=e57]:
          - generic [ref=e58]: Address
          - textbox [active] [ref=e60]: tiruvannamalai
        - generic [ref=e61]:
          - generic [ref=e62]: Email address*
          - textbox [ref=e64]
        - generic [ref=e65]:
          - generic [ref=e66]: Phone*
          - textbox [ref=e68]
        - generic [ref=e69]:
          - generic [ref=e70]: Gender*
          - generic [ref=e71]:
            - generic [ref=e72]:
              - radio "Male" [ref=e73]
              - text: Male
            - generic [ref=e74]:
              - radio "FeMale" [ref=e75]
              - text: FeMale
        - generic [ref=e76]:
          - generic [ref=e77]: Hobbies
          - generic [ref=e78]:
            - generic [ref=e79]:
              - checkbox [ref=e80]
              - generic [ref=e81]: Cricket
            - generic [ref=e82]:
              - checkbox [ref=e83]
              - generic [ref=e84]: Movies
            - generic [ref=e85]:
              - checkbox [ref=e86]
              - generic [ref=e87]: Hockey
        - generic [ref=e88]: Languages
        - generic [ref=e93]:
          - generic [ref=e94]: Skills
          - combobox [ref=e96]:
            - option "Select Skills" [selected]
            - option "Adobe InDesign"
            - option "Adobe Photoshop"
            - option "Analytics"
            - option "Android"
            - option "APIs"
            - option "Art Design"
            - option "AutoCAD"
            - option "Backup Management"
            - option "C"
            - option "C++"
            - option "Certifications"
            - option "Client Server"
            - option "Client Support"
            - option "Configuration"
            - option "Content Managment"
            - option "Content Management Systems (CMS)"
            - option "Corel Draw"
            - option "Corel Word Perfect"
            - option "CSS"
            - option "Data Analytics"
            - option "Desktop Publishing"
            - option "Design"
            - option "Diagnostics"
            - option "Documentation"
            - option "End User Support"
            - option "Email"
            - option "Engineering"
            - option "Excel"
            - option "FileMaker Pro"
            - option "Fortran"
            - option "HTML"
            - option "Implementation"
            - option "Installation"
            - option "Internet"
            - option "iOS"
            - option "iPhone"
            - option "Linux"
            - option "Java"
            - option "Javascript"
            - option "Mac"
            - option "Matlab"
            - option "Maya"
            - option "Microsoft Excel"
            - option "Microsoft Office"
            - option "Microsoft Outlook"
            - option "Microsoft Publisher"
            - option "Microsoft Word"
            - option "Microsoft Visual"
            - option "Mobile"
            - option "MySQL"
            - option "Networks"
            - option "Open Source Software"
            - option "Oracle"
            - option "Perl"
            - option "PHP"
            - option "Presentations"
            - option "Processing"
            - option "Programming"
            - option "PT Modeler"
            - option "Python"
            - option "QuickBooks"
            - option "Ruby"
            - option "Shade"
            - option "Software"
            - option "Spreadsheet"
            - option "SQL"
            - option "Support"
            - option "Systems Administration"
            - option "Tech Support"
            - option "Troubleshooting"
            - option "Unix"
            - option "UI / UX"
            - option "Web Page Design"
            - option "Windows"
            - option "Word Processing"
            - option "XML"
            - option "XHTML"
        - generic [ref=e97]:
          - generic [ref=e98]: Country*
          - combobox [ref=e100]:
            - option "Select Country" [selected]
        - generic [ref=e101]:
          - generic [ref=e102]: "Select Country :"
          - generic [ref=e103]:
            - combobox [aria-hidden] [ref=e104]
            - combobox [ref=e107] [cursor=pointer]
        - generic [ref=e108]:
          - generic [ref=e109]: Date Of Birth
          - combobox [ref=e111]:
            - option "year" [selected]
            - option "1916"
            - option "1917"
            - option "1918"
            - option "1919"
            - option "1920"
            - option "1921"
            - option "1922"
            - option "1923"
            - option "1924"
            - option "1925"
            - option "1926"
            - option "1927"
            - option "1928"
            - option "1929"
            - option "1930"
            - option "1931"
            - option "1932"
            - option "1933"
            - option "1934"
            - option "1935"
            - option "1936"
            - option "1937"
            - option "1938"
            - option "1939"
            - option "1940"
            - option "1941"
            - option "1942"
            - option "1943"
            - option "1944"
            - option "1945"
            - option "1946"
            - option "1947"
            - option "1948"
            - option "1949"
            - option "1950"
            - option "1951"
            - option "1952"
            - option "1953"
            - option "1954"
            - option "1955"
            - option "1956"
            - option "1957"
            - option "1958"
            - option "1959"
            - option "1960"
            - option "1961"
            - option "1962"
            - option "1963"
            - option "1964"
            - option "1965"
            - option "1966"
            - option "1967"
            - option "1968"
            - option "1969"
            - option "1970"
            - option "1971"
            - option "1972"
            - option "1973"
            - option "1974"
            - option "1975"
            - option "1976"
            - option "1977"
            - option "1978"
            - option "1979"
            - option "1980"
            - option "1981"
            - option "1982"
            - option "1983"
            - option "1984"
            - option "1985"
            - option "1986"
            - option "1987"
            - option "1988"
            - option "1989"
            - option "1990"
            - option "1991"
            - option "1992"
            - option "1993"
            - option "1994"
            - option "1995"
            - option "1996"
            - option "1997"
            - option "1998"
            - option "1999"
            - option "2000"
            - option "2001"
            - option "2002"
            - option "2003"
            - option "2004"
            - option "2005"
            - option "2006"
            - option "2007"
            - option "2008"
            - option "2009"
            - option "2010"
            - option "2011"
            - option "2012"
            - option "2013"
            - option "2014"
            - option "2015"
          - combobox [ref=e113]:
            - option "Month" [selected]
            - option "January"
            - option "February"
            - option "March"
            - option "April"
            - option "May"
            - option "June"
            - option "July"
            - option "August"
            - option "September"
            - option "October"
            - option "November"
            - option "December"
          - combobox [ref=e115]:
            - option "Day" [selected]
            - option "1"
            - option "2"
            - option "3"
            - option "4"
            - option "5"
            - option "6"
            - option "7"
            - option "8"
            - option "9"
            - option "10"
            - option "11"
            - option "12"
            - option "13"
            - option "14"
            - option "15"
            - option "16"
            - option "17"
            - option "18"
            - option "19"
            - option "20"
            - option "21"
            - option "22"
            - option "23"
            - option "24"
            - option "25"
            - option "26"
            - option "27"
            - option "28"
            - option "29"
            - option "30"
            - option "31"
        - generic [ref=e116]:
          - generic [ref=e117]: Password
          - textbox [ref=e119]
        - generic [ref=e120]:
          - generic [ref=e121]: Confirm Password
          - textbox [ref=e123]
        - generic [ref=e124]:
          - button "Submit" [ref=e125] [cursor=pointer]
          - button "Refresh" [ref=e126] [cursor=pointer]
      - generic [ref=e127]:
        - generic [ref=e128]: Photo
        - button "Choose File" [ref=e132]
  - contentinfo [ref=e133]:
    - generic [ref=e135]:
      - generic [ref=e136]:
        - text: "\"@ 2016\""
        - link "Automation Testing" [ref=e137]:
          - /url: "#"
        - text: "\"All Rights Reserved.\""
      - generic [ref=e138]:
        - link "" [ref=e139]:
          - /url: https://www.facebook.com/automationtesting2016/
        - link "" [ref=e141]:
          - /url: https://twitter.com/krishnasakinala
        - link "" [ref=e143]:
          - /url: https://www.linkedin.com/nhome/?trk=hb_signin
        - link "" [ref=e145]:
          - /url: https://plus.google.com/105286300926085335367
        - link "" [ref=e147]:
          - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | test ('full',async ({page})=>{
  3  |   await page.goto('https://demo.automationtesting.in/Register.html')
  4  |     const fname = await page.getByPlaceholder('First Name').fill('Rakesh')
  5  |     const lastname = await page.locator('//input[@placeholder="Last Name"]')
  6  |     await lastname.fill('sharma')
  7  |     const add = await page.locator('//textarea[contains(@class,"form-control ng-pristine")]')
  8  |     await add.fill('tiruvannamalai')
  9  |     const  emaail = await page.locator('//input[@type="email"]')
  10 | await emaail.getAttribute('pattern')
  11 | await emaail.getAttribute('required')
  12 | const ph = await page.locator('//input[contains(@class,"form-control ng-pristine ng-untouched ng-invalid")]')
> 13 | await ph.getAttribute('pattern')
     |          ^ Error: locator.getAttribute: Error: strict mode violation: locator('//input[contains(@class,"form-control ng-pristine ng-untouched ng-invalid")]') resolved to 3 elements:
  14 | await ph.getAttribute('required')
  15 | const gen = await page.locator('//input[@value="Male"]')    
  16 | await gen.check()
  17 | await gen.isChecked()
  18 | const hob = await page.locator('//input[@id="checkbox1"]')
  19 | await hob.check()
  20 | await hob.isChecked()
  21 | const lan = await page.locator('//div[@id="msdd"]')
  22 | lan.check()
  23 | const skill =await page.locator('//select[@id="Skills"]')
  24 | skill.selectOption({value:"Adobe InDesign"})
  25 | skill.locator('option:checked').allTextContents
  26 | 
  27 | const cou = await page.locator('//select[@id="country"]')
  28 | cou.selectOption([{value:"Australia"},{index:'2'}])
  29 | cou.locator('option:checked').allTextContents()
  30 |   
  31 | const year = await page.locator('//select[@id="yearbox"]')
  32 | year.selectOption({value:"1916"}).allTextContents()
  33 | 
  34 | const month = await page.locator('//select[@placeholder="Month"]')
  35 | month.selectOption({value:"January"}).allTextContents()
  36 | 
  37 | 
  38 | const day = await page.locator('//select[@id="daybox"]')
  39 | day.selectOption({value:"1"}).allTextContents()
  40 | 
  41 | await page.locator('//input[@id="firstpassword"]')
  42 | await page.locator('//input[@id="secondpassword"]')
  43 | await page.locator('//button[@id="submitbtn"]').click()
  44 | 
  45 | 
  46 | })
```
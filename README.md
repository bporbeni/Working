# California State Website

## File Structure

```
California_Website/
├── index.html                      # Home page (main entry point)
├── pages/
│   ├── sacramento.html            # Capital city page
│   ├── san-francisco.html         # City page #1
│   ├── los-angeles.html           # City page #2
│   └── contact.html               # Contact form with email validation
├── assets/
│   ├── css/
│   │   └── style.css              # Main stylesheet (all CSS requirements)
│   ├── js/
│   │   └── validation.js          # Email validation JavaScript
│   └── images/                    # Image directory (14 images needed)
├── IMAGES_NEEDED.md               # Complete list of required images
└── README.md                      # This file
```

---

## Design Theme: California State Colors

The website uses California's official state colors throughout:

- **Blue**: #003B7C (Primary color - headers, navigation links)
- **Gold**: #FDB515 (Accent color - navigation bar, borders, highlights)

I tried to use colors that represents California's state identity.

---

#### B1. Home Page (index.html)

- Main entry point introducing California
- Includes state facts, attractions, and industries
- Semantic elements: `<header>`, `<nav>`, `<section>`, `<aside>`, `<footer>`

#### B2. Three Interior City Pages

**B2a. Sacramento (Capital City)**

- Population: 524,943
- Year incorporated: 1850
- Region: Central Valley / Northern California
- Classification: Urban
- Average income: Slightly below state average

**B2b. San Francisco**

- Population: 873,965
- Year incorporated: 1850
- Region: San Francisco Bay Area / Northern California
- Classification: Urban
- Average income: Well above state average

**B2c. Los Angeles**

- Population: 3,898,747
- Year incorporated: 1850
- Region: Southern California
- Classification: Urban (with suburban areas)
- Average income: Slightly above state average

#### B3. Contact Form Page

- First name text field with label
- Last name text field with label
- Email address field with label
- Email confirmation field with label
- Question textarea with label
- Submit button
- Form validation via JavaScript

#### B4. Elements in All Pages

- Title in `<head>` section: Unique and descriptive for each page
- Relevant images with alt text: Multiple images per page, all with descriptive alt attributes
- Consistent navigation: Same navigation bar across all 5 pages
- Semantic elements: `<header>`, `<nav>`, `<section>`, `<aside>`, `<footer>` in every page

---

### C. Required HTML Elements

#### C1. External Link in New Window

- Location: Home page (index.html), `<aside>` section
- Links to https://www.ca.gov
- Opens in new tab with `target="_blank"` and `rel="noopener noreferrer"`

#### C2. Ordered List (3+ items)

- Home page: "Top Reasons to Visit California" (5 items)
- Sacramento page: "Top Attractions in Sacramento" (5 items)
- San Francisco page: "Top Attractions in San Francisco" (5 items)
- Los Angeles page: "Top Attractions in Los Angeles" (5 items)

#### C3. Unordered List (3+ items)

- Home page: "Quick Facts About California" (6 items)
- Sacramento page: "Key Features" (5 items)
- San Francisco page: "Key Features" (5 items)
- Los Angeles page: "Key Features" (5 items)
- Contact page: "Additional Resources" (4 items)

#### C4. HTML Table (3+ columns, 3+ rows)

- Home page: "Major Industries" table (3 columns × 4 data rows)
- Sacramento page: "City Statistics" table (2 columns × 5 data rows)
- San Francisco page: "City Statistics" table (2 columns × 5 data rows)
- Los Angeles page: "City Statistics" table (2 columns × 5 data rows)

---

### D. CSS Requirements (style.css)

#### D1. Font-Family Declaration

- Line 11-12: `font-family: 'Georgia', 'Times New Roman', serif;`
- Applied to body element, inherited throughout site

#### D2. :hover Pseudo-Class for Navigation

- Lines 62-68: Navigation links change background, color, and transform on hover
- Creates rollover effect with color swap (blue ↔ gold)

#### D3. Float Property

- Lines 130-139: `.feature-image` class uses `float: right;`
- Positions images to the right with text wrapping around them

#### D4. Absolute Positioning

- Lines 202-209: Decorative star element in aside sections
- Uses `position: absolute;` to place star in top-right corner

#### D5. Relative Positioning

- Lines 262-268: `.error-message` class uses `position: relative;`
- Allows for controlled positioning of error messages

#### D6. CSS Selectors

**Element Selector:**

- Lines 18-21: `header` element selector
- Styles all header elements across the site

**Class Selector (used twice on same page):**

- Lines 232-240: `.submit-btn` class (on contact page submit button)
- Lines 242-246: `.error-input` class (applied to both email fields when validation fails)

**ID Selector:**

- Lines 214-220: `#external-link` selector
- Styles the external link section on home page

---

### E. JavaScript Email Validation

**File:** assets/js/validation.js

**Functionality:**

- Validates that all form fields are filled
- Compares email and emailConfirm fields
- Shows alert box if emails don't match
- Highlights mismatched fields with red border
- Shows success message when validation passes
- Removes error styling when user corrects input

**Alert Message:** "Error: The email addresses do not match. Please check and try again."

---

### F. Layout Documentation

#### F1. Updated Layout Images

Two layout images should be created showing:

1. **Home Page Layout** - Based on index.html structure
2. **Interior Page Layout** - Based on city pages structure

Both layouts include clearly labeled:

- `<header>` - Logo, title, subtitle
- `<nav>` - Navigation links
- `<section>` - Main content area
- `<aside>` - Sidebar with additional info

---

**Created by:** Benaebi Porbeni
**Task:** Frontend D277 - Task 2
**Date:** 8 February 2026

---

## Works Cited

"California." _Wikipedia_, Wikimedia Foundation, 2026, www.wikipedia.org. Accessed 8 Feb. 2026.

_MDN Web Docs_. Mozilla Developer Network, developer.mozilla.org. Accessed 8 Feb. 2026.

State of California. _CA.gov_, 2026, www.ca.gov. Accessed 8 Feb. 2026.

---

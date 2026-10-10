# ECO Business Website

A company website for ECO, an invented business services company: who they are, what they offer, their numbers and a way to reach them. In English and Arabic.

ECO is a demo. The company, its numbers and its contact details are examples, and the contact form sends nothing.

## What is on the page

- **Hero** with the company's promise and a button that takes you to the contact form.
- **Work with us:** the three ways the company helps (consulting, development, marketing).
- **Our services:** each service with a picture and a short list of what the client receives.
- **Numbers:** year founded, employees, countries and offices, counted up when they scroll into view.
- **About ECO:** a short story of the company and its five offices.
- **Contact:** a form with each problem explained beside its field, a switch to agree to the privacy policy, and the phone and e-mail below it.
- **Privacy policy** on its own page.
- **Arabic** at `/ar`, right to left, with a switch in the header that keeps you on the same page.

## How it is built

- [React 18](https://react.dev) with [Vite](https://vite.dev), [React Router 7](https://reactrouter.com) and [Tailwind CSS 3](https://tailwindcss.com)
- No backend and no other dependencies

Some decisions worth knowing:

- **Everything the site says about the company is in one file**, `src/lib/company.js`, in both languages. The sections read from it, so a number such as the count of offices cannot say one thing in one place and another elsewhere.
- **Each section is its own component** in `src/sections/`, and `src/pages/Home.jsx` only lists them in order.
- **Both languages share the same components.** Every text is written once as a pair, `t('Services', 'الخدمات')`, and the layout uses logical directions (start and end), so nothing is mirrored by hand.
- **The service pictures are drawn in code** (`src/components/ServiceArt.jsx`), so the page loads no photos.
- **Accessible by default:** one `h1`, labelled form fields, a real switch for the agreement, visible keyboard focus, and animations that stand still for people who asked for less motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

# Lexisg-frontend-intern-test

A minimal React frontend for a Lexi-like legal assistant interface that allows users to:

- 💬 Ask a legal question
- 📄 See a generated AI answer
- 📚 View citations from legal documents
- 🔗 Click to open the original PDF source in a new tab


---

## 🖥️ Tech Stack
- React.js 
- Tailwind CSS
- No backend (simulated API)

---

## 📥 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Aniket52kr/Lexisg-frontend-intern-test.git
cd lexi-frontend-intern-test
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Visit: `http://localhost:5173`

---

## 💡 Features

- 📝 Text area input with loading spinner
- 🤖 AI-generated legal answer card
- 📎 Citation with source label and click-to-open PDF
- 🧠 Simulated scroll-to-paragraph behavior (optional mock)

---

## 🧪 Simulated API Logic
The API response is mocked in `utils/mockApi.js`:

```js
{
  answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988...",
  citations: [
    {
      text: "as the age of the deceased ... 10% of annual income ...",
      source: "Dani_Devi_v_Pritam_Singh.pdf",
      link: "https://lexisingapore-my.sharepoint.com/..."
    }
  ]
}
```

> Triggered on Submit. Delayed by 1.5 seconds to simulate network request.

---

## 📄 Citation Handling

- Citations are displayed below the answer with quote and filename.
- When clicked, the PDF **opens in a new tab** (due to SharePoint iframe restrictions).

### ❗ Note:
> SharePoint's Content Security Policy blocks PDF embedding inside iframes, so we use `window.open()` instead of displaying in a modal.

---

## 📸 Screenshots








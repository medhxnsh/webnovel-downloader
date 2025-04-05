# Webnovel Downloader

**Author:** medhxnsh

A browser-based JavaScript tool to extract and download all visible chapters from a Webnovel story page. Outputs a clean, formatted `.txt` file for offline reading.

---

## ✅ Features

- Extracts all **visible chapters** from `.cha-words` containers
- Automatically formats:
  - Chapter titles (centered, bold, clearly separated)
  - Chapter body text (indented, readable, well spaced)
  - Title, Author, and Summary metadata at the top
- Exports a `.txt` file: `allChaptersText.txt`
- No installation required — works directly through browser console

---

## 📘 Usage Instructions

Follow the steps below to download your Webnovel content:

---

### 1. **Open the Webnovel Page**

- Navigate to the Webnovel story you want to download.

---

### 2. **Load All Chapters**

- Scroll from the top of the page to the bottom.
- Wait until **every chapter is fully loaded and visible** on the page.

---

### 3. **Open Developer Tools**

- Right-click anywhere on the page
- Click **“Inspect”**
- Go to the **“Console”** tab  
  (Shortcut: `Ctrl + Shift + I` on Windows, `Cmd + Option + I` on Mac)

---

### 4. **Paste the Script**

- Open the `webnovel-downloader.js` file from this repository
- Copy the **entire** code
- Paste it into the browser's Console
- Press **Enter** to run the script

---

### 5. **Run the Download**

- Once the script runs, type the following command into the Console:

```js
allChaptersText.txt

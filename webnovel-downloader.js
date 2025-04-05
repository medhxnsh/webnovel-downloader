function extractAndDownloadAllChapters() {
    const chapterContainers = document.querySelectorAll('.cha-words');
    let allChaptersText = [];
  
    chapterContainers.forEach((container, index) => {
      const paragraphs = container.querySelectorAll('p');
      const chapterText = Array.from(paragraphs)
        .map(p => "    " + p.textContent.trim())
        .join('\n');
  
      const chapterTitle = `Chapter ${index + 1}`;
      const formattedTitle = `\n\n\n${chapterTitle.toUpperCase()}\n${'-'.repeat(chapterTitle.length)}\n\n`;
  
      allChaptersText.push(formattedTitle + chapterText);
    });
  
    const allText = allChaptersText.join('\n\n');
    const blob = new Blob([allText], { type: 'text/plain' });
  
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = 'allChaptersText.txt';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
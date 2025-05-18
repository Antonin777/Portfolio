function viewPDF(pdfPath) {
    window.open(pdfPath, '_blank');
}

function downloadPDF(pdfPath) {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath.split('/').pop(); // Extrait le nom du fichier
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

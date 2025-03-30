document.getElementById("printBill").addEventListener("click", function () {
    const receiptContent = document.getElementById("receipt").innerHTML;
    
    if (!receiptContent.trim()) {
        alert("No receipt data available to print.");
        return;
    }

    const printWindow = window.open("", "", "width=600,height=600");

    const receiptHTML = `
        <html>
        <head>
            <title>Bill Receipt</title>
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                    text-align: center;
                    background: #f4f7fc;
                    margin: 0;
                    padding: 0;
                }
                .receipt-container {
                    width: 90%;
                    max-width: 400px;
                    margin: auto;
                    padding: 20px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
                    border: 3px solid #6a11cb;
                    text-align: left;
                }
                .receipt-header {
                    text-align: center;
                    border-bottom: 2px solid #6a11cb;
                    padding-bottom: 10px;
                    margin-bottom: 15px;
                }
                .receipt-header img {
                    width: 70px;
                }
                .receipt-header h2 {
                    color: #6a11cb;
                    font-size: 22px;
                    margin-top: 5px;
                }
                .receipt-details p {
                    font-size: 16px;
                    margin: 8px 0;
                    padding: 8px;
                    background: #f8f9fa;
                    border-radius: 6px;
                    font-weight: 500;
                }
                .receipt-footer {
                    text-align: center;
                    margin-top: 15px;
                    font-size: 14px;
                    color: #555;
                    font-style: italic;
                }
            </style>
        </head>
        <body>
            <div class="receipt-container">
                <div class="receipt-header">
                    <img src="download.jpeg" width="150px" height="150px">
                    <h2>A.V.V.M. Sri Pushpam College</h2>
                </div>
                <div class="receipt-details">
                    ${receiptContent}
                </div>
                <div class="receipt-footer">
                    Thank you for your payment! <br>
                    A.V.V.M. Sri Pushpam College
                </div>
            </div>
            <script>
                window.print();
                window.close();
            <\/script>
        </body>
        </html>`;

    printWindow.document.write(receiptHTML);
    printWindow.document.close();
});
document.getElementById("printBill").addEventListener("click", function () {
    const printArea = document.getElementById("receipt").innerHTML;

    if (!printArea.trim()) {
        alert("No receipt data available to print.");
        return;
    }

    const originalContent = document.body.innerHTML;
    document.body.innerHTML = `
        <div style="text-align: center;">
            <h2>A.V.V.M. Sri Pushpam College</h2>
            ${printArea}
        </div>
    `;
    window.print();
    document.body.innerHTML = originalContent;
    location.reload();
});

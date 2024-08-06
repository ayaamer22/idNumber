document.getElementById('idForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const idNumber = document.getElementById('idNumber').value;
    const messageElement = document.getElementById('message');
    
    // Clear previous messages
    messageElement.textContent = '';
    messageElement.style.color = 'red';
    
    // Check if the field is empty
    if (idNumber === '') {
        messageElement.textContent = 'الحقل لا يقبل قيمة فارغة';
        return;
    }
    
    // Check if the field contains only digits
    if (!/^\d+$/.test(idNumber)) {
        messageElement.textContent = 'الحقل لا يقبل رموز أو أحرف';
        return;
    }
    
    // Check if the ID number is exactly 9 digits
    if (idNumber.length !== 9) {
        messageElement.textContent = 'رقم الهوية يجب أن يكون 9 أرقام';
        return;
    }
    
    // Verify the ID number using a specific algorithm
    const isValid = verifyIDNumber(idNumber);
    if (!isValid) {
        messageElement.textContent = 'رقم الهوية المدخل ليس رقم هوية صحيح';
    } else {
        messageElement.style.color = 'green';
        messageElement.textContent = 'رقم الهوية صحيح';
    }
});

function verifyIDNumber(idNumber) {
    // Example verification logic for a specific valid ID (407478486)
    return idNumber === '407478486';
}

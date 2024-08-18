document.getElementById('attendanceForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const department = document.getElementById('Department').value;
  const date = document.getElementById('date').value;
  const name = document.getElementById('Name').value;
  const status = document.getElementById('status').value;

  // Create new row
  const table = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  // Insert cells
  const departmentCell = newRow.insertCell(0);
  const dateCell = newRow.insertCell(1);
  const nameCell = newRow.insertCell(2);
  const statusCell = newRow.insertCell(3);

  // Fill cells with values
  departmentCell.textContent = department;
  dateCell.textContent = date;
  nameCell.textContent = name;
  statusCell.textContent = status;

  // Clear form fields
  document.getElementById('attendanceForm').reset();
});

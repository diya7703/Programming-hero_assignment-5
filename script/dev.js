// Handle individual task completion
  function CompleteButton(buttonId, taskId) {
     const button = document.getElementById(buttonId);
     const task = document.getElementById(taskId);

     if (!button || !task) return;

     button.addEventListener("click", function () {
    alert("Board Updated Successfully");

    // Disable button
    button.disabled = true;
    button.classList.add("opacity-50", "cursor-not-allowed");

    // Update counts
    const assignedTaskCount = document.getElementById("assigned-task-count");
    const completedTaskCount = document.getElementById("completed-task-count");

    let currentTask = parseInt(assignedTaskCount.textContent);
    let currentcompleteTask = parseInt(completedTaskCount.textContent);

    assignedTaskCount.textContent = currentTask > 0 ? currentTask - 1 : 0;
    completedTaskCount.textContent = currentcompleteTask + 1;

    // Add activity log entry
    const activityLog = document.getElementById("activity-log");
    if (activityLog.children.length === 1 && activityLog.children[0].textContent.includes("No recent activity")) {
      activityLog.innerHTML = ""; // Clear default text
    }

    const newLog = document.createElement("div");
    newLog.textContent = `✅ Task "${task.textContent}" marked as completed.`;
    newLog.className = "text-black";
    activityLog.prepend(newLog);
  });
}

//Clear History button
function ClearHistory() {
  const clearButton = document.querySelector(".btn.btn-primary");
  const activityLog = document.getElementById("activity-log");

  if (!clearButton || !activityLog) return;

  clearButton.addEventListener("click", function () {
    activityLog.innerHTML = '<div>No recent activity logged.</div>';
  });
}


CompleteButton("complete-btn-1", "task-title-1");
CompleteButton("complete-btn-2", "task-title-2");
CompleteButton("complete-btn-3", "task-title-3");
CompleteButton("complete-btn-4", "task-title-4");
CompleteButton("complete-btn-5", "task-title-5");
CompleteButton("complete-btn-6", "task-title-6");

//clear history
ClearHistory();

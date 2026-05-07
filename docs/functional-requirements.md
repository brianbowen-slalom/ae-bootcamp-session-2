# Functional Requirements

## Overview

This document defines the core functional requirements for the TODO application. These requirements guide feature development and serve as a reference for testing and future enhancements.

---

## 1. Task Management

### 1.1 Add a Task
- The user can add a new task by entering a title in a text input field and submitting the form.
- A task title is required; empty or whitespace-only submissions must be rejected.
- After a task is added, it appears immediately in the task list without a page reload.

### 1.2 View Tasks
- The user can view a list of all existing tasks.
- Tasks are displayed in order of creation date, newest first.
- Each task displays its title, due date (if set), priority level, and completion status.

### 1.3 Edit a Task
- The user can edit the title of an existing task inline.
- Changes are saved when the user confirms the edit (e.g., pressing Enter or clicking a save button).
- Editing can be cancelled to revert to the original title.

### 1.4 Delete a Task
- The user can delete any task from the list.
- Deleted tasks are removed immediately from the UI.

### 1.5 Complete a Task
- The user can mark a task as complete by toggling a checkbox.
- Completed tasks are visually distinguished (e.g., strikethrough text).
- The user can unmark a completed task to restore it to an active state.

---

## 2. Due Dates

### 2.1 Set a Due Date
- The user can assign a due date to a task when creating or editing it.
- The due date is optional.

### 2.2 Display Due Dates
- Due dates are shown alongside each task in a human-readable format (e.g., "May 10, 2026").
- Overdue tasks (past due date and not completed) are highlighted visually to draw attention.

---

## 3. Task Priority

### 3.1 Set Priority
- The user can assign a priority level to a task: **Low**, **Medium**, or **High**.
- Priority defaults to **Medium** if not explicitly set.

### 3.2 Sort by Priority
- The user can sort the task list by priority (High → Medium → Low).
- Sorting preference is applied immediately without a page reload.

---

## 4. Filtering and Sorting

### 4.1 Filter by Status
- The user can filter tasks to show: **All**, **Active** (not completed), or **Completed**.

### 4.2 Sort Tasks
- The user can sort tasks by:
  - Creation date (default, newest first)
  - Due date (earliest first)
  - Priority (highest first)
  - Alphabetical order (A–Z)

---

## 5. Persistence

### 5.1 Data Persistence
- All tasks are persisted in the backend database and survive page refreshes.
- The frontend fetches the current task list from the backend API on load.

---

## 6. Error Handling

### 6.1 User Feedback
- The user receives clear error messages when an operation fails (e.g., network error, invalid input).
- Success operations (add, edit, delete, complete) provide visual confirmation.

package com.example.backend.controller;

import com.example.backend.model.Task;
import com.example.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*")
public class TaskController {

    @Autowired
    private TaskService taskService;

    // ➤ Create task
    @PostMapping("/add")
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    // ➤ Get all tasks
    @GetMapping
    public Page<Task> getTasks(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {

        Pageable pageable = PageRequest.of(page, size);
        return taskService.getTasksWithPagination(pageable);
    }


    // ➤ Get task by UUID
    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable UUID id) {
        return taskService.getTaskById(id);
    }

    // ➤ Update task
    @PutMapping("/update/{id}")
    public Task updateTask(@PathVariable UUID id, @RequestBody Task task) {
        return taskService.updateTask(id, task);
    }

    // ➤ Delete task (FIXED → UUID)
    @DeleteMapping("/delete/{id}")
    public String deleteTask(@PathVariable UUID id) {
        taskService.deleteTask(id);
        return "Task deleted successfully";
    }
}

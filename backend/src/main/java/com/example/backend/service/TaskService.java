package com.example.backend.service;

import com.example.backend.model.Status;
import com.example.backend.model.Task;
import com.example.backend.repo.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TaskService {

    @Autowired
    private TaskRepo taskRepository;

    public Task createTask(Task task) {

        if (task.getId() == null) {
            task.setId(UUID.randomUUID());
        }

        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(UUID id) {
        return taskRepository.findById(id).orElse(null);
    }

    public Task updateTask(UUID id, Task newTask) {

        Task existing = taskRepository.findById(id).orElse(null);

        if (existing != null) {
            existing.setTitle(newTask.getTitle());
            existing.setDescription(newTask.getDescription());
            existing.setStatus(newTask.getStatus());

            return taskRepository.save(existing);
        }

        return null;
    }

    public void deleteTask(UUID id) {
        taskRepository.deleteById(id);
    }

    public Page<Task> getTasksWithPagination(Pageable pageable) {
        return taskRepository.findAll(pageable);
    }

    public List<Task> getTasksByStatus(Status status) {
        return taskRepository.findByStatus(status);
    }
}

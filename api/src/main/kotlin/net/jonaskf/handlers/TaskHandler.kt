package net.jonaskf.handlers

import org.springframework.stereotype.Component
import net.jonaskf.models.Task
import net.jonaskf.services.TaskService
import org.springframework.cloud.function.Function

@Component
class TaskHandler(val service: TaskService) {

  fun getTasks(): Function<Void, List<Task>> {
    return Function {
      service.getAllTasks()
    }
  }
}

package net.jonaskf.handlers

import org.springframework.stereotype.Component
import net.jonaskf.models.Project
import net.jonaskf.services.ProjectService
import org.springframework.cloud.function.Function

@Component
class ProjectHandler(val service: ProjectService) {

  fun getProjects(): Function<Void, List<Project>> {
    return Function {
      service.getAllProjects()
    }
  }
}

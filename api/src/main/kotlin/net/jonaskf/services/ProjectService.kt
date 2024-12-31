package net.jonaskf.services

import org.springframework.stereotype.Service
import net.jonaskf.models.Project
import net.jonaskf.models.User
import net.jonaskf.repositories.ProjectRepository

@Service
class ProjectService(val repository: ProjectRepository) {

  fun getAllProjects(): List<Project> = repository.findAll()

  fun addProject(name: String, parentId: Long?, tags: List<String>, owner: User): Project {
    val project = Project(name = name, parentId = parentId, tags = tags, owner = owner)
    return repository.save(project)
  }
}

package net.jonaskf.handlers

import org.springframework.stereotype.Component
import net.jonaskf.models.User
import net.jonaskf.services.UserService
import org.springframework.cloud.function.Function

@Component
class UserHandler(val service: UserService) {

  fun getUsers(): Function<Void, List<User>> {
    return Function {
      service.getAllUsers()
    }
  }
}

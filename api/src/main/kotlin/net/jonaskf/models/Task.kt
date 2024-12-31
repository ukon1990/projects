package net.jonaskf.models

import jakarta.persistence.*

@Entity
data class Task(
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  val id: Long = 0,
  var name: String,
  var projectId: Long?,
  @ManyToOne val owner: User
)

package net.jonaskf.models

import jakarta.persistence.*

@Entity
data class Project(
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  val id: Long = 0,
  var name: String,
  var parentId: Long? = null,
  var tags: List<String> = emptyList(),
  @ManyToOne val owner: User
)
